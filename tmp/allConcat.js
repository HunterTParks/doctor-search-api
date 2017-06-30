var doctorModule = require('./../js/doctor.js').doctorModule;

var DisplayInfo = function(response, i){
	$('.displayInfo').append('<p>' + response.data[i].profile.first_name + ' ' + response.data[i].profile.last_name + '</p>');
};

$(document).ready(function(){
	$("#doctorSearch").submit(function(){
		event.preventDefault();
		var injury = $("#injury").val();
		var location = $("#location").val();
		var newDoctor = new doctorModule(injury, location);
		newDoctor.GetDoctors();
	});
});

exports.DisplayModule = DisplayInfo;
