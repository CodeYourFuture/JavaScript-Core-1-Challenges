// Write code to return the largest number in the given array

var maxNum = function(arr) {
    //declare the largest number to start smaller than
    //whatever number is first so that it will log fairly.
    let largestNum = arr[0] - 1;
    //loop the array all the way through and log the index
    //if it is larger than the already logged index.
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largestNum){
            largestNum = arr[i]
        }
    }
    //return the largest number.
    return largestNum
};