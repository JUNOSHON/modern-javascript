Set.prototype.difference = function (set) {
  const result = new Set(this);
  
  for (const v of set) {
    result.delete(v);
  }
  
  return result;
};

const seta = new Set([1, 2, 3, 4]);
const setb = new Set([2, 4]);

console.log(seta.difference(setb));
console.log(setb.difference(seta));
