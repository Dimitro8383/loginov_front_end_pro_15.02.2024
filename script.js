//hw11

let arr_1 = [];

for (let i = 1; i <= 5; i++) {
  arr_1.push(i);
}

console.log(arr_1);

function removeElement(array, item) {
  let removeIndex = array.indexOf(item);
    if (removeIndex != -1) {
      array.splice(removeIndex, 1);
    }
}
removeElement(arr_1, 500);
console.log(arr_1);

removeElement(arr_1, 1);
console.log(arr_1);

removeElement(arr_1, 5);
console.log(arr_1);

removeElement(arr_1, 3);
console.log(arr_1);

removeElement(arr_1, 2);
console.log(arr_1);

removeElement(arr_1, 4);
console.log(arr_1);

