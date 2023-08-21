const lee = {name: "lee"};
const kim = {name: " kim"};

const map = new Map([[lee, "developer"], [kim, "designer"]]);
map.forEach((v, k, map) => console.log(v, k, map));
