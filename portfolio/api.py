from rest_framework import generics
from . serializers import ImageSerializer, ProjectSerializer, SkillSerializer, DeveloperSerializer
from . models import Project, Skill, Developer


class ProjectsAPI(generics.ListAPIView):
    """
     API endpoint to retrieve list of projects in the database.
    """
    serializer_class = ProjectSerializer

    def get_queryset(self):
        return Project.objects.all()


class ProjectAPI(generics.RetrieveAPIView):
    """
     API endpoint to retrieve a project in the database.
    """
    serializer_class = ProjectSerializer

    def get_queryset(self):
        return Project.objects.all()


class SkillsAPI(generics.ListAPIView):
    """
     API endpoint to retrieve list of skills in the database.
    """
    serializer_class = SkillSerializer

    def get_queryset(self):
        return Skill.objects.all()


class DeveloperAPI(generics.ListAPIView):
    """
     API endpoint to developer info.
    """
    serializer_class = DeveloperSerializer

    def get_queryset(self):
        return Developer.objects.all()[:1]
