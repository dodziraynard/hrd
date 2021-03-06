# Generated by Django 3.1.1 on 2020-09-23 10:00

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Developer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('phone', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=254)),
                ('fb', models.URLField()),
                ('linkedin', models.URLField()),
                ('github', models.URLField()),
                ('about', ckeditor.fields.RichTextField()),
                ('intro', ckeditor.fields.RichTextField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='developer')),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.ImageField(upload_to='images')),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('message', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', ckeditor.fields.RichTextField()),
                ('image', models.ImageField(upload_to='skills')),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', ckeditor.fields.RichTextField()),
                ('icon', models.ImageField(upload_to='icons')),
                ('git_link', models.URLField(blank=True, null=True)),
                ('live_link', models.URLField(blank=True, null=True)),
                ('images', models.ManyToManyField(related_name='project', to='portfolio.Image')),
            ],
        ),
    ]
