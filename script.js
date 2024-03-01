let userLength;
let userArray = [];
let index = 0;
let userElement 

do {
  userLength = prompt('Enter how many elements you want in Array:');
} while(isNaN(userLength) || userLength.trim() === '');
  
do {
  userElement = prompt(`Enter No ${index + 1} element`)
  userArray.push(userElement);
  index++
} while (index < userLength);

alert(
  `Your Array is 
  [${userArray}]
  let's sort it`
);

userArray.sort();
alert(`Sorted Array
  ${userArray}`
);

userArray.splice(1, 3);

userArray.sort();
alert(`Element from 2 till 4 deleted
  ${userArray}`
);