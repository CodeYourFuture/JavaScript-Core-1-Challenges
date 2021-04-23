// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function (num) {
  let n = Math.floor(Math.random() * num);
  if(n % 2 === 0) {
      return n;
  }
};
let result = logEvenNums(100);
console.log(result);
