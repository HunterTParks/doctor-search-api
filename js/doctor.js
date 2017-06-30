// var apiKey = require('./../.env').apiKey;
//
// var Doctor = function(injury, location){
// 	this.injury = injury;
// 	this.location = location;
// };
//
// Doctor.prototype.GetDoctors = function(){
// 	$.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + this.injury + '&location=37.773%2C-122.413%2C100&user_location=' + this.location + '&gender=male&skip=0&limit=10&sory=full-name-desc&user_key=' + apiKey).then(function(response){
// 		for(var i = 0; i <= 10; i++){
// 			console.log("PASS!!!!!");
// 		}
// 	}).fail(function(response){
// 		console.log("ERROR");
// 	});
// };
//
// exports.doctorModule = Doctor;
