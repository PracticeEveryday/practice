const obj = {
  a: "a",
  b: {
    c: 2,
  },
};

function deepCopy(obj) {
  const deep = {};

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      deep[key] = deepCopy(obj[key]);
    } else {
      deep[key] = obj[key];
    }
  }
  return deep;
}

console.time(" ");
let copiedObj = deepCopy(obj);
console.log(copiedObj); // { a: 'a', b: { c: 2 } }
console.log(copiedObj === obj); // false
copiedObj.b.c = "c";
console.log(copiedObj); // { a: 'a', b: { c: 'c' } }
console.log(obj); // { a: 'a', b: { c: 2 } }
console.timeEnd(" ");

console.time(" ");
copiedObj = JSON.parse(JSON.stringify(obj));
console.log(copiedObj); // { a: 'a', b: { c: 2 } }
console.log(copiedObj === obj); // false
copiedObj.b.c = "c";
console.log(copiedObj); // { a: 'a', b: { c: 'c' } }
console.log(obj); // { a: 'a', b: { c: 2 } }
console.timeEnd(" ");

// import _ from "lodash"
copiedObj = _.cloneDeep(obj);
console.log(copiedObj); // { a: 'a', b: { c: 2 } }
console.log(copiedObj === obj); // false
copiedObj.b.c = "c";
console.log(copiedObj); // { a: 'a', b: { c: 'c' } }
console.log(obj); // { a: 'a', b: { c: 2 } }
console.timeEnd(" ");
