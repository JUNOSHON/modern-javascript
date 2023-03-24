function isFalsy(e) {
  return !e;
}

const wisoft = {
  JUNHO: "juno",
  Jaeyoung: "Jack",
  Seoyun: "chunsik",
};

const a = isFalsy(null) && false;
const b = isFalsy(NaN);
const c = wisoft.hyuna;

console.log(a);
console.log(b);
console.log(c);
