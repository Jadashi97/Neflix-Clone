# Neflix-Clone

A Netflix clone built using React.js, Firebase, and TMDB API that mimics the functionality of Netflix.

# Demo

Live Demo

# Features

Authentication (Sign up, Sign in)
Browse movies and TV shows
View movie and TV show details
Search for movies and TV shows
Play movie trailers
Add movies and TV shows to "My List"
Responsive design

# Technologies

React.js
Firebase (Authentication, Firestore)
TMDB API

# Installation

To run this project locally, clone this repository and run the following commands:

sql
npm install
npm start

# Usage

Firebase Configuration
This project uses Firebase Authentication and Firestore. To use Firebase in your project, create a Firebase project and add a web app. Then, create a .env.local file in the root directory and add the following configurations:

REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
REACT_APP_FIREBASE_APP_ID=YOUR_APP_ID

# TMDB API Configuration

This project uses TMDB API to get movies and TV shows data. To use TMDB API in your project, create an account on TMDB and obtain an API key. Then, create a .env.local file in the root directory and add the following configuration:

REACT_APP_TMDB_API_KEY=YOUR_API_KEY

# Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

# License

MIT
