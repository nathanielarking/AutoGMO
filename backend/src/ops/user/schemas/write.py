from dataclasses import dataclass

from src.domain.user.sanitizers import UserSanitizer
from src.utils import sanitizers

from ..services.sanitization.password import validate_password_match


@dataclass
class UserCreateInput:
    username: str
    email_address: str
    password1: str
    password2: str

    async def sanitize(self, user_sanitizer: UserSanitizer) -> None:
        validate_password_match(password1=self.password1, password2=self.password2)

        sanitized_data = await user_sanitizer.sanitize(
            input={
                "username": self.username,
                "email_address": self.email_address,
                "password": self.password1,
            },
            sanitization_select={
                "username": ["length", "regex", "ban", "unique"],
                "email": ["length", "regex", "ban", "unique", "email"],
                "password": ["length", "regex", "ban"],
            },
        )
        self.username = sanitized_data["username"]
        self.email_address = sanitized_data["email_address"]
        self.password1 = sanitized_data["password"]
        self.password2 = sanitized_data["password"]
