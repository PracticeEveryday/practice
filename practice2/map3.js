let prices = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

console.log(prices);
// { banana: 1, orange: 2, meat: 4 }

let map = new Map();
map.set("banana", 1);
map.set("orange", 2);
map.set("meat", 4);

console.log(map);
// Map(3) { 'banana' => 1, 'orange' => 2, 'meat' => 4 }

console.log(map.entries());
// [Map Entries] { [ 'banana', 1 ], [ 'orange', 2 ], [ 'meat', 4 ] }
const obj = Object.fromEntries(map.entries());
console.log(obj);
// { banana: 1, orange: 2, meat: 4 }

// .entries()를 생략해도 가능합니다!!
let obj2 = Object.fromEntries(map);
console.log(obj2);
// { banana: 1, orange: 2, meat: 4 }
