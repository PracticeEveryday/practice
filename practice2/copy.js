const a = 1;
let b = a;
b = 2;

console.log(a); // 1
console.log(b); // 2

const c = { number: 1 };
let d = c;

d.number = 2;

console.log(c.number); // 2
console.log(d.number); // 2

const e = [1, 2, 3];
let f = e;
f[0] = 10;

console.log(e); // [10, 2, 3]
console.log(f); // [10, 2, 3]

const obj = {
  a: "a",
  num: {
    one: 1,
    two: 2,
  },
};

const shllowCopy = Object.assign({}, obj);
console.log(shllowCopy); //{ a: 'a', num: { one: 1, two: 2 }}
console.log(shllowCopy === obj); // false
console.log(shllowCopy.num === obj.num); // true
shllowCopy.a = "A";
console.log(shllowCopy); //{ a: 'a', num: { one: 1, two: 2 }}
console.log(obj);

//shllowCopy.num.one = "one";
console.log(obj); //{ a: 'a', num: { one: 'one', two: 2 } }

console.clear();

const shllowCopy2 = { ...obj };

console.log(shllowCopy2); //{ a: 'a', num: { one: 1, two: 2 }}
console.log(shllowCopy2 === obj); // false
console.log(shllowCopy2.num === obj.num); // true
shllowCopy2.a = "A";
console.log(shllowCopy2); //{ a: 'a', num: { one: 1, two: 2 }}
console.log(obj);

shllowCopy2.num.one = "one";
console.log(obj); //{ a: 'a', num: { one: 'one', two: 2 } }
