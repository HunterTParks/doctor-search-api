

$(document).ready(function(){
	var newDoctor = new Doctor();
	$("#doctorSearch").submit(function(){
		event.preventDefault();
		var injury = $("#injury").val();
		var location = $("#location").val();
		newDoctor.GetDoctors(injury, location);
	});

});
