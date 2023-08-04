const arr = [];
console.time("Array performance test");

for (let i = 0; i < 1000000; i++) {
  arr[i] = i;
}
console.timeEnd("array perfomance test");
const obj = {};
console.time("객체 테스트");
for (let i = 0; i < 1000000; i++) {
  obj[i] = i
}
console.timeEnd('테스트')
