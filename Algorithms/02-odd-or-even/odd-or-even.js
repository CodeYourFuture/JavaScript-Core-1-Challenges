// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

var oddOrEven = function(num) {
    if(num % 2) {
        console.log(num + " " + "is even number");
    } else {
        console.log(num + " " + "is odd number");
    }
};
let result = oddOrEven(24);

