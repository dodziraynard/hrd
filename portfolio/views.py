from django.shortcuts import render, redirect
from . models import Message
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.utils.html import strip_tags
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives


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

    if name and email and message:
        context = {
            "subject": "Message from portfolio website",
            "content": message,
            "email": email,
            "name": name
        }

        html_content = render_to_string(
            "portfolio/email_template.html", context)
        text_content = strip_tags(html_content)
        email = EmailMultiAlternatives(
            "Message from portfolio website", text_content, settings.DEFAULT_FROM_EMAIL, [settings.DEFAULT_TO_EMAIL])

        email.attach_alternative(html_content, "text/html")
        try:
            email.send()
        except Exception as e:
            print(e)
    return redirect("portfolio:index")
