// lesson 04 

let x = 5;
let obj = {};

//копирование данных
let copyX = x; // копируется сами данные (5)
let copyObj = obj; // копитуется ссылка на переменную в куче

console.log(copyObj, obj);

//изменение типов данных явное
var strNum = '5';
+strNum;
//или   
Number('strNum');

typeof +'sss'
String(9);
x.toString();

//не явное
5 + String(9);
'59'

//математические действия
3 + +3
6

3 + '3'  // плюс бинарный оператор
'33'

//операторы сравнения
-0 >= 0;
8 <= 8; // true
8 == '8';  8 == 8;  // не строгая проверка
8 === '8'; 8 === 8;  // строгая проверка

Number(true) === 1 // true
Number(false) === 0 // true
Number('') === 0 //  true

Boolean(1) === true;
Boolean(0) === false;
Boolean('') === false;

[].toString()  // получаем пустую строку
''

null + '' // получаем
'null'   // чтоб перевести в строку можно просто добавить пустую строку

//логические операторы
(1 == 0) || (1 == 1) || null  //  || - или
true

(1 == 0) && (1 == 1) && null  //  && - и
false

const age = +promt('how old are you?');  // promt приходит строка, переводим в число с помощью +
console.log(age >= 18 && age <= 50);

let y = Boolean(2 > 0 && 2 > 1 || null && 0);

// проверка на null
let a = ??;
let nulleble = null;
let notNull = nulleble ?? null ?? 'ivan';
notNull
// получаем 
'ivan'


// возведение в степень
// **;

//****************************************************************//

// HW 01;
let answeOne = prompt('Enter any word', );
let answerTwo = prompt('Enter another word', );
let answerThree = prompt('Enter one more word', );
let result1 = answerOne + ' ' + answerTwo + ' ' + answerThree;
console.log('Result homework 2.1:', result1);

// HW02
let number = prompt('Enter five digit number:');
let one = number[0];
let two = number[1];
let three = number[2];
let four = number[3];
let five = number[4];
let result2 = `${one} ${two} ${three} ${four} ${five}`;
console.log('Result homework 2.2:', result2);

// let result2 = number.split('');
// let answer = result2.join(' ');
// console.log('Result homework 2.2:', answer);

//****************************************************************//