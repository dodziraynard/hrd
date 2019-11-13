from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

app_name = "home"

urlpatterns = [
    path("", views.index, name="index"),
    path("message/", views.message, name="message"),
]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
