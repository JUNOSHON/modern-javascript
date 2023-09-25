var prefix = "prop";
var i = 0;
var obj = {};

obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;
console.log(obj);

const prefix2 = "props";
let j = 0;
const obj2 = {
  [`${prefix2} - ${++j}`]: j,
  [`${prefix2} - ${++j}`]: j,
  [`${prefix2} - ${++j}`]: j,
};
console.log(obj2);
