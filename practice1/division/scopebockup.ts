let x = "global";

function foo() {
  let x = "function scop";
  console.log(x);
}

foo(); // function scop
console.log(x); // global

// scope란 참조 대상 식별자 (identifier 변수, 함수의 이름과 같이 어떤 대상을 다른 대상과 구별하여 식별할 수 있는 유일한 이름)을 찾기 위한 규칙이다!
// JS는 이 규칙을 통하여 식별자를 찾는다.

// 전역 선언 global은 어디서든 참조 할 수 있으며 foo 내의 x는 foo 내부에서만 참조 할 수 있다. 외부에선 참조 x

// 전역 스코프 // 전역 변수 (Global Scope, Global Variable)
// 코드 어디에서든지 참조 가능

// 지역 스코프 // 지역 번수 (Local Scope of Function-level Scope, Local variable)
// 함수 블록이 만든 스코프로 함수 자신과 하위 함수에서만 참조 가능

// 변수는 선언 위치(전역 또는 지역)에 의해 스코프를 가지게 된다. 즉, 전역에서 선언된 변수는 전역 스코프를 갖는 전역 변수이고, 지역(자바스크립트의 경우 함수 내부)에서 선언된 변수는 지역 스코프를 갖는 지역 변수가 된다.

// 전역 스코프를 갖는 전역 변수는 전역(코드 어디서든지)에서 참조할 수 있다. 지역(함수 내부)에서 선언된 지역 변수는 그 지역과 그 지역의 하부 지역에서만 참조할 수 있다.

// Block-Lvel-Scope : 코드 블록 내에서 유효한( 참조 접근 할 수 있다. ) 스코프!!

// 단, ECMAScript 6에서 도입된 let keyword를 사용하면 블록 레벨 스코프를 사용할 수 있다.

var a = 0;
{
  var a = 1;
  console.log(a); // 1
}
console.log(a); // 1

let y = 0;
{
  let y = 1;
  console.log(y); // 1
}
console.log(y); // 0

const z = 0;
{
  const z = 1;
  console.log(z); // 1
}
console.log(z); // 0
