const lee = {name: "lee"};
const kim = {name: "kim"};

const map = new Map([[lee, "developer"], [kim, "designer"]]);

for (const key of map.keys()) {
  console.log(key);
}
for (const v of map.values()) {
  console.log(v);
}
for (const entry of map.entries()) {
  console.log(entry);
}
