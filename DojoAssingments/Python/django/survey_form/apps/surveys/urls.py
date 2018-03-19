from django.conf.urls import url
from . import views  

urlpatterns = [
    url(r'^$', views.index),
    url(r'^complete$', views.rand),
    url(r'^send$', views.sent),
    url(r'^result$', views.results),
]
