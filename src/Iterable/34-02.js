const arr = [1, 2, 3];

console.log(Symbol.iterator in arr);

for (const it of arr) {
  console.log(it);
}

console.log([...arr]);
const [a, ...reset] = arr;
console.log(a, reset);
