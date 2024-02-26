// //****************************************************************************************************//
// // ************************************** homework 03 04 05 *******************************************//

//homework 06

// let userYearOfBorn = +prompt('Введіть ваш рік нарождення: ');
// let userCity = prompt('Введіть вашє місто ( з великої літери! ): ');
// let userSport = prompt('Введіть ваш улюбленний спорт: ');
// let userAge;
// let userCityAnswer;
// let userSportAnswer;
// let year = new Date().getFullYear();

// let template_1 = `Ти живеш у`
// let template_2 = `Круто! Хочеш стати`
// let template_3 = `Шкода, що Ви не захотіли ввести`;
// let answer;

// if(userYearOfBorn) {
//   userAge = `Ваш вік ${year - userYearOfBorn}`;
// } else {
//   userAge = `${template_3} дату народження`;
// }

// if(userCity) {
//   if(userCity === 'Лондон' || userCity === 'Київ' || userCity === 'Вашингтон') {
//     userCityAnswer = `${template_1} столиці ${userCity}`;
//   } else {
//     userCityAnswer = `${template_1} місті ${userCity}`;
//   }
// } else { 
//   userCityAnswer = `${template_3} місто`;
// }

// if(userSport === 'футбол') {
//   userSportAnswer = `${template_2} Дієго Марадона?`;
// } else if(userSport === 'бокс') {
//   userSportAnswer = `${template_2} Віталієм Кличко?`;
// } else if(userSport === 'баскетбол') {
//   userSportAnswer = `${template_2} Майклом Джорданом?`;
// } else {
//   userSportAnswer = `${template_3} вид спорту`;
// }

// answer = `${userAge} \n${userCityAnswer} \n${userSportAnswer}`;

// alert(answer);


// //homework 07

// let numOrStr = prompt('input number or string');
// console.log(numOrStr);

// switch(true) {
//   case numOrStr === null:
//     console.log('ВИ СКАСУВАЛИ');
//     break;
//   case numOrStr.trim() === '':
//     console.log('Empty String');
//     break;
//   case isNaN(+numOrStr):
//     console.log('number is Ba_NaN');
//     break;
//   default:
//     console.log('OK!');
}

// if (numOrStr === null) {
//   console.log('ВИ СКАСУВАЛИ');
//   } else if(numOrStr.trim() === '') {
//     console.log('Empty String');   
//   } else if(isNaN(+numOrStr)) {
//     console.log('number is Ba_NaN'); 
//   } else {
//     console.log('OK!');
// } 


// //****************************************************************************************************//
// // ************************************** lesson 04 **************************************************//


// // ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

// let age = 17;
// let data = [];  // Boolean (data) === true
// let name; // не дали значение - будет undefined

// if(age >= 18 && age <= 50) {
//   console.log('ok');
// }

// if(age >= 18 && age <= 50) {
//   console.log('ok');
// } else {
//   console.log('ok')
// }

// if(age >= 18 && age <= 50) {
//   console.log('ok');
// } else if (age > 50) {
//   console.log('go to sleep');
// } else {  
//   console.log('ok')
// }

// if(age >= 18 && age <= 50) {
//   console.log('ok');
// } else if (age || age === 0) { // Boolean (age) === true
//   console.log('Thanks for age');
//   debugger;
// } else if (!age) { // !Boolean (age) === true
//   console.log('Give age');
// } else {  
//   console.log('ok')
// }

// // если нужно вызвать функцию, то так легче читать
// if(data) {  // если массив существует, то добавляем hi
//   data.push('hi');  // возращается lenght array;
// } else {    // а если массив не существует, то создаём его с hi
//   data = ['hi'];  // возращается самаа переменная data, т.е. ссылка на array
// }

// let test = age >=18 && age <= 50 ? console.log('ok') : console.log('go to home');
// // то же самое
// let test_1 = age >=18 && age <= 50 ? 
//   console.log('ok') : 
//   console.log('go to home');

// //или

// let res = age >= 18 && age <= 50 ? 'ok' : 'go to home';
// console.log(res);

// let res_1 = age ?                              // если age есть,
//   age >= 18 && age <= 50 ? 'ok' : 'go to home' // то выполняем эту строку
//   : 'pls fill';                                // иначе - эту

// console.log(res_1);

// let res_2 = age ?                              // если age есть,
//   age >= 18 && age <= 50 ?                    // то выполняем эту строку
//     'ok' :
//     age > 50 ? 
//       'go to home and go sleep' : 'drink milk'   
//   : 'pls fill';                                // иначе - эту
  
// console.log(res_2);

// //или запишем так
// let res_3
// if(age) {
//   if(age >= 18 && age <= 50) {
//     res_3 = 'ok';
//   } else if( age > 50) {
//     res_3 = 'go to sleep';
//   } else {
//     res_3 = 'drink milk';
//   }
// } else {
//   res_3 = 'pls fill';
// }

