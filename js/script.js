'use strict';

// function showThis(a, b) {
// 	console.log(this); //будет ссылаться на глобальный объект window
// 	function sum() {
// 		console.log(this);
// 		return a + b
// 	}
// 	console.log(sum());
// };

// showThis(4, 5);

// const obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function () {
// 		console.log(this);
// 	}
// };
// obj.sum();

// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// }
// let ivan = new User('Ivan', 32)

// function sayName (surname) {
// 	console.log(this);
// 	console.log(this.name);
// }

// const user = {
// 	name: 'John'
// }

// sayName.call(user);
// sayName.apply(user);

// function sayName (surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
// }

// const user = {
// 	name: 'John'
// }

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);// здесь мы просто установили контекст

// function count(num) {
// 	return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));



//1 обычная функция : this = window, if use strict = undefined
//2 если внутри объекта будем использовать метод то контекст вызова будет ссылаться на этот объект
//контекст у методов объекта будет сам объект
//3 this в конструкторах и классах это новый экземпляр объекта
//4 ручная привязка this - call apply bind

const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
// 	console.log(this);//контекстом вызова будет сам элемент на котором произошло событие - если записано как класс функ
// })

btn.addEventListener('click', function() {
	this.style.backgroundColor = 'red';
})

// btn.addEventListener('click', () => {
// 	this.style.backgroundColor = 'red';//контекстом вызова будет сам элемент на котором произошло событие - если записано как класс функ
// })

// const obj = {
// 	num: 5,
// 	sayNumber : function() {
// 		const say = () => {
// 			console.log(this);
// 		};
// 		say();
// 	}
// }
// obj.sayNumber();

// const double = a => a * 2;
// console.log(double(4));
