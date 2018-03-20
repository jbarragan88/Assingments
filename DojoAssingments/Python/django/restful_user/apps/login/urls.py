from django.conf.urls import url, include
from . import views
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^create$', views.create, name='create'),
    url(r'^creating$', views.creating, name='creating'),
    url(r'^users$', views.users, name='users'),
    url(r'^user/$', views.user, name='user'),
]