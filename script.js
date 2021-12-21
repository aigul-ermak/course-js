'use strict';

const btns = document.querySelectorAll('button'),
	overlay = document.querySelector('.overlay');

	btns.forEach(item => {
		item.addEventListener('click', function() {
			console.log('click');
		}, {once: true})
	})


// const deleteElement = (e) => {
// 	console.log(e.target);
// }

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// const link = document.querySelector('a');

// link.addEventListener('click', function(event) {
// 	event.preventDefault();// не переходим по ссылке

// 	console.log(event.target);
// })

// let i = 0;
// const deleteElement = (e) => {
// 	console.log(e.target);
// 	i++;
// 	if (i == 1) {
// 		btn.removeEventListener('click', deleteElement);
// 	}
// }

// btn.addEventListener('click', deleteElement);





// const deleteElement = (e) => {
// 	e.target.remove();
// }

// btn.addEventListener('click', deleteElement);

// btn.removeEventListener('click', deleteElement);

// btn.addEventListener('click', function (e) {
// 		console.log(e.target);
// 		e.target.remove()
// 		// console.log('hover');
// 		});



// btn.addEventListener('mouseenter', function (e) {
// 	console.log(e.target);
// 	e.target.remove()
// 	// console.log('hover');
// 	});



// btn.addEventListener('mouseenter', function () {
// console.log('hover');
// });

// btn.addEventListener('click', function () {
// 	alert('clickkckkck');
// })

// btn.addEventListener('click', function () {
// 	alert('second clickkckkck');
// })

// btn.onclick = function () {
// 	alert('clickkk')
// }

// btn.onclick = function () {
// 	alert('second clickkk')
// }