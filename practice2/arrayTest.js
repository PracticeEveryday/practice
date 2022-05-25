// var LIMIT = 10000000;
// var arr = new Array(LIMIT);
// console.time("Array insertion time");
// for (var i = 0; i < LIMIT; i++) {
//   arr[i] = i;
// }
// console.timeEnd("Array insertion time");

// var LIMIT = 10000000;
// var buffer = new ArrayBuffer(LIMIT * 4);
// var arr = new Int32Array(buffer);
// console.time("ArrayBuffer insertion time");
// for (var i = 0; i < LIMIT; i++) {
//   arr[i] = i;
// }
// console.timeEnd("ArrayBuffer insertion time");

// var LIMIT = 10000000;
// var arr = new Array(LIMIT);
// arr.push({ a: 22 });
// console.time("Array insertion time");
// for (var i = 0; i < LIMIT; i++) {
//   arr[i] = i;
// }
// console.timeEnd("Array insertion time");
// var LIMIT = 10000000;
// var arr = new Array(LIMIT);
// arr.push({ a: 22 });
// for (var i = 0; i < LIMIT; i++) {
//   arr[i] = i;
// }
// var p;
// console.time("Array read time");
// for (var i = 0; i < LIMIT; i++) {
//   //arr[i] = i;
//   p = arr[i];
// }
// console.timeEnd("Array read time");

var LIMIT = 10000000;
var buffer = new ArrayBuffer(LIMIT * 4);
var arr = new Int32Array(buffer);
console.time("ArrayBuffer insertion time");
for (var i = 0; i < LIMIT; i++) {
  arr[i] = i;
}
console.time("ArrayBuffer read time");
for (var i = 0; i < LIMIT; i++) {
  var p = arr[i];
}
console.timeEnd("ArrayBuffer read time");
