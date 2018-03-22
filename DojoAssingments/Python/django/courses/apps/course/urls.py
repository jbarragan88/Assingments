from django.conf.urls import url, include
from . import views
urlpatterns = [

    url(r'^$', views.loggedin),
    url(r'^/courses$', views.courses),
    url(r'^/add$', views.add),
]