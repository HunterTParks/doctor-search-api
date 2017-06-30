(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "c16d59c9e230368d61a799cf48f51c00";

},{}],2:[function(require,module,exports){
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

},{"./../js/doctor.js":3}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
var DisplayInfo = require('../js/doctor-interface.js').DisplayModule;

var Doctor = function(injury, location){
	this.injury = injury;
	this.location = location;
};

Doctor.prototype.GetDoctors = function(){
	$.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + this.injury + '&location=' + this.location + '&user_location=45.5231%2C%20122.6765&sort=full-name-desc&skip=0&limit=10&user_key=' + apiKey).then(function(response){
		console.log(response.data.length);
		for(var i = 0; i <= response.data.length; i++){
			DisplayInfo(response, i);
		}
	}).fail(function(response){
		console.log("ERROR");
	});
};

exports.Doctor = Doctor;

},{"../js/doctor-interface.js":2,"./../.env":1}],4:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"./../js/doctor.js":3,"dup":2}]},{},[4]);
