class DirectAddressTable {
  constructor() {
    this.table = [];
  }

  setValue(value = -1) {
    this.table[value] = value;
  }

  getValue(value = -1) {
    return this.table[value];
  }

  getTable() {
    return this.table;
  }
}

const HashTable = new DirectAddressTable();

HashTable.setValue(3);
HashTable.setValue(10);
HashTable.setValue(90);

console.log(HashTable.getTable());
// [ <3 empty items>, 3, <6 empty items>, 10, <79 empty items>, 90 ]

console.log(HashTable.getValue(3));
console.log(HashTable.getValue(4)); // undefined

function hashFunction(key) {
  return key % 10;
}

console.log(hashFunction(102943)); // 3
console.log(hashFunction(12)); // 2
console.log(hashFunction(424687)); // 7
console.log(hashFunction(3597)); // 7

const Tablesize = 5;

const Table = new Array(Tablesize);

function hashFunction2(key) {
  return key % Tablesize;
}

Table[hashFunction2(19398)] = 19398;
Table[hashFunction2(1234)] = 1234;
Table[hashFunction2(767)] = 767;

console.log(Table);
// [ <2 empty items>, 767, 19398, 1234 ]

console.log(hashFunction2(6)); // 1
console.log(hashFunction2(1991)); // 1
