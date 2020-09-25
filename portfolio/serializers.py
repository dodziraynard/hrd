from rest_framework import serializers
from . models import Project, Image, Skill, Developer


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = "__all__"


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, required=False, read_only=True)

    class Meta:
        model = Project
        fields = "__all__"


class DeveloperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Developer
        fields = "__all__"
