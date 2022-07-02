const obj = {
  name: "kim",
};

const obj2 = obj;

obj2.name = "kim";

console.log(obj, obj2);
// 새 객체를 할당해서 비교해야 깊은 복사가 된다.
const obj3 = { name: "kim" };

console.log(obj === obj3);

const deepCopy = (obj) => {
  const deep = {};
  for (const prop in obj) {
    deep[prop] = prop;
  }
  return deep;
};

const obj4 = deepCopy(obj);
console.log(obj4 === obj);
