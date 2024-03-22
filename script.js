//hw16

"use strict"

function sum() {
  let summa = 0;
  return function addSum (x) {
    return summa += x;
  }
}

let myFuncAdd = sum();

console.log(myFuncAdd(3));
console.log(myFuncAdd(5));
console.log(myFuncAdd(20));