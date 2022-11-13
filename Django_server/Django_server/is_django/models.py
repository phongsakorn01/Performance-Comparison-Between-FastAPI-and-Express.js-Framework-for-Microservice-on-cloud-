from django.db import models

class is_django(models.Model):
    customId = models.CharField(max_length=255, blank=False, default='')
    fname = models.CharField(max_length=255, blank=False, default='')
    lname = models.CharField(max_length=255, blank=False, default='')
    age = models.CharField(max_length=255, blank=False, default='')
    address = models.CharField(max_length=255, blank=False, default='')
    tel = models.CharField(max_length=255, blank=False, default='')
 
