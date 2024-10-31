import env from 'env';
import { diContainer } from '@fastify/awilix';
import { AuthenticationError } from 'common/errors';

import {
	decodeRefreshToken,
	encodeAccessToken,
	encodeRefreshToken
} from '../auth/tokens';
import type { UserLoginResult } from './login';

const userRefresh = async (
	refreshToken: string | null,
	container: typeof diContainer
): Promise<UserLoginResult> => {
	const triplit = container.resolve('triplit');

	/** If no refresh token was provided, false authentication. */
	if (refreshToken == null) {
		throw new AuthenticationError('No refresh credential.', {
			nonFormErrrors: ['Authentication expired. Please login again.']
		});
	}

	/** Decode the provided token. */
	const decodedToken = await decodeRefreshToken(refreshToken);
	if (decodedToken == null) {
		throw new AuthenticationError('Malformed refresh credential.', {
			nonFormErrrors: ['Authentication expired. Please login again.']
		});
	}

	/** Fetch the user represented by the token. */
	const user = await triplit.fetchById('users', decodedToken.uid);
	if (user == null) {
		throw new AuthenticationError('No refresh credential.', {
			nonFormErrrors: ['Authentication expired. Please login again.']
		});
	}

	/**
	 * Validate token.
	 * TODO: When a token denylist is added, check that here.
	 * Also add the used token to the denylist.
	 * Eventually, add a logout endpoint to do this as well.
	 */

	/** Encode both new access and refresh tokens. */
	const newAccessToken = await encodeAccessToken(user.id);
	const newRefreshToken = await encodeRefreshToken(user.id);

	return {
		accessToken: newAccessToken,
		refreshToken: newRefreshToken,
		expiryTimeSeconds: env.ACCESS_TOKEN_EXPIRY_S
	};
};
export default userRefresh;
