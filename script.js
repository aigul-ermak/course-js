const btn = document.querySelector('.btn')
let timerId,
	i = 0;

function myAnimation() {
	const elem = document.querySelector('.box');
	let pos = 0;

	const id = setInterval(frame, 10);

	function frame() {
		if (pos == 300) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}

btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
// 	timerId = setInterval(logger, 500);
// 	// const timerId = setTimeout(logger, 2000);
// });
//когда передаем в переменную мы записываем числовой идентификатор этого таймера
//чтобы четко определять
// function logger() {
// 	if (i === 3) {
// 		clearInterval(timerId);
// 	}
// 	console.log('Hi!');
// 	i++;
// }
//рекурсивный вызов setTimeout

// const id = setTimeout(function log() {
// 	console.log('Hi');
// 	id = setTimeout(log, 500)
// }, 500)