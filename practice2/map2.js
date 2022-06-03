let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// 키 (vegetable) 을 대상으로 순회합니다.
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);
}
// cucumber, tomatoes, onion

// 값 (amount)를 대상으로 순회합니다.
for (let amout of recipeMap.values()) {
  console.log(amout);
}
// 500 350 50

// [키, 값] 쌍을 대상으로 순회합니다.
for (let entry of recipeMap) {
  console.log(entry);
}
// [ 'cucumber', 500 ] [ 'tomatoes', 350 ] [ 'onion', 50 ]

recipeMap.forEach((value, key, map) => {
  console.log(`${key} : ${value}`);
});
// cucumber : 500
// tomatoes : 350
// onion : 50

let map = new Map([
  ["1", "str1"],
  [1, "num1"],
  [true, "bool1"],
]);

console.log(map.get("1"));

let obj = {
  name: "john",
  age: 30,
};

console.log(Object.entries(obj));
// [ [ 'name', 'john' ], [ 'age', 30 ] ]
let mapObj = new Map(Object.entries(obj));

console.log(mapObj);
// Map(2) { 'name' => 'john', 'age' => 30 }
console.log(mapObj.get("name"));
// john
