// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function (a) {
  for (var i in a) {
    if (a[i] % 3 === 0 && a[i] % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (a[i] % 3 === 0) {
      console.log("Fizz");
    } else if (a[i] % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(a[i]);
    }
  }
};

var arr = [13, 14, 15, 16, 17, 18, 19, 20];

console.log(fizzBuzz(arr));
