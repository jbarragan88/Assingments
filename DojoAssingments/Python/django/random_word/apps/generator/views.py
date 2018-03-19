from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

# Create your views here.
def start():
    request.session['attempt'] = 0
def index(request):
    print "made it to little url index"
    request.session['attempt'] += 1
    random = {
        "random1" : get_random_string(length=14)
    }
    return render(request, 'index.html', random)

def reset(request):
    request.session['attempt'] = 0
    print "made it to little url reset"
    return redirect('http://localhost:8000/')