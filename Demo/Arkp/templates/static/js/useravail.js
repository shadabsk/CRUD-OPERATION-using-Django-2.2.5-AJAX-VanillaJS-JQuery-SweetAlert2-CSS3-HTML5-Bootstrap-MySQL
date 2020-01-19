$(function(){
    //for checking the user is availble or not
    $("#uname").on('keyup',function(e){
        var uname=$(this).val();
        if(!uname||uname===' ')
        {	
            $(this).val("");
            $('#usererr').html('<span class="alert alert-danger">Empty field  is not allow</span>');
        }
        else{
            var dataString='uname='+uname;
            $.ajax({
                type:'POST',
                url:'checkuser',
                data:{
                    uname:$('#uname').val(),
                    csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
                },
                cache:false,
                success:function(available){
                    if(available.None)
                    {
                        $('#usererr').html('<span class="alert alert-success">UserName is available</span>');
                    }
                    else
                    {
                        $('#usererr').html('<span class="alert alert-danger">UserName is not available</span>');
                    }
                },
                error: function(xhr,xer){
                    $('#usererr').html('<span class="alert alert-danger">Some Error is Occur '+xhr.status+'</span>')
                }
            });
        }
    });

    $("#uname1").on('keyup',function(e){
        var uname=$(this).val();
        if(!uname||uname===' ')
        {	
            $(this).val("");
            $('#usererr1').html('<span class="alert alert-danger">Empty field  is not allow</span>');
        }
        else{
            var dataString='uname='+uname;
            $.ajax({
                type:'POST',
                url:'checkuser',
                data:{
                    uname:$('#uname1').val(),
                    csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
                },
                cache:false,
                success:function(available){
                    if(available.None)
                    {
                        $('#usererr1').html('<span class="alert alert-success">UserName is available</span>');
                    }
                    else
                    {
                        $('#usererr1').html('<span class="alert alert-danger">UserName is not available</span>');
                    }
                },
                error: function(xhr,xer){
                    $('#usererr1').html('<span class="alert alert-danger">Some Error is Occur '+xhr.status+'</span>')
                }
            });
        }
    });
});