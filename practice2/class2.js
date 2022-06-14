// class
class Character {
  name = "teo.yu"
  #hp = 300
  #mp = 500

  attck() 
  useSkill() 
  moveTo(toX, toY) 
}

// object
var character = new Character();
character.name = "테오" // public한 필드는 외부에서 수정이 가능한 잠재적 위험이 있다!

// private을 이용하면 mp를 외부에서 함부로(?) 수정할 수 없게 됩니다!
character.mp = 3000 // Error TS18013: Property '#mp' is not accessible outside class 'Human' because it has a private identifier.