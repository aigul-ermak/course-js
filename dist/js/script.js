'use strict';

window.addEventListener('DOMContentLoaded', () => {
	// 	//tabs
	// 	const tabs = document.querySelectorAll('.tabheader__item'),
	// 		tabsContent = document.querySelectorAll('.tabcontent'),
	// 		tabsParent = document.querySelector('.tabheader__items');

	// 	function hideTabContent() {

	// 		tabsContent.forEach(item => {
	// 			item.classList.add('hide');
	// 			item.classList.remove('show', 'fade');
	// 		});

	// 		tabs.forEach(item => {
	// 			item.classList.remove('tabheader__item_active');
	// 		});

	// 	}





	// 	function showTabContent(i = 0) {
	// 		tabsContent[i].classList.add('show', 'fade');
	// 		tabsContent[i].classList.remove('hide');
	// 		tabs[i].classList.add('tabheader__item_active');
	// 	}

	// 	hideTabContent();
	// 	showTabContent();

	// 	tabsParent.addEventListener('click', (e) => {
	// 		const target = e.target;

	// 		if (target && target.classList.contains('tabheader__item')) {
	// 			tabs.forEach((item, i) => {
	// 				if (item == target) {
	// 					hideTabContent();
	// 					showTabContent(i);
	// 				}
	// 			})
	// 		}
	// 	});

	// 	//timer

	// 	const deadline = '2022-01-04';

	// 	function getTimeRemaimig(endtime) {
	// 		const t = Date.parse(endtime) - Date.parse(new Date()),
	// 			days = Math.floor(t / (1000 * 60 * 60 * 24)), //сек на 60= сколько милисекунд мин, на 60 - получаем сколько в одном часе, на 24 - получаем сколько милисек в сутках
	// 			hours = Math.floor((t / 1000 * 60 * 60) % 24),
	// 			minutes = Math.floor((t / 1000 / 60) % 60),
	// 			seconds = Math.floor((t / 1000) % 60);


	// 		return {
	// 			'total': t,
	// 			'days': days,
	// 			'hours': hours,
	// 			'minutes': minutes,
	// 			'seconds': seconds
	// 		};
	// 	} //посчитаем количесво милисекунд, получим разницу

	// 	function getZero(num) {
	// 		if (num >= 0 && num < 10) {
	// 			return `0${num}`;
	// 		} else {
	// 			return num;
	// 		}
	// 	}

	// 	function setClock(selector, endtime) {
	// 		const timer = document.querySelector(selector),
	// 			days = timer.querySelector('#days'),
	// 			hours = timer.querySelector('#hours'),
	// 			minutes = timer.querySelector('#minutes'),
	// 			seconds = timer.querySelector('#seconds');
	// 		timeInterval = setInterval(updateClock, 1000);

	// 		updateClock();

	// 		function updateClock() {
	// 			const t = getTimeRemaimig(endtime);

	// 			days.innerHTML = getZero(t.days);
	// 			hours.innerHTML = getZero(t.hours);
	// 			minutes.innerHTML = getZero(t.minutes);
	// 			seconds.innerHTML = getZero(t.seconds);

	// 			if (t.total <= 0) {
	// 				clearInterval(timeInterval)
	// 			}
	// 		}
	// 	}
	// 	setClock('.timer', deadline);

	// 	// modal window
	// 	const modalTrigger = document.querySelectorAll('[data-modal]'),
	// 		modal = document.querySelector('.modal');
	// 	// modalCloseBtn = document.querySelector('[data-close]');

	// 	function openModal() {
	// 		modal.classList.add('show');
	// 		modal.classList.remove('hide');
	// 		document.body.style.overflow = 'hidden';
	// 		clearInterval(modalTimerId);
	// 	}

	// 	modalTrigger.forEach(btn => {
	// 		btn.addEventListener('click', openModal);
	// 	});

	// 	function closeModal() {
	// 		modal.classList.add('hide');
	// 		modal.classList.remove('show');
	// 		document.body.style.overflow = '';
	// 	}

	// 	// modalCloseBtn.addEventListener('click', closeModal);

	// 	modal.addEventListener('click', (e) => {
	// 		if (e.target === modal || e.target.getAttribute('data-close') == '') {
	// 			closeModal();
	// 		}
	// 	})

	// 	document.addEventListener('keydown', (e) => {
	// 		if (e.code === 'Escape' && modal.classList.contains('show')) {
	// 			closeModal();
	// 		}
	// 	});

	// 	const modalTimerId = setTimeout(openModal, 50000);

	// 	function showModalByScroll() {
	// 		if (window.pageYOffset + document.documentElement.clientHeight >=
	// 			document.documentElement.scrollHeight) {
	// 			openModal();
	// 			window.removeEventListener('scroll', showModalByScroll)
	// 		}
	// 	};

	// 	window.addEventListener('scroll', showModalByScroll);

	// 	//используем классы для карточек

	// 	class MenuCard {
	// 		constructor(src, alt, title, descr, price, parentSelector) {
	// 			this.src = src;
	// 			this.alt = alt;
	// 			this.title = title;
	// 			this.descr = descr;
	// 			this.price = price;
	// 			this.parent = document.querySelector(parentSelector);
	// 			this.transfer = 27;
	// 			this.changeToUAH();
	// 		}
	// 		changeToUAH() {
	// 			this.price = this.price * this.transfer;
	// 		}

	// 		render() {
	// 			const element = document.createElement('div');
	// 			element.innerHTML = `
	// 			<div class="menu__item">
	// 			<img src=${this.src} alt=${this.alt}>
	// 			<h3 class="menu__item-subtitle">${this.title}</h3>
	// 			<div class="menu__item-descr">${this.descr}</div>
	// 			<div class="menu__item-divider"></div>
	// 			<div class="menu__item-price">
	// 					<div class="menu__item-cost">Цена:</div>
	// 					<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
	// 			</div>
	// 	</div>
	// 	`;
	// 			this.parent.append(element);
	// 		}
	// 	}

	// 	new MenuCard(
	// 		"img/tabs/vegy.jpg",
	// 		"vegy",
	// 		"Меню 'Фитнес'",
	// 		"Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
	// 		9,
	// 		'.menu .container'
	// 	).render();

	// 	new MenuCard(
	// 		"img/tabs/elite.jpg",
	// 		"elite",
	// 		'Меню "Премиум"',
	// 		'В меню "Премиум" мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
	// 		15,
	// 		'.menu .container'
	// 	).render();

	// 	new MenuCard(
	// 		"img/tabs/post.jpg",
	// 		"post",
	// 		'Меню "Постное"',
	// 		'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
	// 		100,
	// 		'.menu .container'
	// 	).render();

	// 	//forms

	// 	const forms = document.querySelectorAll('form');

	// 	const message = {
	// 		loading: 'img/form/spinner.svg',
	// 		success: 'Thank you, we"ll be in touch soon',
	// 		failure: 'Worse...'
	// 	};

	// 	forms.forEach(item => {
	// 		postData(item);
	// 	});

	// 	function postData(form) {
	// 		form.addEventListener('submit', (e) => {
	// 			e.preventDefault();
	// 			const statusMessage = document.createElement('img');
	// 			statusMessage.src = message.loading;
	// 			statusMessage.style.cssText = `
	// 			display: block;
	// 			margin: 0 auto;
	// 			`;
	// 			// statusMessage.textContent = message.loading;

	// 			// form.append(statusMessage);
	// 			form.insertAdjacentElement('afterend', statusMessage);

	// 			// const request = new XMLHttpRequest();
	// 			// request.open('POST', 'server.php');

	// 			// request.setRequestHeader('Content-type', 'application/json'); //
	// 			const formData = new FormData(form);

	// 			const object = {};
	// 			formData.forEach(function (value, key) {
	// 				object[key] = value;
	// 			});

	// 			// request.send(json);

	// 			fetch('server.php', {
	// 					method: 'POST',
	// 					headers: {
	// 						'Content-type': 'application/json'
	// 					},
	// 					body: JSON.stringify(object)
	// 				})
	// 				.then(data => data.text())
	// 				.then(data => {
	// 					console.log(data);
	// 					showThanksModal(message.success);
	// 					statusMessage.remove();
	// 				}).catch(() => {
	// 					showThanksModal(message.failure);
	// 				}).finally(() => {
	// 					form.reset();
	// 				})
	// 		});
	// 	}


	// 	//message

	// 	function showThanksModal(message) {
	// 		const prevModalDialog = document.querySelector('.modal__dialog');

	// 		prevModalDialog.classList.add('hide');
	// 		openModal();

	// 		const thanksModal = document.createElement('div');
	// 		thanksModal.classList.add('modal__dialog');
	// 		thanksModal.innerHTML = `
	// 		<div class='modal__content'>
	// 		<div class='modal__close'>×</div>
	// 		<div class='modal__title'>${message}</div>
	// 		</div>
	// 		`;

	// 		document.querySelector('.modal').append(thanksModal);

	// 		setTimeout(() => {
	// 			thanksModal.remove();
	// 			prevModalDialog.classList.add('show');
	// 			prevModalDialog.classList.remove('hide');
	// 			closeModal();
	// 		}, 4000);
	// 	}

	//filter

	// const names = ['Ivan', 'Olga', 'Ksenia', 'Vladimir', 'Saveliy'];
	// const shortNames = names.filter(name => {
	// return name.length< 5;
	// });
	// console.log(shortNames);

	//map

	// const answers = ['IvAn', 'Olga', 'KseNia', 'VladImir', 'SaVeliy'];
	// const lowerCaseName = answers.map(n => n.toLowerCase());
	// console.log(lowerCaseName);

	//every/some

	// const arr = [4, 5, 100];
	// console.log(arr.some(item => typeof(item) === 'number'));
	// console.log(arr.some(item => typeof(item) === 'string'));
	// console.log(arr.every(item => typeof(item) === 'number'));

//reduce// схлопывать или собирать массив в одно единое целое

// const arr = [5, 5, 100, 7, 13];
// //сумма всех элементов = 0, current каждый следующий элемент который приходит 
// const result = arr.reduce((sum, current) => sum + current, 3)//третий элемент это наальное значение
// console.log(result)

// const arr = ['fruit', 'apple', 'potato'];
// //сумма всех элементов = 0, current каждый следующий элемент который приходит 
// // const result = arr.reduce((sum, current) => sum + ',' + current)
// const result = arr.reduce((sum, current) => `${sum}, ${current}`)
// console.log(result)


const obj = {
	ivan: 'person',
	ann: 'person',
	dog: 'animal',
	cat: 'animal'
}
const personName = Object.entries(obj)
.filter(i => i[1] === 'person')
.map(n => n[0]);

console.log(personName);

})