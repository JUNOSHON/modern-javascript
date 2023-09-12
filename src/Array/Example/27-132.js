const users = [
  {id: 1, name: "Lee"},
  {id: 2, name: "kim"},
  {id: 3, name: "park"},
  {id: 4, name: "chil"},
];
console.log(users.findIndex(user => user.id === 2));
console.log(users.findIndex(user => user.name === "park"));

function predicate(key, value) {
  return item => item[key] === value;
}

console.log(users.findIndex(predicate('id',2)));
