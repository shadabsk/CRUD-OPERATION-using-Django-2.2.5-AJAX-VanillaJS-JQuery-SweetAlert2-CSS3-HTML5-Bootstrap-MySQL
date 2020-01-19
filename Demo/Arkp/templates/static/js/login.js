$(document).ready(function(){
	$("#loginform").submit(function(event){
		event.preventDefault(); 
		$.ajax({
			type: "POST",
			headers: { "X-CSRFToken": token },
			url: "login",
			data:new FormData(this),
			cache: false,
			contentType: false,
			processData:false,
			dataType: 'json',
			success: function(data){
				if(data.None)
				{					
					$('#regmsg').html('<div class="alert alert-danger">Register was not successful</div>').fadeIn().delay(1000).fadeOut();
				}
				else
				{	
					let timerInterval
					Swal.fire({
					title: 'Logging you in!',
					timer: 2000,
					timerProgressBar: true,
					onBeforeOpen: () => {
						Swal.showLoading()
						timerInterval = setInterval(() => {
						Swal.getContent().querySelector('b')
							.textContent = Swal.getTimerLeft()
						}, 100)
					},
					onClose: () => {
						clearInterval(timerInterval)
					}
					}).then((result) => {
					if (
						/* Read more about handling dismissals below */
						result.dismiss === Swal.DismissReason.timer
					) {
						
						$('#regist').hide();
						$('#login').hide();

						$('input[name="upname"]').val(data.Username)
						$('input[name="uppass"]').val(data.Password)
						$('input[name="upcontact"]').val(data.Contact)
						$('input[name="upemail"]').val(data.EmailID)
						$('#logincrud').fadeIn(2000);

					}
					})

				}
			}
			});
		return false;
	});
});