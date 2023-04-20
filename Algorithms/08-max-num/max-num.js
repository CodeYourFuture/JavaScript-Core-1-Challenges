// Write code to return the largest number in the given array

var maxNum = function(arr) {
     return arr.sort((a,b) => b - a)[0];
};
