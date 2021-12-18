'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt('How much movie did you see?', '');

		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			numberOfFilms = +prompt('How much movie did you see??', '');
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Tha last movie did you see?', ''),
				b = prompt('Can you access it?', '');

			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log('done');
			} else {
				console.log('error');
				i--;
			}
		}
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log("Not to much");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("You are classic");
		} else if (personalMovieDB.count >= 30) {
			console.log("You are kinoman");
		} else {
			console.log("Error");
		}
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDb: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat === false
		} else {
			personalMovieDB.privat === true
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i < 3; i ++) {

		let genres = propmt('write your favourite genre').toLowerCase();
				if (genres === '' || genres == null) {
				console.log('no data');
				i--;
			} else {
				personalMovieDB.genres = genres.split(',');
			}

		}

		personalMovieDB.genres.forEach((item, i) => {
			console.log(`favorite genere ${i + 1}  - this is ${item}`);
		})
	}
}


// 	 let genre = prompt(`Your favorite genre ${i}`);
		// 	if (genre === '' || genre == null) {
		// 		console.log('no data');
		// 		i--;
		// 	} else {
		// 		personalMovieDB.genres[i - 1] = genre;
		// 	}
		// }