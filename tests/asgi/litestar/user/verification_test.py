# Standard Library
from dataclasses import asdict

# External Libraries
import pytest
from litestar.testing import AsyncTestClient

# VerdanTech Source
from src.asgi.litestar.user import routes
from src.ops.user.schemas import verification as verification_ops_schemas

pytestmark = [pytest.mark.asgi]


class TestUserVerificationApiController:
    # ================================================================
    # UserVerificationApiController.user_email_confirmation_request() tests
    # ================================================================
    async def test_user_email_confirmation_request_nonexistant_user(
        self, litestar_client: AsyncTestClient
    ) -> None:
        """
        Ensure that the user_email_confirmation_request endpoint returns
        a failure status code when no email_address exists.

        Args:
            litestar_client (AsyncTestClient): test client fixture.
        """
        path = litestar_client.app.route_reverse(
            routes.USER_EMAIL_VERIFICATION_REQUEST_NAME
        )
        input_data = verification_ops_schemas.UserVerifyEmailRequestInput(
            email_address="existing_email@gmail.com"
        )

        response = await litestar_client.post(
            path,
            json=asdict(input_data),
        )

        assert response.status_code == 404

    async def test_user_email_confirmation_request_success(
        self, litestar_client: AsyncTestClient
    ) -> None:
        """
        Ensure that the user_email_confirmation_request endpoint returns
        a success status code.

        Args:
            litestar_client (AsyncTestClient): test client fixture.
        """
        pass

    # ================================================================
    # UserVerificationApiController.user_email_confirmation_confirm() tests
    # ================================================================
    async def test_user_email_confirmation_confirm_success(
        self, litestar_client: AsyncTestClient
    ) -> None:
        """
        Ensure that the user_email_confirmation_confirm endpoint returns
        a success status code.

        Args:
            litestar_client (AsyncTestClient): test client fixture.
        """
        pass

    # ================================================================
    # UserVerificationApiController.user_password_reset_request() tests
    # ================================================================
    async def test_user_password_reset_request_success(
        self, litestar_client: AsyncTestClient
    ) -> None:
        """
        Ensure that the user_password_reset_request endpoint returns
        a success status code.

        Args:
            litestar_client (AsyncTestClient): test client fixture.
        """
        pass

    # ================================================================
    # UserVerificationApiController.user_password_reset_confirm() tests
    # ================================================================
    async def test_user_password_reset_confirm_success(
        self, litestar_client: AsyncTestClient
    ) -> None:
        """
        Ensure that the user_password_reset_confirm endpoint returns
        a success status code.

        Args:
            litestar_client (AsyncTestClient): test client fixture.
        """
        pass
