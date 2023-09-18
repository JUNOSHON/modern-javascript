const arraylike = {
  0:1,
  1:2,
  2:3,
  length:3
};
console.log(Array.isArray(arraylike));
const arr = Array.prototype.slice.call(arraylike)
console.log(Array.isArray(arr));
