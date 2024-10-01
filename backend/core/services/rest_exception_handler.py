import structlog

from django.http import Http404

from rest_framework import status, exceptions
from rest_framework.response import Response


logger = structlog.getLogger(__name__)


def rest_exception_handler(exc, _):
    if isinstance(exc, Http404):
        return Response(status=status.HTTP_404_NOT_FOUND)

    if isinstance(exc, (exceptions.AuthenticationFailed, exceptions.NotAuthenticated)):
        return Response(
            {"error": "Unauthorized"},
            status=status.HTTP_401_UNAUTHORIZED,
        )

    # Handle django rest framework exceptions
    if isinstance(exc, exceptions.APIException):
        logger.exception("API error", exc_info=exc)
        return Response({"error": exc.detail}, status=exc.status_code)

    logger.exception("error", exc_info=exc)
    return Response(
        {"error": "Sorry, we encountered an internal server error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
    )
