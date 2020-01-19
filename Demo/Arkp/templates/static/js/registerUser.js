$(document).ready(function(){
	$("#regform").submit(function(event){
		event.preventDefault(); 
		$.ajax({
			type: "POST",
			headers: { "X-CSRFToken": token },
			url: "registerUser",
			data:new FormData(this),
			cache: false,
			contentType: false,
			processData:false,
			dataType: 'json',
			beforeSend: function() {
				$('#load').html(
					'<img src='+pic2+' style="width:30px;height:30px;" />'
				);
			},	
			success: function(data){
				if(data.None)
				{					
					$('#regmsg').html('<div class="alert alert-danger">Register was not successful</div>').fadeIn().delay(1000).fadeOut();
				}
				else
				{
					setTimeout(function(){
						Swal.fire({
							position: 'middle',
							icon: 'success',
							title: 'Django is fun! Registration successful',
							showConfirmButton: false,
							timer: 2500
						})
						$('#regform')[0].reset();
						
						$('#load').html("");
					}, 2000);
				}
			}
			});
		return false;
	});
});
