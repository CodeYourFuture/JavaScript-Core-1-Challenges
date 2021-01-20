function missingNum(arr) {
  // let n = arr.length+1
  // let missingNum = n*(n+1)/2;
  // for (let i = 0; i < arr.length; i++) {
  //   missingNum -= arr[i];
  // }
  //  return missingNum;

  let n = arr.length;
  let x1;
  let x2;
  for (let i = 0; i < n; i++) x1 = x1 ^ arr[i];
  for (let i = 0; i < n + 2; i++) x2 = x2 ^ i;
  return (x1^x2);
}

/**                            */
/**                            */
/** DO NOT EDIT BELOW THIS LINE*/
/**                            */
/**                            */

const util = require("util");

test("Test 1", missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]), 5);
test("Test 2", missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]), 10);
test("Test 3", missingNum([7, 2, 3, 9, 4, 5, 6, 8, 10]), 1);
test("Test 4", missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]), 7);
test("Test 5", missingNum([1, 7, 2, 4, 8, 10, 5, 6, 9]), 3);

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
