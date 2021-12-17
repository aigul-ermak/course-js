'use strict';

let numberOfFilms;

function start() {
	let numberOfFilms = +prompt('How many movies did you see?', '');

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('How many movies did you see?', '');
	}
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true
};



function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('What movie did you see tha last?', ''),
			b = prompt('Give access?', '');

		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}

// rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("How many movies?");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("You are classic");
	} else if (personalMovieDB.count >= 30) {
		console.log("You are kinoman");
	} else {
		console.log("Error");
	}
}

// detectPersonalLevel ();

function showMyDb(hidden) {
	// let hidden = personalMovieDB.privat
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDb(personalMovieDB.privat);

function writeYourGenres () {
	for(let i = 1; i <= 3; i ++) {
		// const genre = prompt(`Your favorite ${i}`)
		// personalMovieDB.genres[i - 1] = genre;

		personalMovieDB.genres[i - 1] = prompt(`Your favorite ${i}`)
	}
}
		writeYourGenres();

console.log(personalMovieDB);