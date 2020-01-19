from django.shortcuts import render,redirect
from django.http import HttpResponse,JsonResponse,StreamingHttpResponse
from datetime import datetime,date
import time
from django.db import connections

# Create your views here.
def index(request):
    return render(request, 'index.html' ,{})

def enquiry(request):
    if request.method == 'POST':
        name=request.POST['name']
        email=request.POST['email']
        contact=request.POST['number']
        subject=request.POST['subject']
        message=request.POST['message']
        time=datetime.now()

        cursor = connections['default'].cursor()
        sql = "INSERT INTO enquiry(name, contact, email, subject, mesg, time, groupname) VALUES( %s , %s , %s, %s, %s, %s, %s)"
        val = (name, contact,email, subject, message, time, 'Admin')
        try:
            cursor.execute(sql , val)
        except:
            cursor.execute(sql , val)
            data={'None': 'none'}
            return JsonResponse(data)
        if(cursor.rowcount>0):
            data={'True': 'true'}
            return JsonResponse(data)
        else:
            data={'None': 'none'}
            return JsonResponse(data)
    else:
        return render(request, 'index.html' ,{})


def login(request):
    if request.method == "POST":
        data={}
        username=request.POST['namelog']
        password=request.POST['passlog']
        cursor = connections['default'].cursor()
        sql = "SELECT Username,Password,ContactNo,EmailID FROM Users WHERE Username = %s and Password = %s"
        val = (username, password)
        try:
            cursor.execute(sql , val)
            result=cursor.fetchone()
            if(len(result)>0):
                data={'Username':username,'Password':password, 'Contact':result[2],'EmailID':result[3]}
                return JsonResponse(data)
            else:
                data['None']='None'
                return JsonResponse(data)    
        except:
            data['None']='None'
            return JsonResponse(data)
    else:
        return render(request, 'login.html' ,{})


def checkuser(request):
    if request.method == "POST":
        username=request.POST['uname']
        data={}
        cursor = connections['default'].cursor()
        sql = "SELECT Username FROM Users WHERE Username = %s"
        val = (username, )
        try:
            cursor.execute(sql , val)
            result=cursor.fetchone()
            if(len(result)>0):
                data['True']='True'
                return JsonResponse(data)
            else:
                data['None']='None'
                return JsonResponse(data)    
        except:
            data['None']='None'
            return JsonResponse(data)
    else:
        return render(request, 'index.html' ,{})


def registerUser(request):
    if request.method == "POST":
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        username=request.POST['name']
        password=request.POST['pass']
        email=request.POST['email']
        contact=request.POST['contact']
        
        cursor = connections['default'].cursor()
        sql = "INSERT INTO Users(Username, Password, EmailID, ContactNo, CreationTime,LastModified) VALUES( %s , %s , %s, %s, %s, %s)"
        val = (username, password,email, contact, timestamp, timestamp)
        try:
            cursor.execute(sql , val)
        except:
            data={'None': 'none'}
            return JsonResponse(data)
        if(cursor.rowcount>0):
            data={'True':'true'}
            return JsonResponse(data)
        else:
            data={'None':'none'}
            return JsonResponse(data)
    else:
        return render(request, 'index.html' ,{})

def updateUser(request):
    if request.method == "POST":
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        username=request.POST['upname']
        password=request.POST['uppass']
        email=request.POST['upemail']
        contact=request.POST['upcontact']
        
        cursor = connections['default'].cursor()
        sql = "update Users SET Password = %s, EmailID = %s, ContactNo =%s, LastModified=%s where Username =%s"
        val = (password,email, contact, timestamp, username)
        try:
            cursor.execute(sql , val)
        except:
            data={'None': 'none'}
            return JsonResponse(data)
        if(cursor.rowcount>0):
            data={'True':'true'}
            return JsonResponse(data)
        else:
            data={'None':'none'}
            return JsonResponse(data)
    else:
        return render(request, 'index.html' ,{})

def deleteUser(request):
    if request.method == "POST":
        username=request.POST['uname']
        print(username)
        cursor = connections['default'].cursor()
        sql = "delete from Users where Username = %s"
        val = (username, )
        try:
            cursor.execute(sql , val)
        except:
            data={'None': 'none'}
            return JsonResponse(data)
        if(cursor.rowcount>0):
            data={'True':'true'}
            return JsonResponse(data)
        else:
            data={'None':'none'}
            return JsonResponse(data)
    else:
        return render(request, 'index.html' ,{})
