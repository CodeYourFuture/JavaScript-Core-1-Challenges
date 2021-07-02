// Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number

var countdown = function (num) {
  let highestNumber = num;
  for (let i = highestNumber; i > 0; i--) {
    console.log(i);
  }
};
