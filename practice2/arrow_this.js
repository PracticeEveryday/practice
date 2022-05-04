const person = {
  name: "kim",
  age: 28,
  getName: () => {
    console.log(this.name);
  },
  getName2: function () {
    console.log(this.name);
  },
};

person.getName();
person.getName2();

// arrow 함수는 prototype이 없다.
const person = (name) => {
  this.name = name;
};

// function person(name) {
//   this.name = name;
// }

person.prototype.getName = function () {
  return console.log(this.name);
};

let me = new person("kim");
console.log(me);

me.getName();
