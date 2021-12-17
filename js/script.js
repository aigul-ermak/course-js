"use strict";

if (4 == 9) {
	console.log('ok');
} else {
	console.log('error');
}

// const num = 50;

// if (num < 49) {
// 	console.log('error');
// } else if (num > 100) {
// 	console.log('too much');
// } else {
// 	console.log('ok');
// }


// const num = 50;
// (num == 50) ? console.log('ok'): console.log('error');

const num = 50;
switch (num) {
	case 49:
		console.log('no');
		break;

	case 45:
		console.log('no');
		break;

	case 50:
		console.log('yes');
		break;

	default:
		console.log('next time lucky');
		break;
}