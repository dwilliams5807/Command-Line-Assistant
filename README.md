# liri-node-app
Screenshots 

Screenshots are in the "photos" folder


Introduction

LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in commands and gives back data. Currently, it is able to search Spotify for songs, OMDB for movies & Bands in Town for concerts.

Setup

Clone the repository

Run npm install, and the following packages should be installed:

Node-Spotify-API

Axios : This module will be used to get the IMDB and BandsInTown API data

Moment

DotEnv

Create a .env file in the same directory as the rest of the files. In the .env file should be:

'# Spotify API keys'

'SPOTIFY_ID=your-spotify-ID-here'

'SPOTIFY_SECRET=your-spotify-secret-here'



TO USE:

Search Song = node liri-app.js spotify-this SONGNAME

Search Concert = node liri-app.js concert-this ARTIST

Search Movie = node liri-app.js movie-this MOVIENAME

Search Random Text File = node liri-app.js do-this