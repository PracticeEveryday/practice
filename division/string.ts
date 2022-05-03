// string Type

// string은 immutable하다!! 변경 불가능 하다!!
// "", '', ``으로 감싸진 아이들은 다 string!!

// C같은 언어와 다르게 JavaScript 문자열은 원시 타입이며 변경 불가능하다.
var str = "Hello";
str = "world";

//첫번째 구문이 실행되면 메모리에 문자열 'Hello'가 생성되고 식별자 str은 메모리에 생성된 문자열 'Hello'의 메모리 주소를 가리킨다.
// 그리고 두번째 구문이 실행되면 이전에 생성된 문자열 'Hello'을 수정하는 것이 아니라 새로운 문자열 'world'를 메모리에 생성하고 식별자 str은 이것을 가리킨다.
//이때 문자열 'Hello'와 'world'는 모두 메모리에 존재하고 있다.변수 str은 문자열 'Hello'를 가리키고 있다가 문자열 'world'를 가리키도록 변경되었을 뿐이다.

// 문자열은 유사 배열이다.
for (let i: number = 0; i < str.length; i++) {
  console.log(str[i]);
}

// 문자열을 변경 할 수 없다.
// str[0] = "S"; // Error.message : 'String' 형식의 인덱스 시그니처는 읽기만 허용됩니다.

// but 문자열 재할당은 가능하다.
// -> 기존 문자열을 변경하지 않고 새로운 문자열을 할당하는 것
// 다른 메모리에 새롭게 문자열을 생성하고 str이 이것을 가리키는 것
// str이 다른 곳을 계속 가리키는 것이다!!

str = "string";
console.log(str);

str = "String";
console.log(str);

str += " test";
console.log(str);

str = str.substring(0, 3);
console.log(str);

str = str.toUpperCase();
console.log(str);
