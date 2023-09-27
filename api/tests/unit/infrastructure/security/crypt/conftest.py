import pytest
from src.verdantech_api.infrastructure.security.crypt.passlib import (
    PasslibPasswordCrypt,
)


@pytest.fixture
def passlib_password_crypt():
    return PasslibPasswordCrypt()