const arr = [1, 2, 3];

function linear_search(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
}

console.log(linear_search(arr, 2));

const smallCollection = [1, 2, 3, 4];
const bigCollection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function countOperations(arr) {
  let operations = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      operations++;
    }
  }
  return operations;
}
console.log(countOperations(smallCollection)); // 16

function printAllValues(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function findFirstIndex(arr) {
  const firstIndex = arr[0];
  return firstIndex;
}

const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
const worst_numbers = [3, 4, 5, 6, 7, 8, 9, 2];
const LtThree = numbers.find((number) => number < 3);

const smallNumber = 1000;
const biggerNumber = 10000;

function countOperation(n) {
  let operations = 0;
  let i = 1;

  while (i < n) {
    i = i * 2;
    operations++;
  }
  return operations;
}
console.log(countOperation(smallNumber)); // 10
console.log(countOperation(biggerNumber)); // 14
