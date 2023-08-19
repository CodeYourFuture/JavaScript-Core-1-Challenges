function calculateLargestNumber(arrayOfNumbers) {
  // Write your code in here

  return Math.max.apply(null, arrayOfNumbers);
}

arrayBig = [
  6845, 16931, 15934, 16471, 24870, 30977, 2567, 24363, 27133, 4957, 5042,
  25848, 30759, 10456, 4995, 7549, 26244, 22082, 10063, 15157, 26518, 5026,
  30531, 1028, 12259, 7519, 7434, 26261, 3310, 12438, 27337, 15367, 16114,
  23693, 9128, 18784, 9261, 10577, 28675, 22525, 16400, 24258, 7195, 19813,
  28964, 1065, 15735, 28651, 1787, 8420, 30197, 11270, 4802, 12222, 28250, 3054,
  27412, 1410, 22017, 28882, 31231, 28971, 19439, 4582, 8835, 13196, 1161, 5256,
  21227, 9927, 23127, 24751, 26030, 10108, 5799, 30447, 22302, 28839, 13317,
  23673, 12485, 21872, 12245, 7406, 15962, 13224, 27060, 9882, 4382, 23122,
  15543, 28963, 6577, 26892, 4081, 15918, 30697, 4163, 120, 19663, 10144,
];

console.log(calculateLargestNumber(arrayBig));

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
