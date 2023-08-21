const lee = {name: "lee"};
const kim = {name: "kim"};

const map = new Map([[lee, "developer"], [kim, "designer"]]);

console.log(Symbol.iterator in map);

for (const entry of map) {
  console.log(entry);
}

console.log([...map]);