// //switch case
// switch (key) { //принимается информация, любая variable
//   case value: // будет приравниваться в строгом   key === value;

//     break;    // останавливае выполнение проверку

//   default:    // не обязательное
// }

// let userName = 'Ivan';
// switch (userName) {
//   case 'Ivan':
//     res_4 = 'hello men';
//     break;
//   case 'Lera':    // так можно записать если один результат для разных условий
//   case 'Ira':
//     res_4 = 'hello women';
//     break;
//   default:            
//     rez_4 = 'hello it';
// }

// //условия в switch case
// let cm;
// switch (true) {  // key === true
//   case (cm < 100 || cm) :  // true === true
//     console.log('cm 100');
//     break;
//   case cm < 1000:
//     console.log('cm 1000');
// }


// // ПРОВЕКА ФУНКЦИОНАЛЬНОСТИ
// try {
//   let nulleble = null;
//   nullable.age();
// } catch (error) {
//   console.error(error);
// }

// //КОПИРОВАНИЕ СЛОЖНЫХ ПЕРЕМЕННЫХ

// // ... три точки копируют только если объект состоит из простых данных
// // если в объеуте есть объект, то не получится, скопирует ссылку на вложенный объект
// let obj = {
//   name: 'Ivan',
//   sex: 'man'
// };

// let obj_1 = obj; // копируем obj
// let obj_2 = {    // создаём НОВЫЙ объект.  ... говорят передай все данные из obj в obj_2
//   ...obj
// };
// let obj_3 = {   // так же создаём НОВЫЙ объект без ... Передаём все данные из obj в obj_3
//   name: obj.name,
//   sex: obj.sex
// };


// obj_1.age = 19;  // добавили age = 19 в obj_1 и это же добавилось в obj.
//                  // a obj_2 и obj_3 остались не изменными, т.к. это новые объекты

// console.log(
//   'obj:', obj,
//   'obj_1:', obj_1,
//   'obj_2', obj_2
// );
// // вывод
// //obj:   {name: 'Ivan', sex: 'man', age: 19},
// //obj_1: {name: 'Ivan', sex: 'man', age: 19},
// //obj_2  {name: 'Ivan', sex: 'man',}
// //obj_3  {name: 'Ivan', sex: 'man',}

// ////////////////////////////////////////////////////////////////////////////////////
// //////                                                                         /////
//           let year = new Date().getFullYear();   //  вызвать текущий год
// ////                                                                          //////
//           numOrStr.trim()   // убирает пробелы в строке в начале и в конце
// ////                                                                           /////
// ////////////////////////////////////////////////////////////////////////////////////

// //****************************************************************************************************//
// // ************************************** homework 03 04 05 *******************************************//

// //homework 3
// let numberOne = +prompt('Enter first number:');
// let numberTwo = +prompt('Enter second number:');

// let sumNumbers = numberOne + numberTwo;
// let minusNumbers = numberOne - numberTwo;
// let multNumbers = numberOne * numberTwo;
// let divNumbers = numberOne / numberTwo;

// alert(`User entered ${numberOne} and ${numberTwo}:
//   ${numberOne} + ${numberTwo} = ${sumNumbers}
//   ${numberOne} - ${numberTwo} = ${minusNumbers}
//   ${numberOne} * ${numberTwo} = ${multNumbers}
//   ${numberOne} / ${numberTwo} = ${divNumbers}`
//   );

// //homework 4
// let userHours = +prompt('Enter how many hours: ');
// const secondsInHour = 3600;
// let userSeconds = userHours * secondsInHour;
// alert(`The ${userHours} hours is ${userSeconds} seconds`);

// //homework 5
// let numOne = +prompt(`Enter first number: `);
// let numTwo = +prompt(`Enter second number`);
// let numThree = +prompt(`Enter third number`);

// let average = (numOne + numTwo + numThree) / 3;
// alert(`The average of your numbers is ${average}`);

// //****************************************************************************************************//
// // ************************************** lesson 04 **************************************************//

// let x = 5;
// let obj = {};

// //копирование данных
// let copyX = x; // копируется сами данные (5)
// let copyObj = obj; // копитуется ссылка на переменную в куче

// console.log(copyObj, obj);

// //изменение типов данных явное
// var strNum = '5';
// +strNum;
// //или   
// Number('strNum');

// typeof +'sss'
// String(9);
// x.toString();

// //не явное
// 5 + String(9);
// '59'

// //математические действия
// 3 + +3
// 6

// 3 + '3'  // плюс бинарный оператор
// '33'

// //операторы сравнения
// -0 >= 0;
// 8 <= 8; // true
// 8 == '8';  8 == 8;  // не строгая проверка
// 8 === '8'; 8 === 8;  // строгая проверка

