'use strict';

const btns = document.querySelectorAll('button'),
	wrapper = document.querySelector('.btn-block');


// console.log(btns[0].classList.length);// мы узнали сколько классов у кнопки

// console.log(btns[0].classList.item(1));// получим конкретно имя класса

// console.log(btns[1].classList.add('red'));//add class

// console.log(btns[0].classList.remove('blue'));//remove class

// console.log(btns[0].classList.toggle('blue'));//есди был то удалится если не было добавится

// if (btns[1].classList.contains('red')) {
// 	console.log('red');
// }

btns[0].addEventListener('click', () => {
	// if (!btns[1].classList.contains('red')) {
	// 	btns[1].classList.add('red');
	// } else {
	// 	btns[1].classList.remove('red');
	// }//кликаем на кнопку 1 и если у второй кнопки нет класса ред то добавим а иначе удалим

	btns[1].classList.toggle('red'); // тоже работает но лучше первый
})

// console.log(btns[0].className);// получили список классов 

wrapper.addEventListener('click', (e) => {
	if (e.target && e.target.matches("button.red")) {
		console.log('Hello');
	}//делегирование если элемент подходит под условие на нем будет срабатывать то что передали в качестве функции
})

// btns.forEach(btn => {
// 	btn.addEventListener('click', () => {
// 		console.log('redding');
// 	})
// })

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);