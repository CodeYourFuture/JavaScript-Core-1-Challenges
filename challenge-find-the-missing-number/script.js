/* Explanation
-firstly I create a sortArray function (sort number from ascending) and call it later on (callback function) in the the missingNum function with the sort() method
The reason I have done that were because I was failing in an array whose numbers were stored randomly. eg test 2,4,and 5.
- I created a counter variable that would count for me. And inside the loop 
I am have a if statement ,  that said : if the counter is not equal to the corresponding element(index) in the array
then return the missing Number

*/
function sortArray(a,b){
  return a - b;
}
function missingNum(arr) {
  //Write your code in here. You should return the missing the number below.
   arr.sort(sortArray)
  var counter=0;
  for (let startIndex=0; startIndex < arr.length + 1; startIndex++){
    counter= counter +1;
    if (arr[startIndex] !== counter){
      return counter;
    }
      
    }
  }
  

const { count } = require("console");
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
