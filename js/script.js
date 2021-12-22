'use strict';

const p = document.querySelectorAll('.box');
console.log(p);

const script = document.createElement('script');
script.src = 'js/script.js';
script.async = false;
document.body.append(script);

function loadScript(src) {
	const script = document.createElement('script');
	script.src = src;
	script.async = false;//будет работать по очереди
	document.body.append(script);
}

loadScript('js/script.js');