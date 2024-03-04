//hw_09

//taskOne
let taskOne = [];

for (let i = 10; i <= 20; i++) {
  taskOne.push(i);
}

console.log('taskOne:', taskOne.join(','));


//taskTwo
for (let i = 10; i <= 20; i++ ) {
  console.log(`${i} * ${i}:`, i**2);
}


//taskThree
const seven = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${i} * 7 = ${i * seven}`);
}


//taskFour
let taskFour = 0;

for (let i = 1; i <= 15; i++) {
  taskFour += i;
}

console.log('taskFour sum:', taskFour);


//taskFive
let multi = 1;

for (let i = 15; i <= 35; i++) {
  multi *= i;
}

if (Number.isInteger(multi)) {
  multi = BigInt(multi);
}

console.log(`taskFive multi: ${multi}`);


//taskSix
let total = 0;
let max = 500;

for (let i = 1; i <= max; i++) {
  total += i; 
}

console.log('taskSix:', total / max );


//taskSeven
let taskSeven = 0;

for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    taskSeven += i;
  }
}
console.log('taskSeven:', taskSeven);


//taskEight
let taskEight = [];

for ( i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    taskEight.push(i);
  }
}

console.log('taskEight:', taskEight);


//taskNine
let taskNine = [];
let userNumber;

for (;;) {
  userNumber = +prompt('Enter number')
  if (userNumber && !isNaN(userNumber)) {
    break
  }
}

for ( let i = 1; i <= userNumber; i++) {
  if (userNumber % i === 0) {
    taskNine.push(i);
  }
}

console.log('taskNine: ', taskNine);


//taskTen && taskEleven
let taskTen = 0;
let taskEleven = 0;

for (let item of taskNine) {
  if (item % 2 === 0) {
    taskTen++;
    taskEleven += item;
  }
}

console.log(
  `taskTen: ${taskTen}
taskEleven: ${taskEleven}
  `);


// //taskTwelve
let taskTwelve = [];

for (i = 0 ; i <= 10; i++) {
  if(!taskTwelve[i]) taskTwelve.push([]);
  for (let j = 0; j <= 10; j++) {
    taskTwelve[i].push(i*j);
  }
}

console.table(taskTwelve);