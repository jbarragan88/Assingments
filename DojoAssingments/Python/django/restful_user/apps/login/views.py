from django.shortcuts import render, redirect, HttpResponse
from .models import Users
# Create your views here.
def index(request):
    return render(request, 'index.html')

def create(request):
    return render(request, 'new.html')

def users(request):
    context = {
        "user": Users.objects.all(),
    }
    return render(request, 'users.html', context)

def creating(request):
    print request.POST['name']
    Users.objects.create(
        full_name= request.POST['name'],
        email= request.POST['email'],
    )
    return redirect('/')

def viewuser(request, id):
    return render(request, 'user.html', {'user': Users.objects.get(id=id)})