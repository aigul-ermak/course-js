'use strict';

// 'use strict';

// console.log(document.body);
// console.log(document.documentElement);

//console.log(document.body.childNodes);//позволяет получить все ноды и все узлы внутри этого родителя
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode);// получилть родителя этого элемента
// console.log(document.querySelector('#current').parentNode.parentNode);

// console.log(document.querySelector('[data-current="3"]').previousSibling);// получаем текстовые ноды

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);//получаю именно элемент а не ноду

// console.log(document.querySelector('#current').parentElement);

// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

for (let node of document.body.childNodes) {
	if (node.nodeName == '#text') {
		continue;
	}
	console.log(node);// перебрал и оставил только элементы а не текстовые ноды
}