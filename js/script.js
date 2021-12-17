'use strict';

const options = {
	name: 'nana',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function () {
		console.log('test');
	}
}

const {border, bg} = options.colors;
console.log(border);//destrucure

// options.makeTest();

// console.log(Object.keys(options).length);// получение элементов в массиве

// let counter = 0;

// for (let key in options) {
// 	if (typeof (options[key]) === 'object') {

// 			for (let i in options[key]) {
// 				console.log(`property ${i} have ${options[key][i]}`);
// 				counter++;
// 			}
// 		} else {
// 			console.log(`property ${key} have ${options[key]}`)
// 			counter++;
// 		}

// 	}
// 	console.log(counter);
