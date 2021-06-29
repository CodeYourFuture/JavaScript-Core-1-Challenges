// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {
  let totall = arr.reduce((a, b) => a + b, 0);
  return totall;
};

sumArray([4, 8, 15, 16, 23, 42]);

// ! Another Solution
/*
var sumArray = function (arr) {
  console.log(arr.reduce((a, b) => a + b, 0));
};

sumArray([1, 2, 3, 4]);
*/
