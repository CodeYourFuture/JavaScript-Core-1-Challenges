// Write code to return the largest number in the given array

var maxNum = function (arr) {
  let largeNum = Math.max(...arr);
  return largeNum;
};

//* for test puropose
console.log(maxNum([2, 3, -2, 99, 100, 4322, 321]));
