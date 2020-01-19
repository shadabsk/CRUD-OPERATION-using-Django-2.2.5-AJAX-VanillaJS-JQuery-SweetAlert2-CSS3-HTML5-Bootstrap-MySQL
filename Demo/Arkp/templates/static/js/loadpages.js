$(document).ready(function(){
	$("#profile").on("click",function(){
		$("#subcontents").hide();
		$("#subcontent1").show();
		$("#subcontent2").hide();
		$("#subcontent3").hide();
		
	});
});

$(document).ready(function(){
	$("#testpage2").on("click",function(){
		$("#subcontent1").hide();
		$("#subcontent2").toggle();
		$("#subcontent3").hide();
	});
});

$(document).ready(function(){
	$("#testpage3").on("click",function(){
		$("#subcontent1").hide();
		$("#subcontent2").hide();
		$("#subcontent3").toggle();

	});
});

$(document).ready(function(){
	$("#profileEdit").on("click",function(){
		$("#loadcontent3").hide();
		$("#loadcontent2").hide();
		$("#loadcontent1").show();
		$("#loadcarousel").hide();
		

	});
});

$(document).ready(function(){
	$("#new").on("click",function(){
		$("#loadcontent3").hide();
		$("#loadcontent2").hide();
		$("#loadcontent2").show();
		$("#loadcarousel").show();
		
	});
});

$(document).ready(function(){
	$("#patient").on("click",function(){
		$("#loadcontent1").hide();
		$("#loadcontent2").hide();

		$("#loadcarousel").show();
		$("#loadcontent3").show();

	});
});
			