$(function(){
    //for checking the user is availble or not
    var data = new FormData();    
    
    $.ajax({
        type:'POST',
        url:'qrCheck',
        processData : false,
        contentType : false,
        data:data,
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
});

