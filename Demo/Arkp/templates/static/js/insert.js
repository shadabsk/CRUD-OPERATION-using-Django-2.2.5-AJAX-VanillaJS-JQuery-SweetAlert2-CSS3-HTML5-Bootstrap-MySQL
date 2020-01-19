$(document).ready(function(){
	$("#contact").submit(function(event){
        event.preventDefault(); 
		$.ajax({
            type: "POST",
            headers: { "X-CSRFToken": token },
			url: "contact",
            data:$("form").serialize(),
			cache: false,
            dataType: 'json',
            beforeSend: function() {
                $('.message_box').html(
                    '<img src='+pic2+' style="width:30px;height:30px;" />'
                );
            },		
			success: function(data)
			 {
                 if(data.None){
                    setTimeout(function() {
                        $('.message_box').html('Failed');
                    }, 2000);

                    setTimeout(function() { 
                        $('.message_box').fadeOut(); 
                    }, 5000);
                 }
                 else{
			    	 setTimeout(function() {
                        $('.message_box').html('Success');
                    }, 2000);

                    setTimeout(function() { 
                        $('.message_box').fadeOut(); 
                    }, 5000); 	
                }
            }
			});
		return false;
	});
});