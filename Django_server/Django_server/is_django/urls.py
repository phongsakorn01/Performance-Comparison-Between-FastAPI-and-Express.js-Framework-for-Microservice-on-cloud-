from django.urls import re_path
from is_django import views 
 
urlpatterns = [ 
    re_path(r'^users/users/$', views.is_django_list),
   
]