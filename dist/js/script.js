'use strict';

window.addEventListener('DOMContentLoaded', () => {
	//tabs
	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {

		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (e) => {
		const target = e.target;

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (item == target) {
					hideTabContent();
					showTabContent(i);
				}
			})
		}
	});

	//timer

	const deadline = '2022-01-04';

	function getTimeRemaimig(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date()),
			days = Math.floor(t / (1000 * 60 * 60 * 24)), //сек на 60= сколько милисекунд мин, на 60 - получаем сколько в одном часе, на 24 - получаем сколько милисек в сутках
			hours = Math.floor((t / 1000 * 60 * 60) % 24),
			minutes = Math.floor((t / 1000 / 60) % 60),
			seconds = Math.floor((t / 1000) % 60);


		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	} //посчитаем количесво милисекунд, получим разницу

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 2000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaimig(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}
	setClock('.timer', deadline);

	// modal window
	const modalTrigger = document.querySelectorAll('[data-modal]'),
		modal = document.querySelector('.modal');
	// modalCloseBtn = document.querySelector('[data-close]');

	function openModal() {
		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.style.overflow = 'hidden';
		clearInterval(modalTimerId);
	}

	modalTrigger.forEach(btn => {
		btn.addEventListener('click', openModal);
	});

	function closeModal() {
		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.style.overflow = '';
	}

	// modalCloseBtn.addEventListener('click', closeModal);

	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.getAttribute('data-close') == '') {
			closeModal();
		}
	})

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modal.classList.contains('show')) {
			closeModal();
		}
	});

	const modalTimerId = setTimeout(openModal, 50000);

	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight) {
			openModal();
			window.removeEventListener('scroll', showModalByScroll)
		}
	};

	window.addEventListener('scroll', showModalByScroll);

	//используем классы для карточек

	class MenuCard {
		constructor(src, altimg, title, descr, price, parentSelector) {
			this.src = src;
			this.altimg = altimg;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.parent = document.querySelector(parentSelector);
			this.transfer = 27;
			this.changeToUAH();
		}
		changeToUAH() {
			this.price = this.price * this.transfer;
		}

		render() {
			const element = document.createElement('div');
			element.innerHTML = `
				<div class="menu__item">
				<img src=${this.src} alt=${this.alt}>
				<h3 class="menu__item-subtitle">${this.title}</h3>
				<div class="menu__item-descr">${this.descr}</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
						<div class="menu__item-cost">Цена:</div>
						<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
				</div>
		</div>
		`;
			this.parent.append(element);
		}
	}

	const getResource = async (url) => {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status ${res.status}`);
		}
		return await res.json();
	}

	axios.get('http://localhost:3000/menu')
		.then(data => {
			data.data.forEach(({
				img,
				altimg,
				title,
				descr,
				price
			}) => {
				new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
			});
		});

	// getResource('http://localhost:3000/menu')
	// .then(data => {
	// 	data.forEach(({img, altimg, title, descr, price}) => {
	// 		new MenuCard(img, altimg, title, descr, price,'.menu .container').render();
	// 	});
	// });

	// getResource('http://localhost:3000/menu')
	// 	.then(data => createCard(data));

	// function createCard(data) {
	// 	data.forEach(({
	// 		img,
	// 		altimg,
	// 		title,
	// 		descr,
	// 		price
	// 	}) => {
	// 		const element = document.createElement('div');
	// 		price = price * 27;
	// 		element.classList.add('menu__item');

	// 		element.innerHTML = `
	// 		<div class="menu__item">
	// 		<img src=${img} alt=${altimg}>
	// 		<h3 class="menu__item-subtitle">${title}</h3>
	// 		<div class="menu__item-descr">${descr}</div>
	// 		<div class="menu__item-divider"></div>
	// 		<div class="menu__item-price">
	// 				<div class="menu__item-cost">Цена:</div>
	// 				<div class="menu__item-total"><span>${price}</span> грн/день</div>
	// 		</div>
	//     </div>
	// 		`;
	// 		document.querySelector('.menu .container').append(element);

	// 	})
	// }

	//forms

	const forms = document.querySelectorAll('form');

	const message = {
		loading: 'img/form/spinner.svg',
		success: 'Thank you, we"ll be in touch soon',
		failure: 'Worse...'
	};

	forms.forEach(item => {
		bindPostData(item);
	});

	const postData = async (url, data) => {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: data
		});

		return await res.json();
	}

	function bindPostData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const statusMessage = document.createElement('img');
			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
				display: block;
				margin: 0 auto;
				`;

			form.insertAdjacentElement('afterend', statusMessage);

			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			postData(' http://localhost:3000/requests', json)
				.then(data => {
					console.log(data);
					showThanksModal(message.success);
					statusMessage.remove();
				}).catch(() => {
					showThanksModal(message.failure);
				}).finally(() => {
					form.reset();
				})
		});
	}

	//message

	function showThanksModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');

		prevModalDialog.classList.add('hide');
		openModal();

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
			<div class='modal__content'>
			<div class='modal__close'>×</div>
			<div class='modal__title'>${message}</div>
			</div>
			`;

		document.querySelector('.modal').append(thanksModal);

		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add('show');
			prevModalDialog.classList.remove('hide');
			closeModal();
		}, 4000);
	}

	fetch('http://localhost:3000/menu')
		.then(data => data.json())
		.then(res => console.log(res));

	//slider

	const sliders = document.querySelectorAll('.offer__slide'),
		prev = document.querySelector('.offer__slider-prev'),
		next = document.querySelector('.offer__slider-next'),
		total = document.querySelector('#total'),
		current = document.querySelector('#current'),
		slidesWrapper = document.querySelector('.offer__slider-wrapper'),
		slidesFields = document.querySelector('.offer__slider-inner'),
		width = window.getComputedStyle(slidesWrapper).width;

	let sliderIndex = 1;
	let offset = 0;
	//slider2

	if (sliders.length < 10) {
		total.textContent = `0${sliders.length}`;
		current.textContent = `0${sliderIndex}`;
	} else {
		total.textContent = sliders.length;
		current.textContent = sliderIndex;
	};

	slidesFields.style.width = 100 * sliders.length + '%';
	slidesFields.style.display = 'flex';
	slidesFields.style.transition = '0.5s all';

	slidesWrapper.style.overflow = 'hidden';


	sliders.forEach(slide => {
		slide.style.width = width;
	})

	next.addEventListener('click', () => {
		if (offset == (+width.slice(0, width.length - 2) * (sliders.length - 1))) {
			offset = 0;
		} else {
			offset += +width.slice(0, width.length - 2);
		}
		slidesFields.style.transform = `translateX(-${offset}px)`;

		if (sliderIndex == sliders.length) {
			sliderIndex = 1;
		} else {
			sliderIndex++;
		}

		if (sliders.length < 10) {
			current.textContent = `0${sliderIndex}`
		} else {
			current.textContent = sliderIndex;
		}
	});

	prev.addEventListener('click', () => {
		if (offset == 0) {
			offset == +width.slice(0, width.length - 2) * (sliders.length - 1);
		} else {
			offset -= +width.slice(0, width.length - 2);
		}
		slidesFields.style.transform = `translateX(-${offset}px)`;

		if (sliderIndex == 1) {
			sliderIndex = sliders.length;
		} else {
			sliderIndex--;
		}

		if (sliders.length < 10) {
			current.textContent = `0${sliderIndex}`
		} else {
			current.textContent = sliderIndex;
		}
	});
	
})