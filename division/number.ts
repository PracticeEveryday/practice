// number Type

const integer: number = 10; // 정수
const double: number = 10.12; // 실수
const negative: number = -20; // 음의 정수
const binary: number = 0b01000001; // 2진수
const octal: number = 0o101; // 8진수
const hex: number = 0x41; // 16진수

console.log(integer); //10
console.log(double); // 10.12
console.log(negative); // -20

// 자바스크립트는 2, 8, 16진수 데이터 타입을 제공하지 않기에 모두 10진수로 해석 됨
console.log(binary); //65
console.log(octal); //65
console.log(hex); //65

console.log(binary === octal); //true
