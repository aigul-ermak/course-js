'use strict';

//to String

//1
console.log(typeof(String(null)));

console.log(typeof(null +''));

console.log(typeof(null));

const num = 5;

// console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';
//to Number
//1
console.log(typeof(Number('4')));
//2
console.log(typeof(+('4')));
//3
console.log(typeof(parseInt('15px','4')));

let answer = +prompt('Hello', '');

//to boolean

0, '', null, undefined, NaN // false

let switcher = null;//false
if(switcher) {
	console.log('work');
} 

let switcher = 1;//true
if(switcher) {
	console.log('work');
}

console.log(typeof(Boolean('4')));//boolean

console.log(typeof(!!"454545"));// boolean