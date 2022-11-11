from django.db import models

class is_django(models.Model):
    id = models.CharField(primary_key=True,max_length=170)
    fname = models.CharField(max_length=70, blank=False, default='')
    lname = models.CharField(max_length=70, blank=False, default='')
    username = models.CharField(max_length=70, blank=False, default='')
    email = models.EmailField()
    tel = models.CharField(max_length=70, blank=False, default='')
    password = models.CharField(max_length=70, blank=False, default='')
    confirm_password = models.CharField(max_length=70, blank=False, default='')
