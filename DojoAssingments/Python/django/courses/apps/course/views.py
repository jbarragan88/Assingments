from django.shortcuts import render, redirect
from ..login.models import *
# Create your views here.
def loggedin(request, id):
    if request.session.get('id') == None:
        return redirect('/')
    user = User.objects.get(id=request.session['id'])
    context = {
        'user': user
    }
    return render(request , 'loggedin.html', context)

def courses(request, id):
    user = User.objects.get(id=request.session['id'])
    context = {
        'user': user
    }
    return render(request, 'courses.html', context)

def add(request, id):
    user = User.objects.get(id=request.session['id'])
    context = {
        'user': user
    }
    return render(request, 'create.html', context)

def view(request, id):
    user = User.objects.get(id=request.session['id'])
    context = {
        'user': user
    }
    return render(request, 'view.html', context)