from django.urls import re_path, include 
 
urlpatterns = [ 
   re_path(r'^', include('is_django.urls')),
]