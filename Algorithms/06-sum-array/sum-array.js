// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    //while loop version:
    // let count = 0;
    // let total = 0;
    // while(count < arr.length){
    //     total += arr[count];
    //     count++;
    // }
    // return total;

    //for loop version (better)
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
};
