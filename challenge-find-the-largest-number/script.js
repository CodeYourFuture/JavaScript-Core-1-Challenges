// Option A - using .sort()

function calculateLargestNumber(arrayOfNumbers) {
  let sortedArray = arrayOfNumbers.sort();
  return sortedArray[sortedArray.length - 1];
}

// Option B - for loop with if statement [I had some help with this option]

// function calculateLargestNumber(arrayOfNumbers) {
//   let biggestSoFar = arrayOfNumbers[0];
//   for (let i = 1; i < arrayOfNumbers.length; i++) {
//     if (arrayOfNumbers[i] > biggestSoFar) {
//       biggestSoFar = arrayOfNumbers[i];
//     }
//   }
//   return biggestSoFar;
// }

/**                            */
/**                            */
/**                            */
/** DO NOT EDIT BELOW THIS LINE*/
/**                            */
/**                            */
/**                            */
/**                            */

const util = require("util");

console.log("---------------");
let randomList = generateLargeListOfNumbers();
let largestRandom = calculateLargestNumber(generateLargeListOfNumbers());
console.log(
  "Given the array of random numbers that looks like this: " +
    randomList.toString()
);

console.log("");
console.log("You have said the largest number was " + largestRandom);
console.log("Is this right?");
console.log("---------------");

test(["Code works for a small array"], calculateLargestNumber([1, 2, 3]), 3);
test(
  ["Code works for a medium array"],
  calculateLargestNumber([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]),
  3
);
test(
  ["Code works for a negative numbers"],
  calculateLargestNumber([1, -2, -3]),
  1
);

function test(test_name, actual, expected) {
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

function generateLargeListOfNumbers() {
  return Array.from({ length: 100 }, () => Math.floor(Math.random() * 31312));
}
