from __future__ import unicode_literals

from django.db import models

# Create your models here.
#class UserManager(models.manager):
    #def basic-validator(self, postData):

class Users(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # *************************
    # Connect an instance of BlogManager to our Blog model overwriting
    # the old hidden objects key with a new one with extra properties!!!
    #objects = UserManager()
    # *