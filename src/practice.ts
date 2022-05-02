class Person {
  // 변수 초기화
  name: string;
  age?: number;
  address?: string;
  constructor(name: string, age?: number, address?: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  thisCheck = () => {
    return this;
  };
}

const me: Person = new Person("kim");

console.log(me.thisCheck());

class Foo {
  me: string;
  constructor(me: string) {
    this.me = me;
  }

  identify(): string {
    return "I am " + this.me;
  }
}

const foo: Foo = new Foo("kim");
console.log(foo.identify());
