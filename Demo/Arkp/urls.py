from django.urls import path
from Arkp import views

urlpatterns = [
    path('',views.index,name='index'),
    path('enquiry',views.enquiry,name='enquiry'),
    path('login',views.login,name='login'),
    path('registerUser',views.registerUser,name='registerUser'),
    path('updateUser',views.updateUser,name='updateUser'),
    path('deleteUser',views.deleteUser,name='deleteUser'),
    path('checkuser',views.checkuser,name='checkuser')

]
