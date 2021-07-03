// Write code to add all the numbers in `arr` and return the total

let sumArray = function (arr) {
  let arrTotal = 0;

  for (let i = 0; i < arr.length; i++) {
    arrTotal += arr[i];
  }

  return arrTotal;
};
