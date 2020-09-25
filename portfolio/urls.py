from django.urls import path
from . import views
from . import api


app_name = "portfolio"

urlpatterns = [
    path("", views.index, name="index"),
    path("message/", views.message, name="message"),

    # API
    path('api/projects', api.ProjectsAPI.as_view()),
    path('api/project/<int:pk>', api.ProjectAPI.as_view()),
    path('api/skills', api.SkillsAPI.as_view()),
    path('api/developer', api.DeveloperAPI.as_view()),
]
