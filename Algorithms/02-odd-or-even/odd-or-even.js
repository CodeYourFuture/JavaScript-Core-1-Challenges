// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

var oddOrEven = function (num) {
  let remNum = num % 2;

  if (remNum == 0) {
    return "even";
  } else {
    return "odd";
  }
};

// * for test puprpose
console.log(oddOrEven(20));
console.log(oddOrEven(15));
