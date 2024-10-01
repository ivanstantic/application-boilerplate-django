import structlog
from typing import Any
from django.conf import settings
from django.views import View
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator
from django.shortcuts import render


logger = structlog.getLogger(__name__)


class IndexView(View):
    @method_decorator(ensure_csrf_cookie)
    @staticmethod
    def get(request) -> Any:
        return render(
            request,
            template_name="index.html",
            context={
                "version": settings.APP_VERSION,
            },
        )
