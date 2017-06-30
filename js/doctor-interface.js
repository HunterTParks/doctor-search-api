var Doctor = require('./../js/Doctor.js').DoctorModule;

$(document).ready(function(){
	$("#doctorSearch").submit(function(){
		event.preventDefault();
		var injury = $("#injury").val();
		var location = $("#location").val();
		var newDoctor = new Doctor(injury, location);
		newDoctor.GetDoctors();
	});

});
