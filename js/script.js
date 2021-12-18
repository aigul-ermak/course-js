'use strict';

// let a = 5;
// b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
// 	a: 5,
// 	b: 1
// }

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
// 	let objCopy = {};
// 	let key;
// 	for (key in mainObj) {
// 		objCopy[key] = mainObj[key];
// 	}
// 	return objCopy;
// }

// const numbers = {
// 	a: 2,
// 	b: 3,
// 	c: {
// 		x: 7,
// 		y: 10
// 	}
// }

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 15;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
// 	d: 17,
// 	i: 20
// }

// console.log(Object.assign(numbers, add));

// const oldArrat = ['a', 'b', 'c'];
// const newArray = oldArrat.slice();
// newArray[1] [ 'jkhfk']
// console.log(oldArrat);
// console.log(newArray);

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newArr = [...array];

console.log(newArr);

