// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

var oddOrEven = function (num) {
  let remainder = num % 2;

  if (remainder === 0) {
    return "even";
  } else {
    return "odd";
  }
};

oddOrEven();
