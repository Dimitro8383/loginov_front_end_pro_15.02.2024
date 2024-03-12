// hw_10

// taskOne
let taskOne = [];

for (let i = 20; i <= 30; i += 0.5) {
  taskOne.push(i);
}

console.log('taskOne: ', taskOne.join(' '));


// taskTwo
const exchRate = 27;

for (let i = 10; i <= 100; i += 10) {
  console.log(`${i} USD cost ${i * exchRate} UAH`);
}


// taskThree
let taskThree = [];
let userNumber_3;

for (;;) {
  userNumber_3 = +prompt('TaskThree, Enter number')
  if (userNumber_3 && !isNaN(userNumber_3)) {
    break
  }
}

for(let i = 1; i <= 100; i++) {
  if( i * i <= userNumber_3) {
    taskThree.push(i);
  }
}

console.log('taskThree: ', taskThree.join(' '));


// taskFour
let isNumberSimple = false;
let userNumber_4;

for (;;) {
  userNumber_4 = +prompt('TaskFour, Enter number')
  if (userNumber_4 && !isNaN(userNumber_4)) {
    break
  }
}

for (let i = 2; i <= userNumber_4; i++) {
  if (i === userNumber_4) {
    isNumberSimple = true;
    break;
  } else if (userNumber_4 % i === 0) {
    break;
  }
}

console.log('Число ' + userNumber_4 + (isNumberSimple ? 
  ' є просте ' : ' не є просте'));


// taskFive
let userNumber_5;
let canGetUserNumber = false;
let power;

for (;;) {
  userNumber_5 = +prompt('TaskFive, Enter number')
  if (userNumber_5 && !isNaN(userNumber_5)) {
    break
  }
}

for(let i = 1; i <= Number.MAX_SAFE_INTEGER; i++) {
  if( 3 ** i > userNumber_5) {
      break;
  } else if( 3 ** i === userNumber_5) {
    canGetUserNumber = true;  
    power = i;  
    break;
  }
}

console.log('Число ' + userNumber_5 + (canGetUserNumber ? 
  ' можливо отримати шляхом зведення числа 3 у ступінь ' + 
  power : ' не можливо отримати шляхом зведення числа 3 у деякий ступінь'));
