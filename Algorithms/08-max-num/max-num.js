// Write code to return the largest number in the given array

var maxNum = function (a) {
  return Math.max.apply(null, a);
};

var arr = [3, 1, 17, 50, 6];

console.log(maxNum(arr));
