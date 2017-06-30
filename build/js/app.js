(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "c16d59c9e230368d61a799cf48f51c00";

},{}],2:[function(require,module,exports){
// var Doctor = require('./../js/Doctor.js').DoctorModule;
// var DisplayInfo = require('/js/scripts.js').DisplayModule;
var apiKey = require('./../.env').apiKey;

var Doctor = function(injury, location){
	this.injury = injury;
	this.location = location;
};

var DisplayInfo = function(response, i){
	$('.displayInfo').append('<p>' + response.data[i].profile.first_name + ' ' + response.data[i].profile.last_name + '</p>');
};

Doctor.prototype.GetDoctors = function(){
	$.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + this.injury + '&location=' + this.location + '&user_location=45.5231%2C%20122.6765&sort=full-name-desc&skip=0&limit=10&user_key=' + apiKey).then(function(response){
		for(var i = 1; i <= 10; i++){
			console.log(response);
			DisplayInfo(response, i);
		}
	}).fail(function(response){
		console.log("ERROR");
	});
};


$(document).ready(function(){
	$("#doctorSearch").submit(function(){
		event.preventDefault();
		var injury = $("#injury").val();
		var location = $("#location").val();
		var newDoctor = new Doctor(injury, location);
		newDoctor.GetDoctors();
	});
});

},{"./../.env":1}]},{},[2]);
