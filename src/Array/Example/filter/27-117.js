const fruits = ["banana", "apple", "orange", "apple", "orange"];
const count = fruits.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

console.log(count);
