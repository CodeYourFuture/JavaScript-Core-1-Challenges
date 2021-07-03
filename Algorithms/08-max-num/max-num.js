// Write code to return the largest number in the given array

let maxNum = function (arr) {
  let largestNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];

    if (number > largestNumber) {
      largestNumber = number;
    }
  }
  return largestNumber;
};
