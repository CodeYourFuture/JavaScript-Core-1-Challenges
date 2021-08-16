// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function (num) {
  let count = 0;
  while (num >= count) {
    if (count % 2 === 0) {
      console.log(count);
    }
    count++;
  }
};
