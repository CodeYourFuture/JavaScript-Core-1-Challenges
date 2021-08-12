// Write code to return the largest number in the given array
let bigNum = 0;
var maxNum = function (arr) {
  for (num of arr) {
    if (num > bigNum) {
      bigNum = num;
    }
  }
  return bigNum;
};
