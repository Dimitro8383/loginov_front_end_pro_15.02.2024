// hw14

"use strict";

const pow = (num, degree) => {
  if (degree === 0) {
    return 1;
  } else if (degree === 1 ) {
    return num;  
  } else {
    return num * pow(num, degree - 1);
  }
};

console.log(pow(2,4));