from contextlib import asynccontextmanager

import sqlalchemy.exc as alchemy_exceptions
from src.verdantech_api.domain.interfaces.persistence import exceptions


@asynccontextmanager
async def motor_exception_map():
    """Map motor/pymongo exceptions to native domain equivalents"""
    try:
        yield
    except alchemy_exceptions.IntegrityError as error:
        raise exceptions.RepositoryError from error
    except alchemy_exceptions.SQLAlchemyError as error:
        raise exceptions.RepositoryError from error
