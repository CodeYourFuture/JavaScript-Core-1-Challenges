// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {
  let total = 0;
  arr.forEach((element) => {
    total += element;
  });
  return total;
};
