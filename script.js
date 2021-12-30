'use strict';

// new RegExp ('pattern', 'flags')// old syntacsis
// /pattern/f

// const ans = prompt('Text your name');

// const reg = /\d/ig;
// console.log(ans.match(reg));

const str = 'My name is R2D2';
console.log(str.match(/\W/i));

//\D
//\W

//\d цифры
//\w слова
//\s пробел

// i - хотим найте вне зависимости от режима
// g глобально
// m много строчный режим

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/\./g, "*"));

// console.log('12-34-56'.replace(/-/g, ":"));

