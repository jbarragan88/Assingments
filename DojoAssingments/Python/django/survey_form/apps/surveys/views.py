from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return render(request, 'index.html')

def rand(request):
    return render(request, 'success.html')

def count():
    request.session['counter'] = "0"

def sent(request):
    print "received info"
    request.session['name'] = request.POST['name']
    request.session['location'] = request.POST['location']
    request.session['language'] = request.POST['language']
    request.session['comment'] = request.POST['comment']
    return redirect('/result')

def results(request):
    return render(request, 'results.html')