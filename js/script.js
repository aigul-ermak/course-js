"use strict";

const numberOfFilms = +prompt("How many movies did have you seen yet?", "");
console.log(numberOfFilms);

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}


let a = prompt('What is the last movie?', ''),
	b = prompt('How much did you access it?', ''),
	c = prompt('What is the last movie?', ''),
	d = prompt('How much did you access it?', '');

	personalMovieDB.movies[a] = b;
	personalMovieDB.movies[c] = d;

	console.log(personalMovieDB);