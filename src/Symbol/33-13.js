const obj = {
  [Symbol('mysymbol')]:1
};

for(const key in obj){
  console.log(key);
}

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyDescriptor(obj));
