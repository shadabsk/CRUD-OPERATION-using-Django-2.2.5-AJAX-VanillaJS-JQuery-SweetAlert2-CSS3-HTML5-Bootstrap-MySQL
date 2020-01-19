$(document).ready(function(){
	$("#submit2").click(function(event){
        event.preventDefault(); 
		$.ajax({
			type: "POST",
			headers: { "X-CSRFToken": token },
			url: "medallocate",
			data:{
                medname: $("input[name=medname]").val(),
                adhfre: $("input[name=adhfre]").val(),
                adhcount: $("input[name=adhcount]").val(),
                
                medtype: $("#exampleFormControlSelect1 option:selected").text(),
                medpower: $("input[name=medpower]").val(),
                exp: $("input[name=exp]").val(),
                course_start: $("input[name=course_start]").val(),
                course_end: $("input[name=course_end]").val(),

                mornst: $("#exampleFormControlSelect2 option:selected").text(),
                mor_start_time: $("input[name=mor_start_time]").val(),
                mor_end_time: $("input[name=mor_end_time]").val(),

                noonst: $("#exampleFormControlSelect3 option:selected").text(),
                noon_start_time: $("input[name=noon_start_time]").val(),
                noon_end_time: $("input[name=noon_end_time]").val(),

                evest: $("#exampleFormControlSelect4 option:selected").text(),
                eve_start_time: $("input[name=eve_start_time]").val(),
                eve_end_time: $("input[name=eve_end_time]").val(),
                mntname: $("input[name=mntname]").val(),
            },
			cache: false,
			dataType: 'json',
			success: function(data){
				if(data.None)
				{					
					$('#regmsg').html('<div class="alert alert-danger">Something went wrong</div>').fadeIn().delay(1000).fadeOut();
				}
				else
				{
                    swal("Congrats!", ", medication event recorded!", "success");
					//$('#regmsg').html('<div class="alert alert-info"><a href="">Successfully Registered!!!Click here to be redirected to login page</a></div>');
					
				}
			}
			});
		return false;
	});
});