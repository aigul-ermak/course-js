// 'use strict';

//touchstart
//touchmove
//touchenter
//touchleave
//touchcancel

window.addEventListener('DOMContentLoaded', () => {

	const box = document.querySelector('.box');

	box.addEventListener('touchstart', (e) => {
		e.preventDefault();
		console.log('start');
		console.log(e.touches);
	})

	// box.addEventListener('touchmove', (e) => {
	// 	e.preventDefault();
	// 	console.log('move');
	// })

})

//touches сколько пальцев
//targetTouches
//changedTouches
