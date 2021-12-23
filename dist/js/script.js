// 'use strict';

window.addEventListener('DOMContentLoaded', () => {

	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		}); //функция для скрытия таба
	};

	tabs.forEach(item => {
		item.classList.remove('tabheader__item_active')
	}); //удаляем класс активности у каждого таба

	function showTabContent(i = 0) { // дословно если функция вызывется без аргумента то по умолчанию выставится то что передано в аргументе через равно
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}; //показываем нужный нам таб и присваиваем активный класс

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
	})

})