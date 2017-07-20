'use strict'

var keysInfo = require('./env.js');
var request = require('request');

function get(movieTitle) {
  var apiUrl = "https://www.googleapis.com/customsearch/v1?key=" + keysInfo.apiKey + "&cx=" + keysInfo.idKey +"&q=" + movieTitle;
  request(apiUrl, function (error, response, body) {
	//Inside that callback
	console.log(JSON.parse(body).items[0].snippet);
	});
}
// 
// get("nothing");
//exporting the "get" function
module.exports = get;



// ----------------------------
// //Bonus: take in state and city as arguments instead of hardcoding
// var state = "CO";
// var city = "Denver";

// //Require apiKey

// var apiKey = require('./env.js');

// //Require the request library
// //What is the `request` library you ask?
// //Google `npm request` and you can find out!

// var request = require('request');

// // Set the API URL we are hitting, with our API Key and zipcode

// var apiUrl = "http://api.wunderground.com/api/" + apiKey + "/conditions/q/" + state + "/" + city + ".json";
// console.log(apiUrl)
// //The actual request sending

// request(apiUrl, function (error, response, body) {
//   //Inside that callback

//   //Print out the weather result
//   console.log('The weather in ' + city +  ' is ', JSON.parse(body).current_observation.weather);
// });
