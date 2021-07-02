// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

let fizzBuzz = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    let fizz = arr[i] % 3;
    let buzz = arr[i] % 5;

    if (fizz == 0 && buzz == 0) {
      console.log("Fizz Buzz");
    } else if (fizz == 0) {
      console.log("Fizz");
    } else if (buzz == 0) {
      console.log("Buzz");
    } else {
      console.log(number);
    }
  }
};
