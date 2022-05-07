const str = "Hello";

console.log(str); // Hello
console.log(str.toUpperCase()); // HELLO

let str_test = "Hello";
str_test.test = 5;
console.log(str_test); // Hello
console.log(str_test.test); // undefined

/**
 * 엄격 모드 : An Error
 * 비엄격 모드 : undefined
 *
 * str의 프로퍼티에 접근하려 하면 래퍼 객체가 만들어 진다
 * 엄격 모드에선 래퍼 객체를 수정하려 하면 에러가 발생한다.
 * 비 엄격 모드에서는 에러가 발생하지 않고 래퍼 객체 프로퍼티에 test가 추가 된다. 하지만 래퍼 객체는 바로 삭제되기 때문에 마지막 줄이 실행 될 때에는 str_test의 test 프로퍼티를 찾을 수가 없다.
 */

const arr = [1, 2, 3];
console.log(typeof arr); // object!!
console.log(Array); // Function: Array
console.log(arr.constructor === Array); // true
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true

const obj = new Object({ 0: 1, 1: 2, 2: 3 });
console.log(obj.length); // undefined
console.log(arr.length); // 3

console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));
/*
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '2': { value: 3, writable: true, enumerable: true, configurable: true },
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/
console.log(Object.getOwnPropertyDescriptors(obj));
/*
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '2': { value: 3, writable: true, enumerable: true, configurable: true },
}
*/

const arr2 = [1, 2, 3];
console.log(arr.length); // 3

arr.push(4);
console.log(arr.length); // 4

arr.pop();
console.log(arr.length); // 2

arr.push(4);
console.log(arr); // [1, 2, 3, 4]
arr.length = 3;
console.log(arr); // [ 1, 2, 3]

const arr3 = [1, 2];
arr3.length = 4;

console.log(arr3.length); // 4
console.log(arr3); // [1, 2, <2 empty items>]

console.log(Object.getOwnPropertyDescriptors(arr3));
/**
 * 
 {
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  length: { value: 4, writable: true, enumerable: false, configurable: false }
}

 */
// configurable : 구성 가능 enumerable : 셀 수 있는

arr3[3] = 4;
console.log(arr3);
console.log(arr3.length);
console.log(arr3[2], arr3[3]);

//값이 없는 요소를 위해 메모리 공간을 확보하지 않는다!!
//이렇게 배열의 요소가 연속적으로 위치하지 않고 일부가 비어있는 배열을 희소 배열이라고 한다.
console.log(Object.getOwnPropertyDescriptors(arr3));
/**
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '3': { value: 4, writable: true, enumerable: true, configurable: true },
  length: { value: 4, writable: true, enumerable: false, configurable: false }
}
 */

const checkArr = [1, 2, 3];
console.log(typeof checkArr); //object
console.log(Array.isArray(checkArr)); //true
