var apiKey = require('./../.env').apiKey;
var DisplayInfo = require('../doctor-interface.js').DisplayInfo;

Doctor = function(){

};

Doctor.prototype.GetDoctors = function(injury, userlocation){
	$.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + injury + '&location=37.779&2C-122.413%2C100&user_location=' + userlocation + '&skip=0&limit=10&user_key=' + apiKey).then(function(response){
		for(var i = 0; i <= response.data.practices.length; i++){
			DisplayInfo(response);
		}
	}).fail(function(response){
		console.log("ERROR");
	});
};
