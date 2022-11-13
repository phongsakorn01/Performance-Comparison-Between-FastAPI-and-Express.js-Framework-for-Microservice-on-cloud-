from rest_framework import serializers 
from is_django.models import is_django
 
 
class Is_djangoSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = is_django
        fields = ('customId',
                  'fname',
                  'lname',
                  'age',
                  'address',
                  'tel',
                  )