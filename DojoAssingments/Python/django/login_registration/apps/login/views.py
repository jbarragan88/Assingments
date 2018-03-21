from django.shortcuts import render, redirect

from django.contrib import messages
from models import *
import bcrypt

# Create your views here.
def index(request):
    return render(request, 'index.html')

def registration(request):
    errors = User.objects.validate_user(request.POST)

    if len(errors):
        for tag, error in errors.iteritems():
            messages.error(request, error)
        return redirect('/')
    else:
        first_name = request.POST['first_name']
		last_name = request.POST['last_name']
		email = request.POST['email']
		password = request.POST['password']
        hashed_pw = bcrypt.hashpw(password.encode(), bcrypt.gensalt())

        User.objects.create(first_name=first_name, last_name=last_name, email=email, password=hashed_pw)
        user = User.objects.get(email=email)
        request.session['id'] = user.id
        return redirect('/loggedin')

def login(request):
    return redirect('/loggedin')

def loggedin(request):
    return render(request, 'loggedin.html')