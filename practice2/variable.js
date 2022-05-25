// // var name = "Evan";
// // var name = "Evan2";
// // console.log(name); // Evan2

// console.log(name); // undefined
// var name = "kim";

// (function () {
//   var local = 1;
// })();
// // console.log(local);
// // Uncaught ReferenceError: local is not defined

// for (var i = 0; i < 10; i++) {}
// console.log(i); // 10

// var globalVariable = "global!";

// if (globalVariable === "global!") {
//   globlVariable = "global?"; // 오타 냄
// }

// console.log(globalVariable); // global!
// console.log(globlVariable); // global?

// const value = "kim";
// value = "lee"; //TypeError: Assignment to constant variable.

// var name = "kim";
// var name = "lee"; // 아무 일도 일어나지 않았다...

// let name = "kim";
// let name = "lee";
// // Uncaught SyntaxError: Identifier 'name' has already been declared

// const name2 = "kim";
// const name2 = "lee"; // Uncaught SyntaxError: Identifier 'name' has already been declared

// console.log(name);
// var name = "kim";

// //console.log(aaa); aaa is not defined

// //console.log(name2);
// //ReferenceError: Cannot access 'name2' before initialization
// let name2 = "lee";

// var globalVariable = "I am global";

// if (globalVariable === "I am global") {
//   var globalVariable = "am I local?";
// }
// console.log(globalVariable); // am I local?

// let globalVariable = "I am global";

// if (globalVariable === "I am global") {
//   let globalVariable = "am I local?";
//   let localVariable = "I am local";
// }

// console.log(globalVariable); // I am global
// console.log(localVariable);
// // Uncaught ReferenceError: localVariable is not defined
// let name = "Global Evan";

// if (name === "Global Evan") {
//   console.log(name); // Uncaught ReferenceError: Cannot access 'name' before initialization
//   let name = "Local Evan";
// }

// const maxCount = 30;
// maxCount = 40; // Uncaught TypeError: Assignment to constant variable.

// const obj = { name: "Evan" };
// obj = { name: "John" }; // Uncaught TypeError: Assignment to constant variable.

const obj = { name: "Evan" };
obj.name = "John";
console.log(obj); // { name: 'John' }

let hi;
console.log(hi); // undefined

const hi2
console.log(hi2)
// SyntaxError: Missing initializer in const declaration