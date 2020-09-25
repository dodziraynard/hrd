from django.shortcuts import render, redirect
from . models import Message
from django.views.decorators.csrf import csrf_exempt


def index(request):
    template_name = "index.html"

    return render(request, template_name)


@csrf_exempt
def message(request):
    name = request.POST.get("name")
    email = request.POST.get("email")
    message = request.POST.get("message")
    message_obj = Message.objects.create(
        name=name, email=email, message=message)

    print(name, email, message)
    # sendEmail(name, email, message)

    return redirect("portfolio:index")
