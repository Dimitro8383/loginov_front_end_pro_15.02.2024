//homework 3
let numberOne = +prompt('Enter first number:');
let numberTwo = +prompt('Enter second number:');

let sumNumbers = numberOne + numberTwo;
let minusNumbers = numberOne - numberTwo;
let multNumbers = numberOne * numberTwo;
let divNumbers = numberOne / numberTwo;

alert(`User entered ${numberOne} and ${numberTwo}:
  ${numberOne} + ${numberTwo} = ${sumNumbers}
  ${numberOne} - ${numberTwo} = ${minusNumbers}
  ${numberOne} * ${numberTwo} = ${multNumbers}
  ${numberOne} / ${numberTwo} = ${divNumbers}`
  );

//homework 4
let userHours = +prompt('Enter how many hours: ');
const secondsInHour = 3600;
let userSeconds = userHours * secondsInHour;
alert(`The ${userHours} hours is ${userSeconds} seconds`);

//homework 5
let numOne = +prompt(`Enter first number: `);
let numTwo = +prompt(`Enter second number`);
let numThree = +prompt(`Enter third number`);

let average = (numOne + numTwo + numThree) / 3;
alert(`The average of your numbers is ${average}`);
