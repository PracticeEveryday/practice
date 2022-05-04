// Object.create(새로만든 객체에 지정될 프로토타입 객체, 새롭게 생성될 객체에만 부여할 속성) return 값은 새로운 객체

let person = {
  type: "사람",
  getType: function () {
    return this.type;
  },
  getName: function () {
    return this.name;
  },
};

let jin = Object.create(person, { job: { value: "야구선수" } });
console.log(jin.prototype); // undefined 만들어진 객체는 prototype이 없다!
console.log(jin.__proto__);
// {  type: '사람',  getType: [Function: getType],  getName: [Function: getName]}

jin.name = "류현진";

console.log(jin.getType()); // 사람
console.log(jin.getName()); // 류현진
console.log(jin.job); // 야구선수
console.log(person.job); // undefined

/**
 * person 객체를 정의 => type, getType, getName 속성, 메서드가 존재
 * Object.create(생성하는 객체의 프로토타입 객체를 person 객체로 지정)
 * => person 객체를 상속 받음.
 * 2번째 인자에 jin 객체만의 속성을 부여 <= person에서 접근 불가!!
 */
