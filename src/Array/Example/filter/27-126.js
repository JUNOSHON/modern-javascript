const products = [
  {id: 1, price: 100},
  {id: 2, price: 200},
  {id: 3, price: 300},
];
const priceSum = products.reduce((acc, cur) => acc + cur.price, 0);
console.log(priceSum);
