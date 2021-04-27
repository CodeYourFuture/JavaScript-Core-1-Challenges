function removeMiddleItem(arr) {
    let index = 0;
    if (arr.length % 2 === 1) {
        index = Math.floor(arr.length / 2);
        arr.splice(index, 1);
    } else {
        index = (arr.length / 2) - 1;
        arr.splice(index, 2);
    }
    return arr;
  }
  
  /**                            */
  /**                            */
  /** DO NOT EDIT BELOW THIS LINE*/
  /**                            */
  /**                            */
  
  const util = require("util");
  
  test("Test 1", removeMiddleItem([1, 2, 3, 4, 5]), [1, 2, 4, 5]);
  test("Test 2", removeMiddleItem([7, 2, 3, 6, 5, 9, 1, 4, 8]), [7, 2, 3, 6, 9, 1, 4, 8]);
  test("Test 3", removeMiddleItem([14, 2, 65, 43, 2, 6, 89, 4]), [14, 2, 65, 6, 89, 4]);
  test("Test 4", removeMiddleItem([54, 23, 6]), [54, 6]);
  test("Test 5", removeMiddleItem([1, 7, 2, 4, 8, 10, 5, 6, 9, 12]), [1, 7, 2, 4, 5, 6, 9, 12]);
  
  function test(test_name, actual, expected) {
    let status;
    if (JSON.stringify(actual) == JSON.stringify(expected)) {
      status = "PASSED";
    } else {
      status = `FAILED: expected: ${util.inspect(
        expected
      )} but your function returned: ${util.inspect(actual)}`;
    }
  
    console.log(`${test_name}: ${status}`);
  }