// Number(true) === 1 // true
// Number(false) === 0 // true
// Number('') === 0 //  true

// Boolean(1) === true;
// Boolean(0) === false;
// Boolean('') === false;

// [].toString()  // получаем пустую строку
// ''

// null + '' // получаем
// 'null'   // чтоб перевести в строку можно просто добавить пустую строку

// //логические операторы
// (1 == 0) || (1 == 1) || null  //  || - или
// true

// (1 == 0) && (1 == 1) && null  //  && - и
// false

// const age = +promt('how old are you?');  // promt приходит строка, переводим в число с помощью +
// console.log(age >= 18 && age <= 50);

// let y = Boolean(2 > 0 && 2 > 1 || null && 0);

// // проверка на null
// // let a = ??;
// let nulleble = null;
// let notNull = nulleble ?? null ?? 'ivan';
// notNull
// // получаем 
// 'ivan'


// // возведение в степень
// // **;

// //****************************************************************************************************//
// // ************************************** homework 01 02 *********************************************//

// // HW 01;
// let answeOne = prompt('Enter any word', );
// let answerTwo = prompt('Enter another word', );
// let answerThree = prompt('Enter one more word', );
// let result1 = answerOne + ' ' + answerTwo + ' ' + answerThree;
// console.log('Result homework 2.1:', result1);

// // HW02
// let number = prompt('Enter five digit number:');
// let one = number[0];
// let two = number[1];
// let three = number[2];
// let four = number[3];
// let five = number[4];
// let result2 = `${one} ${two} ${three} ${four} ${five}`;
// console.log('Result homework 2.2:', result2);

// // let result2 = number.split('');
// // let answer = result2.join(' ');
// // console.log('Result homework 2.2:', answer);



// //****************************************************************************************************//
// // ************************************** lesson 03 ****************************************************//


// // console.log(x);
// // var x = 5;

// // // итепритатор читає так //
// // var x;
// // console.log(x);
// // x = 5;

// // let test = 1;
// // const num = 2;

// // // итепритатор читає так //
// // {
// //     let test = 1;
// //     const num = 2;
// // }

// // const typeVar = typeof test;

// // 0,1 + 0,2
// // 2
// // 0,1+0,2
// // 2
// // 0.1 + 0.2
// // 0.30000000000000004
// //  "sdfdsf".lenth
// // undefined
// // "ssdgfdgsg".length
// // 9
// // let str = "asdffdf";
// // undefined
// // str.length
// // 7
// // str[str.length - 1]
// // 'f'

// // 5
// // 3 /1
// // 3
// // 3 % 1
// // 0
// // 3 % 2
// // 1

// // parseInt('100.99px');
// // parseFloat('10.333px');

// // parseFloat('10.333px');

// // let sum = 0.1 + 0.2;
// // undefined
// // let res = sum.toFixed(2);
// // undefined
// // typeof res
// // 'string'
// // +res
// // 0.3
// // console.log(+res);
// // VM392:1 0.3
// // undefined
// // let sum = 25 + 25;
// // undefined
// //     asdfd
// // VM473:1 Uncaught ReferenceError: asdfd is not defined
// //     at <anonymous>:1:5
// // (anonymous) @ VM473:1
// //     SVGFEDiffuseLightingElement
// // ƒ SVGFEDiffuseLightingElement() { [native code] }
// //     let sum = 0.1 + 0.3;
// // undefined
// // let res = +sum.toFixed(2);
// // undefined
// // typeof res
// // 'number'
// // let num = 11, str = "test';
// // VM759:1 Uncaught SyntaxError: Invalid or unexpected token
// // let num = 12, str = 'sdfs';
// // VM831:1 Uncaught SyntaxError: Identifier 'num' has already been declared
// // let dwa = 12, str = 'fgh';
// // undefined
// // isNaN(11)
// // false
// // isNaN('11')
// // false
// // parseFloat('12.202px')
// // 12.202
// // parseFloat('12.202px')
// // 12.202
// // parseInt('asda')
// // NaN
// // parseInt('10.255px')
// // 10

// //****************************************************************************************************//
// // ************************************** lesson 02 ****************************************************//

// console.log('Hello world');
// console.warn('attention');
// console.error('Bug');
// console.log('witam');  
// //консоль ==>

// debugger;

// null;
// console.log('this');

// // прості типи данних

// String;
// Number;
// null (Object);
// undefined;
// Boolean;
// Symbol;

/**
 * 
 * 
 * 
*/

// // складні (ссилочні)

// Object;  // (function);
// Array;

// let test = [].forEach(() => { let a = 1; });



// // дефолтні функції контакту з юз

// alert('Hello User');
// console.log('this 1');

// let answer1 = prompt('How are you?', 'Def');
// console.log('this 2');

// let answer2 = confirm('Are u agree with me?');
// console.log('this 3');

// /*
//  многострочный, комит
// */