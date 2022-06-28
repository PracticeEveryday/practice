// 기존과 달라진 ES6에서의 리스트 순회

// for i++

const lst = [1, 2, 3];
for (let i = 0; i < lst.length; i++) {
  console.log(lst[i]);
}
// list라는 값에 length라는 프로퍼티에 의존해 숫자 키로 순회하도록 하는 것!! i를 증가시키며!!!!!!!!

const str = "abc";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

for (const a of lst) {
  console.log(a);
}

for (const a of str) {
  console.log(a);
}
