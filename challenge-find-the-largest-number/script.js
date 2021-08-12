// declare  a variable called highNum to hold the highest value in the array

function calculateLargestNumber(arrayOfNumbers) {
  let highNum = 0;
  for (num of arrayOfNumbers) {
    if (num > highNum) {
      highNum = num;
    }
  }
  return highNum;
}

//calculateLargestNumber([3134, 5383, 282, 21, 9999]);

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
