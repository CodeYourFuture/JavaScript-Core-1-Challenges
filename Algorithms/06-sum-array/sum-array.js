// Write code to add all the numbers in `arr` and return the total

var sumArray = function (a) {
  var total = 0;
  for (var i in a) {
    total += a[i];
  }
  return total;
};

var arr = [3, 1, 5, 6];

console.log(sumArray(arr));
