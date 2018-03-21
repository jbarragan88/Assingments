from django.shortcuts import render, redirect

from django.contrib import messages
import bcrypt

# Create your views here.
def index(request):
    return render(request, 'index.html')

def registration(request):
    return redirect('/loggedin')

def login(request):
    return redirect('/loggedin')

def loggedin(request):
    return render(request, 'loggedin.html')