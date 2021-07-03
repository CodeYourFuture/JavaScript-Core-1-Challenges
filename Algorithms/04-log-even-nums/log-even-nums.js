// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function (num) {
  let highestNumber = num;
  for (let i = 0; i < highestNumber; i++) {
    remainder = i % 2;

    if (remainder === 0) {
      console.log(i);
    }
  }
};
