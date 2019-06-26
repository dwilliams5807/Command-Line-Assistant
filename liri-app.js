// // loads the http library
// var http = require("http");

// // creates http server to handle resposnes
// http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hey hows it going");
//     response.end();

// }).listen(8888);


require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api'); //Using the Spotify api and getting the key from keys.js
var spotify = new Spotify(keys.spotify);

var moment = require('moment'); //Both required to use moment for node
moment().format();

var axios = require('axios'); //To get the information from the APIs for movie and concert-this

var fs = require('fs'); //To read the random.txt file for the do-what-it-says function

var command = process.argv[2]; //For the switch statement
var value = process.argv[3]; //To send the song/movie/concert to their respective functions

switch (command) {
    case "concert-this":
        concertThis(value);
        break;
    case "spotify-this":
        spotifySong(value);
        break;
    case "movie-this":
        movieThis(value);
        break;
    case "do-this":
        doThis(value);
        break;
};

function spotifySong(value) {
    if(!value){
        value = "The Sign";
    }
    spotify
    .search({ type: 'track', query: value })
    .then(function(response) {
        for (var i = 0; i < 5; i++) {
            var spotifyResults = 
                "--------------------------------------------------------------------" +
                    "\nArtist(s): " + response.tracks.items[i].artists[0].name + 
                    "\nSong Name: " + response.tracks.items[i].name +
                    "\nAlbum Name: " + response.tracks.items[i].album.name +
                    "\nPreview Link: " + response.tracks.items[i].preview_url;
                    
            console.log(spotifyResults);
        }})}