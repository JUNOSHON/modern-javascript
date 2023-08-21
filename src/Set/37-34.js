const map = new Map();

console.log(NaN === NaN);
console.log(0 === -0);

map.set(NaN, "value1").set(NaN, "value2");
console.log(map);
