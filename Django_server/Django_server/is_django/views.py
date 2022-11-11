from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from is_django.models import is_django
from is_django.serializers import Is_djangoSerializer
from rest_framework.decorators import api_view



@api_view(['GET', 'POST', 'DELETE'])
def is_django_list(request):
    if request.method == 'GET':
        is_djangos = is_django.objects.all()
        is_djangos_serializer = Is_djangoSerializer(is_djangos, many=True)
        return JsonResponse(is_djangos_serializer.data, safe=False)
        # 'safe=False' for objects serialization
 
    elif request.method == 'POST':
        django_data = JSONParser().parse(request)
        django_serializer = Is_djangoSerializer(data=django_data)
        if django_serializer.is_valid():
            django_serializer.save()
            return JsonResponse(django_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(django_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = is_django.objects.all().delete()
        return JsonResponse({'message': '{} Tutorials were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
 
