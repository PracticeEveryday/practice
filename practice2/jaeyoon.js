a = 0;
console.time(" ");
for (i = 0; i < 100; i++) {
  a = a + i;
}
console.timeEnd(" ");
console.log(a);

b = 0;
console.time(" ");
for (i = 0; i < 100; i++) {
  b = b + i;
}
console.timeEnd(" ");
console.log(a);
