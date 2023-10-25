from typing import Any, Dict, Protocol


class AbstractEmailClient(Protocol):
    """Interface for reading emails from file and sending them"""

    async def compile_and_send(
        self, filepath: str, receiver: str, subject: str, **kwargs: Dict[str, Any]
    ):
        """Compile email from html, and send it as html
            with a plaintext alternative

        Args:
            filepath (str): path of the html content
            receiver (str): recipient address
            subject (str): subject line of the message
            kwargs (Dict[str, Any]): arguments to insert into html
        """
        ...


class AbstractEmailEmitter(Protocol):
    """Interface for emitting emails into an event stream"""

    def __call__(
        self, filepath: str, receiver: str, subject: str, **kwargs: Dict[str, Any]
    ) -> None:
        """Call the email emit event. Access to the event emitter is
        configured in the imlementation.
        """
        ...