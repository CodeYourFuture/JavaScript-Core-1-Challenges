// Write code to add all the numbers in `arr` and return the total
let total = 0;
var sumArray = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
};
let result = sumArray(arr);
console.log(result);

