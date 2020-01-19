$(document).ready(function(){
	$("#enq").click(function(event){
        event.preventDefault(); 
		$.ajax({
			type: "POST",
			headers: { "X-CSRFToken": token },
			url: "enquiry",
			data:{
                name: $("input[name=name]").val(),
                email: $("input[name=emails]").val(),
                subject: $("input[name=subject]").val(),
                number: $("input[name=contact]").val(),
                message: $('textarea#message').val(),
            },
			cache: false,
            dataType: 'json',
            beforeSend: function() {
                    $('#regmsgenq').html(
                        '<img src='+pic2+' style="width:30px;height:30px;" />'
                    );
            },	
			success: function(data){
				if(data.None)
				{			
                    setTimeout(function() {		
                        $('#regmsgenq').html('<div class="alert alert-danger">Register was not successful</div>').fadeIn().delay(1000).fadeOut();
                    }, 2000);
				}
				else
				{
                    setTimeout(function() {		
                        swal("Success!", ", We will reach to you very shortly!", "success");
                        $('#regmsgenq').html('');
                        $('#enqForm')[0].reset();
                    }, 2000);
					
				}
			}
			});
		return false;
	});
});