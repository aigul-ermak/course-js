'use strict';

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
	console.log(item);
})
// console.log(hearts);

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

const btn = document.querySelector('button');
console.log(btn);
