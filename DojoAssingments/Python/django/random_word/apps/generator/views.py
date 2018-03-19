from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    print "made it to little url index"
    return render(request, 'index.html')

def reset(request):
    print "made it to little url reset"
    return render(request, 'index.html')