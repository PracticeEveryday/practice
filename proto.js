const protoA = {
  findProto: () => {
    console.log(protoA.__proto__);
  },
  name: "Prototype of a",
};

// 객체 a 생성
const a = new Object({
  findProto: () => {
    console.log(a.__proto__);
  },
});

// a 는 빈 배열
console.log(a);
{
}
// a의 프로토는 Javascript의 원형 객체
// 기본 Javascript에서 제공하는 Object prototype을 __proto__로 가지고 태어남
console.log("원형 객체 : ", a.__proto__); // [Object:null prototype] {}

// a에 __proto__에 원형값 대입
a.__proto__ = protoA;
console.log("a의 프로토타입는 protoA : ", a.__proto__); // protoA가 prototype  {findProto: [Function:findProto], name: 'Prototype of a'}

// a의 name을 찾아가 보면 내 원형에 name이 붙어 있으니 값이 나옴!!
console.log(a.name); // Prototype of a

// 원형 Object Prototype
a.findProto(); // protoA가 prototype  {findProto: [Function:findProto], name: 'Prototype of a'}
