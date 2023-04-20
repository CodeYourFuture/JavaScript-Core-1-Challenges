// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    return arr.reduce((prev, cur) => prev + cur,0)
};
