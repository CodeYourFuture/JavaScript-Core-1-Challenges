// Write code to add all the numbers in `arr` and return the total

let array = [3, 1, 5, 6];
var sumArray = function(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++){
        total += arr[i];

    }
    return(total);
};
sumArray(array);
