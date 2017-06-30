var apiKey = require('./../.env').apiKey;
var DisplayInfo = require('../doctor-interface.js').DisplayInfo;

Doctor = function(){
	
}

Doctor.prototype.GetDoctors(injury, user_location){
	$.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + injury + '&location=37.779&2C-122.413%2C100&user_location=' + user_location + '&skip=0&limit=10&user_key=' + apiKey).then(function(response){
		for(var i = 0; var i <= response.data.practices.length; i++){
			DisplayInfo(response);
		}
	}
}
