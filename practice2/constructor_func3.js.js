function Person(name) {
  this.name = name || "홍길동";
}

Person.prototype.getName = function () {
  return this.name;
};

function Korean(name) {
  Person.apply(this, arguments);
}
Korean.prototype = new Person();

var kor1 = new Korean("류현진");
console.log(kor1.getName()); // 류현진

/**
 * Person 함수를 간접 실행하여 this 바인딩 (name 사용가능)
 * Korean 함수의 prototype 링크를 Person 생성자를 통해 객체에 참조
 * => name 속성은 this 바인딩을 통해 Korean 생성자가 Person 함수내용을
 *    동작시켜 사용가능하고,
 * => getName 메소드는 Korean 함수의 프로토타입 링크를 new Person() 객체에
 *    참조함으로 사용가능 한 것입니다.
 *
 * 하지만 단점으로는 kor1의 객체에 name 속성이 존재하고
 * 프로토 타입 링크를 걸어주기 위해 만든 new Person 객체에도 name 이 존재한다.
 * 메모리 낭비?
 */
