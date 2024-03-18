"use strict";

// hw13.1

const hw13_1 = ['qqq', 10, Infinity, 20, NaN, 30, null, 40, true, 50, '100000'];

const averageSum = function(arr) {
  let sum = 0;
  let count = 0;
  for (let item of arr) {
    if (typeof item === 'number' && isFinite(item)) {
      sum += item;
      count++
    }
  }
  return count ? sum / count : 0;
}

console.log(averageSum(hw13_1));


// hw13.2

const calculator = function(x, znak, y) {
  let userNumFirst;
  let userNumSecond;

  for (;;) {
    userNumFirst = +prompt('enter X:')
    if (userNumFirst && !isNaN(userNumFirst)) {
      break
    }
  }

  for (;;) {
    userNumSecond = +prompt('enter X:')
    if (userNumSecond && !isNaN(userNumSecond)) {
      break
    }
  }

  let userZnak = prompt("Enter any Znak from: '+' '-' '*' '/' '%' '^'");

  switch (userZnak) {
    case '+':
      return userNumFirst + userNumSecond;
    case '-':
      return userNumFirst - userNumSecond;
    case '*':
      return userNumFirst * userNumSecond;
    case '/':
      return userNumFirst / userNumSecond;
    case '%':
      return userNumFirst % userNumSecond;
    case '^':
      return Math.pow(userNumFirst, userNumSecond);
    default:
      return 'Znak no good'
  }
}

console.log(calculator());


// hw 13.3

let userRows;
let userCollumns;

for (;;) {
  userRows = +prompt('enter Rows in matrix:')
  if (userRows && !isNaN(userRows)) {
    break
  }
}

for (;;) {
  userCollumns = +prompt('enter Collumns in matrix:')
  if (userCollumns && !isNaN(userCollumns)) {
    break
  }
}

const makeArray = function(rows, collumns) {
  let userArray = [];

  for (let i = 1; i <= rows; i++) {
    let row = [];
    for (let j = 1; j <= collumns; j++) {
      let element = prompt(`enter element row ${i} and collumn ${j}`)
      row.push(element);
    }
    userArray.push(row);
  } 
  return userArray
}

console.log(makeArray(userRows, userCollumns));


// hw 13.4
let userString;

for (;;) {
  userString = prompt('enter string:').split('');
  if (userString) {
    break;
  }
}

let userChars = prompt('enter chars for delete:').split('');

const deleteChars = function (string, chars) {
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j <= chars.length; j++) {
      if (string[i] === chars[j]) {
        string.splice(i,1);
        i--;
        break;
      }
    }
  }
  return string.join('');  
}

console.log(deleteChars(userString, userChars));
