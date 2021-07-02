// Write code to return the largest number in the given array

var maxNum = function (arr) {
  let max = 0;

  arr.forEach((e) => {
    if (e > max) {
      max = e;
    }
  });
  return max;
};
