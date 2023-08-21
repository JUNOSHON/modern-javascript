Set.prototype.isSuperset = function (subset) {
  for (const v of subset) {
    if (!this.has(v)) return false;
  }
  
  return true;
};

const seta = new Set([1, 2, 3, 4]);
const setb = new Set([2, 4]);

console.log(seta.isSuperset(setb));
