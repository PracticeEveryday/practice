// 배열 내보내기
export let months = ["Jan", "Feb", "Mar", "Apr", "May"];

// 상수 내보내기
export const basic = "Hello World";

// 클래스 내보내기
export class User {
  constructor(name) {
    this.name = name;
  }
}

// 함수 내보내기
export function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

function sayHello(user) {
  console.log(`Hello, ${user}!`);
}

function sayBye(user) {
  console.log(`Bye, ${user}!`);
}

export { sayHello, sayBye };
