const map = new Map();

const lee = {name: "lee"};
const kim = {name: "kim"};

map.set(lee, "developer")
  .set(kim, "designer");

console.log(map.get(lee));
console.log(map.get("key"));
