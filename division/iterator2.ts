// 사용자 정의 이터러블을 통해 알아보기

const iterable = {
  [Symbol.iterator]() {
    let i = 3;

    return {
      next() {
        return i == 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};
let iterator = iterable[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// iterable 안에 [Symbol.iterator]()가 있어서 [Symbol.iterator]()를 실행하여
// 내부적으로 iterator를 만들고 안에서 next를 실행해 a에 value값을 받고 객체를 뱉어냄

for (const a of iterable) {
  console.log(a);
}

const arr2 = [1, 2, 3];
let iter2 = arr2[Symbol.iterator]();
// 잘만든 iterator는 실행하다가 넘어가도 이어서 가고!
// 모든 값을 순회할 수 있도록 되어 있음
// 이터레이터를 이터레이터로 만들어 주면 자기 자신이 나온다
// 이터레이터가 자기 자신을 반환하는 Symbol.iterator 메서드를 갖고 있을 때 웰 폼 이터레이터!
console.log(iter2[Symbol.iterator]() === iter2);
iter2.next();
for (const a of iter2) console.log(a);

// 전개 연산자
console.clear();

const a = [1, 2];
// iterator는 iterator를 반환해야함!!
//a[Symbol.iterator] = null; error

// 하나의 array가 됨
console.log(...a, ...[3, 4]);
