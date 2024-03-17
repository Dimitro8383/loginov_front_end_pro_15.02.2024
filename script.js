// //hw 15
"use strict"

let hw15 = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

const funcOneSumAndQuontity = function (arr) {
  let sum = 0;
  let countPositive = 0;
  for (let num of arr) {
    if (num > 0) {
      sum += num;
      countPositive++;
    }
  }
  return {sum, countPositive};
}


const funcTwoMinAndSeq = function (arr) {
  let min = arr[0];
  let sequence = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      sequence = i + 1;
    }
  }
  return {min, sequence};
}


const funcThreeMaxAndSeq = function (arr) {
  let max = arr[0];
  let sequence = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      sequence = i + 1;
    }
  }
  return {max, sequence};
}


const funcFourQuontityNegative = function (arr) {
  let quontityNegative = 0;
  for (let item of arr) {
    if (item < 0) {
      quontityNegative++;
    }
  }
  return {quontityNegative};
}


const funcFiveQuontityNotMatchPositive = function (arr) {
  let quontityNotMatchPositive = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      let match = false;
      for (let j = 0; j < arr.length; j++) {
        if (i !== j && arr[j] > 0 && arr[i] === arr[j]) {
          match = true;
          break;
        }
      }
      if (!match) {
        quontityNotMatchPositive++;
      }
    }
  }
  return {quontityNotMatchPositive};
}


const funcSixQuonityMatchPositive = function (arr) {
  let quontityMatchPositive = 0;
  let arr_2 = arr.slice();
  for (let i = 0; i < arr_2.length; i++) {
    if (arr_2[i] > 0) {
      for (let j = 0; j < arr_2.length; j++) {
        if (i !== j && arr_2[j] > 0 && arr_2[i] === arr_2[j]) {
          quontityMatchPositive += 2;
          arr_2.splice(i,1,undefined);
          arr_2.splice(j,1,undefined);
        }
      }
    }
  }
  return {quontityMatchPositive};
}


const funcSevenSumMatchPositive = function (arr) {
  let sum = 0;
  let arr_2 = arr.slice();
  for (let i = 0; i < arr_2.length; i++) {
    if (arr_2[i] > 0) {
      for (let j = 0; j < arr_2.length; j++) {
        if (i !== j && arr_2[j] > 0 && arr_2[i] === arr_2[j]) {
          sum += (arr[i] * 2);
          arr_2.splice(i,1,undefined);
          arr_2.splice(j,1,undefined);
        }
      }
    }
  }
  return {sum};
}


const funcEightSumNotMatchPositive = function (arr) {
  let sumNotMatchPositive = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      let match = false;
      for (let j = 0; j < arr.length; j++) {
        if (i !== j && arr[j] > 0 && arr[i] === arr[j]) {
          match = true;
          break;
        }
      }
      if (!match) {
        sumNotMatchPositive += arr[i];
      }  
    }
  }
  return {sumNotMatchPositive}
}


const funcNineMultiPositive = function (arr) {
  let multiPositiveItem = 1;
  for (let item of arr) {
    if (item > 0) {
      multiPositiveItem *= item;
    }
  }
  return {multiPositiveItem};
}


const funcTenMaxAndNull = function (arr) {
  let arr_2 = arr;
  let max = arr_2[0];
  for (let item of arr_2) {
    if (item > max) {
      max = item;
    }
  }
  for (let i = 0; i < arr_2.length; i++) {
    if (arr_2[i] != max) {
      arr.splice(i, 1, 0);
    }
  }
  return {max, arr_2};
}


console.log(funcOneSumAndQuontity(hw15));
console.log(funcTwoMinAndSeq(hw15));
console.log(funcThreeMaxAndSeq(hw15));
console.log(funcFourQuontityNegative(hw15));
console.log(funcFiveQuontityNotMatchPositive(hw15));
console.log(funcSixQuonityMatchPositive(hw15));
console.log(funcSevenSumMatchPositive(hw15));
console.log(funcEightSumNotMatchPositive(hw15));
console.log(funcNineMultiPositive(hw15));
console.log(funcTenMaxAndNull(hw15));

















