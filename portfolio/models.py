from django.db import models
from ckeditor.fields import RichTextField


class Message(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name


class Project(models.Model):
    name = models.CharField(max_length=200)
    description = RichTextField()
    icon = models.ImageField(upload_to="uploads/projects")
    images = models.ManyToManyField("Image", related_name="project")
    git_link = models.URLField(blank=True, null=True)
    live_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name


class Skill(models.Model):
    name = models.CharField(max_length=200)
    description = RichTextField()
    image = models.ImageField(upload_to="uploads/skills")

    def __str__(self):
        return self.name


class Image(models.Model):
    file = models.ImageField(upload_to="uploads/images")


class Developer(models.Model):
    name = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)
    email = models.EmailField()
    fb = models.URLField()
    linkedin = models.URLField()
    github = models.URLField()
    about = RichTextField()
    intro = RichTextField()
    resume = models.FileField(upload_to="uploads/resume")
    image = models.ImageField(
        upload_to="uploads/developer", null=True, blank=True)

    class Meta:
        verbose_name_plural = "Developer"

    def __str__(self):
        return self.name
