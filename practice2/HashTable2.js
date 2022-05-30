const TableSize = 23; // 테이블 사이즈가 소수여야 효과가 좋다

const HashTable = [];

const getSaveHash = (value) => value % TableSize;

// 스템 해시에 사용되는 수는 테이블 사이즈보다 약간 작은 소수를 사용한다.
const getStepHash = (value) => 17 - (value % 17);

const setValue = (value) => {
  let index = getSaveHash(value);
  let targetValue = HashTable[index];

  while (true) {
    if (!targetValue) {
      HashTable[index] = value;
      console.log(`${index}번 인덱스에 ${value} 저장`);
      return;
    } else if (HashTable.length >= TableSize) {
      console.log("테이블 크기를 넘어섭니다.");
      return;
    } else {
      console.log(`${index}번 인덱스에 ${value} 저장 실패 충돌 발생`);
      index += getStepHash(value);
      index = index > TableSize ? index - TableSize : index;
      targetValue = HashTable[index];
    }
  }
};

setValue(1991);
setValue(6);
setValue(13);
setValue(21);
console.log(HashTable);
// [<6 empty items>, 6, <6 empty items>, 1991, <3 empty items>, 13, <3 empty items>, 21]
