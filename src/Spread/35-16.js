function sum() {
  var args = Array.prototype.slice.call(arguments);
  
  return args.reduce(function (pre, cur) {
    return pre + cur;
    
  }, 0);
}

console.log(sum(1, 2, 3));
