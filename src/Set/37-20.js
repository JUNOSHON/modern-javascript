Set.prototype.union = function (set) {
  const result = new Set(this);
  
  for (const v of set) {
    result.add(v);
  }
  
  return result;
};
const seta = new Set([1, 2, 3, 4]);
const setb = new Set([2, 4]);

console.log(seta.union(setb));
console.log(setb.union(seta));
