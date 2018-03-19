from django.shortcuts import render, HttpResponse, redirect
import random
# Create your views here.
def index(request):
    if request.session.get('gold') == None:
        request.session['gold'] = 0

    if request.session.get('activities') == None:
        request.session['activities'] = []

    print request.session['gold']
    print request.session['activities']

    return render(request, 'index.html')

def gold(request):
    print request.POST['building']
    print "!!!"

    if request.POST['building'] == "farm":
        request.session['gold'] += random.randint(10,21)
        request.session['activities'].append("You went Farming")

    elif request.POST['building'] == "cave":
        request.session['gold'] += random.randint(5,11)
        request.session['activities'].append("You went into a Cave")

    elif request.POST['building'] == "house":
        request.session['gold'] += random.randint(2,6)
        request.session['activities'].append("You cleaned your House")

    elif request.POST['building'] == "casino":
        request.session['gold'] += random.randint(-50,51)
        request.session['activities'].append("You went Gambling")
    if request.session['gold'] < 0:
        return redirect('/death')
    return redirect('/')

def reset(request):
    request.session['gold'] = 0
    request.session['activities'] = []
    return redirect('/')

def death(request):
    return render(request, 'death.html')