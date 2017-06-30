var DisplayInfo = function(response, i){
	$('.displayInfo').append('<p>' + response.data[i].profile.first_name + ' ' + response.data[i].profile.last_name + '</p>');
};

$(document).ready(function(){
	console.log(require('./../js/doctor.js').doctorModule);
	var Doctor = require('./../js/doctor.js').doctorModule;
	$("#doctorSearch").submit(function(){
		event.preventDefault();
		var injury = $("#injury").val();
		var location = $("#location").val();
		var newDoctor = new Doctor(injury, location);
		// var Doctor = require('./../js/doctor.js').doctorModule;
		newDoctor.GetDoctors();
	});
});

exports.DisplayModule = DisplayInfo;
