(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "c16d59c9e230368d61a799cf48f51c00";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
var DisplayInfo = require('./../js/doctor-interface.js').DisplayInfo;

var Doctor = function(injury, location){
	this.injury = injury;
	this.location = location;
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

exports.doctorModule = Doctor;

},{"./../.env":1,"./../js/doctor-interface.js":3}],3:[function(require,module,exports){
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

},{"./../js/Doctor.js":2}],4:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"./../js/Doctor.js":2,"dup":3}]},{},[4]);
