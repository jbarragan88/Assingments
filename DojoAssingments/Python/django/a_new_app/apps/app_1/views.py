from django.shortcuts import render, HttpResponse, redirect
import datetime
from time import gmtime, strftime, localtime
from django.template.loader import get_template
# the index function is called when root is visited
def index(request):
  now_time = {
    'tiempo' : datetime.datetime.now()
  }
  return render(request, 'index.html', now_time)
