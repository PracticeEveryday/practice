"use strict";
class Person {
    constructor(name, age, address) {
        this.thisCheck = () => {
            return this;
        };
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
const me = new Person("kim");
console.log(me.thisCheck());
class Foo {
    constructor(me) {
        this.me = me;
    }
    identify() {
        return "I am " + this.me;
    }
}
const foo = new Foo("kim");
console.log(foo.identify());
