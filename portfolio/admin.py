from django.contrib import admin
from . models import Message, Project, Image, Skill, Developer

admin.site.register(Message)
admin.site.register(Project)
admin.site.register(Image)
admin.site.register(Skill)
admin.site.register(Developer)
