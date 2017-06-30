var apiKey = require('./../.env').apiKey;
var DisplayInfo = require('../js/doctor-interface.js').DisplayModule;

class Doctor{
  constructor(injury, location){
    this.injury = injury;
    this.location = location;
  }

  GetDoctors() {
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + this.injury + '&location=' + this.location + '&user_location=45.5231%2C%20122.6765&sort=full-name-desc&skip=0&limit=10&user_key=' + apiKey).then(function(response){
  		console.log(response.data.length);
  		for(var i = 0; i <= response.data.length; i++){
  			DisplayInfo(response, i);
  		}
  	}).fail(function(response){
  		console.log("ERROR");
  	});
  }
}
//
// Doctor = function(injury, location){
// 	this.injury = injury;
// 	this.location = location;
// };
//
// Doctor.prototype.GetDoctors = function(){
// 	$.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + this.injury + '&location=' + this.location + '&user_location=45.5231%2C%20122.6765&sort=full-name-desc&skip=0&limit=10&user_key=' + apiKey).then(function(response){
// 		console.log(response.data.length);
// 		for(var i = 0; i <= response.data.length; i++){
// 			DisplayInfo(response, i);
// 		}
// 	}).fail(function(response){
// 		console.log("ERROR");
// 	});
// };

exports.doctorModule = Doctor;
