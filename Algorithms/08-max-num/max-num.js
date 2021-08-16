// Write code to return the largest number in the given array

var maxNum = function (arr) {
  let largest = 0;
  arr.forEach((element) => {
    if (element > largest) {
      largest = element;
    }
  });
  return largest;
};
