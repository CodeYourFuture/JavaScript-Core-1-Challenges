// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    let sumArray = 0;
    for (let index = 0; index<arr.length; index++){
       sumArray = sumArray + arr[index];
    }
    return sumArray;
};
