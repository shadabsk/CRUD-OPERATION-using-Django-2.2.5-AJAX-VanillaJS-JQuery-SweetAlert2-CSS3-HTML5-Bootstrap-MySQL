$(document).ready(function(){
	$("#submit").click(function(event){
        event.preventDefault(); 
		$.ajax({
			type: "POST",
			headers: { "X-CSRFToken": token },
			url: "registerPatient",
			data:{
                puname: $("input[name=puname]").val(),
                pfname: $("input[name=pfname]").val(),
                pmname: $("input[name=pmname]").val(),
                plname: $("input[name=plname]").val(),
                pemail: $("input[name=pemail]").val(),
                pcontact: $("input[name=pcontact]").val(),
                dob: $("input[name=dob]").val(),
                gender: $("input[name=gender]").val(),
                mntname: $("input[name=mntname]").val(),
            },
			cache: false,
			dataType: 'json',
			success: function(data){
				if(data.None)
				{					
					$('#regmsg').html('<div class="alert alert-danger">Register was not successful</div>').fadeIn().delay(1000).fadeOut();
				}
				else
				{
					swal("Congrats!", ", Patient enrolled successfully!", "success");
					//$('#regmsg').html('<div class="alert alert-info"><a href="">Successfully Registered!!!Click here to be redirected to login page</a></div>');
					
				}
			}
			});
		return false;
	});
});