from django.conf import settings
from django.shortcuts import render, redirect
from django.core.mail import send_mail
from . models import Message


def index(request):

    return render(request, "home/index.html")

def message(request):
    name = request.POST.get("name")
    email = request.POST.get("email")
    message = request.POST.get("message")
    message_obj = Message.objects.create(name=name, email=email, message=message)
    sendEmail(name, email, message)

    return redirect("home:index")

def sendEmail(name, email, message):
    subject = "Mail from HRD Portfolio Website"
    from_email = settings.DEFAULT_FROM_EMAIL
    to_email = [settings.DEFAULT_FROM_EMAIL]


    send_mail(subject, message + " --- {}".format(name), email,
               to_email, fail_silently=False)
