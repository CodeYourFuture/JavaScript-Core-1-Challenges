// Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number

var countdown = function(num) {
    return Math.floor(Math.random() * (num -1));
};
let result = countdown(10);
console.log(result);
