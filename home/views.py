from django.shortcuts import render, redirect
from . models import Message


def index(request):

    return render(request, "home/index.html")

def message(request):
    name = request.POST.get("name")
    email = request.POST.get("email")
    message = request.POST.get("message")
    message_obj = Message.objects.create(name=name, email=email, message=message)
    print(name, email, message)

    return redirect("home:index")
