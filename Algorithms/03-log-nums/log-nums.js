// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

var logNums = function(num) {
    let count = 1;
    while(num > 0){
        console.log(count);
        num -= 1;
        count += 1;
    }
};