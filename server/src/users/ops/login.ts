import env from 'env';
import z from 'zod';
import { diContainer } from '@fastify/awilix';
import { UserLoginCommand } from '@vdt-webapp/common/src/user/mutations';
import { NotFoundError, AuthenticationError } from 'common/errors';

import { verifyPassword } from '../auth/passwords';
import { encodeAccessToken, encodeRefreshToken } from '../auth/tokens';

export type UserLoginResult = {
	/** The encoded access token. */
	accessToken: string;
	/** The encoded refresh token. */
	refreshToken: string;
	/** The duration of time until access expires, in seconds. */
	expiryTimeSeconds: number;
};

/**
 * Authenticates the user and provides encoded JWT tokens.
 * @param command The login command.
 * @param container The service locator.
 * @returns The encoded access and refresh tokens and the access expiry time.
 */
const userLogin = async (
	command: z.infer<typeof UserLoginCommand>,
	container: typeof diContainer
): Promise<UserLoginResult> => {
	const triplit = container.resolve('triplit');

	/** Fetch the user from the database. */
	const user = await triplit.fetchOne({
		collectionName: 'accounts',
		where: [['verifiedEmail', '=', command.email]]
	});
	if (user == null) {
		throw new NotFoundError('User does not exist', {
			fieldErrors: { email: ['This email does not exist.'] }
		});
	}

	/** Verify the provided password. */
	if ((await verifyPassword(command.password, user.hashedPassword)) == false) {
		throw new AuthenticationError('Incorrect password', {
			fieldErrors: { password: ['This password is incorrect.'] }
		});
	}

	/** Encode both access and refresh tokens. */
	const accessToken = await encodeAccessToken(user.id);
	const refreshToken = await encodeRefreshToken(user.id);

	return { accessToken, refreshToken, expiryTimeSeconds: env.ACCESS_TOKEN_EXPIRY_S };
};
export default userLogin;
