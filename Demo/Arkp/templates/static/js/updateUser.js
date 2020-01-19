$(document).ready(function(){
	$("#regformedit").submit(function(event){
		event.preventDefault(); 
		$.ajax({
			type: "POST",
			headers: { "X-CSRFToken": token },
			url: "updateUser",
			data:new FormData(this),
			cache: false,
			contentType: false,
			processData:false,
			dataType: 'json',
			beforeSend: function() {
				$('#loadupdate').html(
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
						const Toast = Swal.mixin({
							toast: true,
							position: 'top-end',
							showConfirmButton: false,
							timer: 3000,
							timerProgressBar: true,
							onOpen: (toast) => {
							  toast.addEventListener('mouseenter', Swal.stopTimer)
							  toast.addEventListener('mouseleave', Swal.resumeTimer)
							}
						  })
						  
						  Toast.fire({
							icon: 'success',
							title: 'updated successfully'
						  })
						
						
						$('#loadupdate').html("");
					}, 2000);
				}
			}
			});
		return false;
	});
});
