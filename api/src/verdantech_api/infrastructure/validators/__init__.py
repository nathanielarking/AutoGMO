from src.verdantech_api import settings

from .implementations.email import EmailValidator
from .implementations.password import PasswordValidator
from .implementations.username import UsernameValidator


def provide_email_validator():
    return EmailValidator(
        min_length=settings.EMAIL_MIN_LENGTH,
        max_length=settings.EMAIL_MAX_LENGTH,
        regex=None,
        blacklist=[],
        whitelist=[],
        min_length_message="Requires minimum {validate_against} characters",
        max_length_message="Allows minimum {validate_against} characters",
        regex_message="Must fit pattern: {validate_against}",
        banned_input_message="Input not allowed",
    )


def provide_username_validator():
    return UsernameValidator(
        min_length=settings.USERNAME_MIN_LENGTH,
        max_length=settings.USERNAME_MAX_LENGTH,
        regex=None,
        blacklist=[],
        whitelist=[],
        min_length_message="Requires minimum {validate_against} characters",
        max_length_message="Allows minimum {validate_against} characters",
        regex_message="Must fit pattern: {validate_against}",
        banned_input_message="Username unsafe or offensive",
    )


def provide_password_validator():
    return PasswordValidator(
        min_length=settings.PASSWORD_MIN_LENGTH,
        max_length=settings.PASSWORD_MAX_LENGTH,
        regex=None,
        blacklist=[],
        whitelist=[],
        min_length_message="Requires minimum {validate_against} characters",
        max_length_message="Allows minimum {validate_against} characters",
        regex_message="Must fit pattern: {validate_against}",
        banned_input_message="Choose a stronger password!",
    )
