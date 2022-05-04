function Person(name) {
  this.name = name || "홍길동";
  this.age = 30;
}
Person.prototype.getName = function () {
  return this.name;
};

function Korean(name) {
  console.log(this); // Korean {}
  Person.apply(this, arguments); // this에 자식 객체를 바인딩!!
  console.log(arguments); // arguments = {"0" : 류현진, "1" : 10}
  console.log(this); // Korean{name : "류현진", age : 30}
}

var kor1 = new Korean("류현진", 10);
console.log(kor1.name); // 류현진
console.log(kor1.__proto__); // {} 빈 객체
console.log(kor1.__proto__.__proto__); // [object: null prototype] {}
console.log(kor1.prototype); //undefined
// console.log(kor1.getName()); // TypeError

/**
 * 1. Korean 함수를 정의 할 때, 함수의 내용으로 Person함수를 apply를 통해 간접
 *    실행함.
 * 2. 간접 실행(call, apply 메소드)는 첫 번째 인자에 실행 문맥을 지정해 주는
 *    것임
 *    => 두번째 인자에는 유사 배열만 들어올 수 있습니다. (arguments 객체는
 *    유사 배열)
 * 3. Korean 함수를 실행 할 때 Person 함수를 this로 바인당 해 간접 실행하기
 *    때문에 Korean 함수는 Person 함수와 똑같이 작동합니다
 *    => Korean이 실행되면 Korean 안에서 Person이 실행됨
 * 4. 따라서 생성된 kor1 객체에서 name 속성 사용 가능
 *    (Person의 this가 Korean의 this와 같아짐)
 *    하지만 Korean 함수와 Person.prototype 객체간의 연결 고리가 없기 때문에
 *    getName method는 사용 불가능 함
 */
