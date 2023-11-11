from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from litestar import Litestar

# from .dependencies import application_layer_dependencies
# from .lifecycle import lifecycle
# from .router import base_router


def create_app() -> "Litestar":
    from litestar import Litestar
    from src.api.litestar.dependencies import application_layer_dependencies
    from src.api.litestar.router import create_base_router

    base_router = create_base_router()

    app = Litestar(
        route_handlers=[base_router], dependencies=application_layer_dependencies
    )
    return app
