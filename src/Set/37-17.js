const set = new Set([1, 2, 3]);

console.log(Symbol.iterator in set);

for (const v of set) {
  console.log(v);
}
