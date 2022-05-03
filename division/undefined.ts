// undefined : 찾으시는 주소가 없습니다

// undefined은 undefined 값이 유일하다.
// 선언 이후 할당하지 않은 변수는 undefined값을 가진다.

// 변수 선언 시 그 공간은 대부분 쓰레기 값(Garbage value)로 들어 있다. 이 것을 허용하지 않고 JS가 undefined로 초기화 한다.

let foo;
console.log(foo); // undefined

// 명시적으로 값을 주고 싶으면 null로 초기화하자!! undefined는 자바스크립트 엔진에 의해 초기화 된 값임 이걸 보고 값이 할당 된 적이 없구나 라고 개발자가 간파할 수 있다.
