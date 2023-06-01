const obj = {};
const parent = {x:1};

console.log(obj);

obj.__proto__ = parent;
console.log(obj.x);