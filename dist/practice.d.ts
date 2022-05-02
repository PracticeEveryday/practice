declare class Person {
    name: string;
    age?: number;
    address?: string;
    constructor(name: string, age?: number, address?: string);
    thisCheck: () => this;
}
declare const me: Person;
declare class Foo {
    me: string;
    constructor(me: string);
    identify(): string;
}
declare const foo: Foo;
