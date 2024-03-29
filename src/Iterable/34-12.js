const fibonacci = function (max) {
  
  let [pre, cur] = [0, 1];
  
  
  return {
    [Symbol.iterator]() {
      next(){
      
        [pre, cur] = [cur, pre + cur];
        
        return {value: cur, done: cur >= max};
        }
      };
    }
  };
};
for (const num of fibonacci) {
  console.log(num);
}
