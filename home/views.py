from django.conf import settings
from django.shortcuts import render, redirect
from django.core.mail import send_mail


def index(request):

    return render(request, "home/index.html")


def message(request):
    return redirect("home:index")


def sendEmail(name, email, message):
    subject = "Mail from HRD Portfolio Website"
    from_email = settings.DEFAULT_FROM_EMAIL
    to_email = "dodzireynard@gmail.com"

    # send_mail(subject, message + " --- {}".format(name), email,
    #            to_email, fail_silently=False)
