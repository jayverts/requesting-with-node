'use strict'

var movie = require("./movie");
var threeFavoriteMovies = ["Anchorman", "Old School", "Goodfellas" ];
threeFavoriteMovies.forEach(function(film){
  movie(film);
  // your code here
});