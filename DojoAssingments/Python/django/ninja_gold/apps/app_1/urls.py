from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^counting$', views.gold),
    url(r'^reset$', views.reset),
    url(r'^death$', views.death),
]