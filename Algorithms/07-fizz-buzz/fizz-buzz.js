// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function (arr) {
  arr.forEach((element) => {
    const divisibleBy3 = element % 3 === 0;
    const divisibleBy5 = element % 5 === 0;

    divisibleBy3 && divisibleBy5
      ? console.log("Fizz Buzz")
      : divisibleBy3
      ? console.log("Fizz")
      : divisibleBy5
      ? console.log("Buzz")
      : console.log(element);
  });
};
