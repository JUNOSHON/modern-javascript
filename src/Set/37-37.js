const lee = {name: "lee"};
const kim = {name: "kim"};

const map = new Map([[lee, "developer"], [kim, "designer"]]);

console.log(map.has(lee));
console.log(map.has("key"));

// map.delete(lee);
// console.log(map);

map.clear();
console.log();
