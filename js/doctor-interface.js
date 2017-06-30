var DisplayInfo = function(response, i){
	var array = ["Hunter Parks"];
	var yesOrNo = false;
	if(response.data[i] === undefined)
	{
		console.log("Hello universe!");
	}
	else {
		for(var j = 0; j <= array.length; j++)
		{
			if(response.data[i] === array[j])
			{
				yesOrNo === true;
			}
		}
		if(yesOrNo === false)
		{
			var name = response.data[i].profile.first_name + ' ' + response.data[i].profile.last_name;
			$('.displayInfo').append('<div class = "well"><div class="col-sm-3"><p>' + response.data[i].profile.first_name + ' ' + response.data[i].profile.last_name + '</p></div><div class="col-sm-3"><p></p></div><div class="col-sm-3"><p>' + response.data[i].profile.gender + '</p></div><div class="col-sm-3"><p></p></div></div>');
			array.push(name);
		}
	}
};

$(document).ready(function(){
	console.log(require('./../js/doctor.js').doctorModule);
	var Doctor = require('./../js/doctor.js').doctorModule;
	$("#doctorSearch").submit(function(){
		event.preventDefault();
		var injury = $("#injury").val();
		var location = $("#location").val();
		var newDoctor = new Doctor(injury, location);
		$(".displayInfo").empty();
		newDoctor.GetDoctors();
	});
});

exports.DisplayModule = DisplayInfo;
