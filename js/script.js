'use strict';

class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	calcArea() {
		return this.height * this.width;
	}
}

class ColoredRectangleWithText extends Rectangle {
	constructor(height, width, text, bsColor) {
		super(height, width); // вызывает то же самое что было у родителя
		this.text = text;
		this.bgColor = bsColor;
	}

	showMyProps () {
		console.log(`Text: ${this.text} color: ${this.bgColor}`);
	}
}

const div = new ColoredRectangleWithText(25, 10, 'Hello', 'red')

div.showMyProps();

console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());