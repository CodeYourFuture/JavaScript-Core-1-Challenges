// Write code to return the largest number in the given array

var maxNum = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < arr[i + 1]) {
            let maxNum = arr[i + 1];
        }
    }
    
};
