from django.conf.urls import url, include
from . import views
urlpatterns = [

    url(r'^$', views.loggedin),
    url(r'^courses$', views.courses),
    url(r'^add$', views.add),
    url(r'^(?P<course_id>\d+)/view$', views.view),
]