//null : 값이 없음을 뜻함 그 값이 0조차도 아니다 라는 뜻

// null은 null 이 유일! 대/소문자 구분도 함!!
// 프로그래밍 언어에서 null은 의도적으로 변수에 값이 없다는 것을 명시할 때 사용한다

let foo: any = "kim";
foo = null;

// typeof 연산자로 null 값을 연산해보면 object가 나온다 ㅠㅠ 설계상의 오류
// so null 을 확인하고 싶으면 ===을 사용하자
console.log(typeof foo); // objet
console.log(foo === null); // true
