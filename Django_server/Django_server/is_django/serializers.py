from rest_framework import serializers 
from is_django.models import is_django
 
 
class Is_djangoSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = is_django
        fields = ( 'id' ,
                  'fname',
                  'lname',
                  'username',
                  'email',
                  'tel',
                  'password',
                  'confirm_password'
                  
                  )