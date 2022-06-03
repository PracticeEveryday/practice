let map = new Map();

map.set("1", "str1"); // 문자형 키
map.set(1, "num1"); // 숫자형 키
map.set(true, "bool1"); // 불린형 키

// 객체는 키를 문자형으로 반환한다.
// 맵은 키의 타입을 변환하지 않고 그대로 유지 한다.

console.log(map.get(1)); // num1
console.log(map.get("1")); // str1
console.log(map.size); // 3
console.log(map);
//Map(3) { '1' => 'str1', 1 => 'num1', true => 'bool1' }

let john = { name: "John" };

// 고객의 가게 방분 횟수를 센다고 가정해보자
let visitsCountMap = new Map();

// john을 맵의 키로 사용
visitsCountMap.set(john, 123);

console.log(visitsCountMap.get(john)); //123
console.log(visitsCountMap);
// Map(1) { { name: 'John' } => 123 }
console.log(john);
// { name: 'John' }

let kim = { name: "kim" };

let visitsCountObj = {};
visitsCountObj[john] = 123;
visitsCountObj[kim] = 456;

console.log(visitsCountObj);
// { '[object Object]': 123 }

console.log(visitsCountObj["[object Object]"]); // 456
