// Write code to return the largest number in the given array

var array = [3, 1, 17, 5, 6];

var maxNum = function(arr) {
    let biggestNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > biggestNumber) {
            biggestNumber = arr[i];
        }
    }
    return biggestNumber;
};

console.log (maxNum(array));

var maxNumForOfLoop = function(arr) {
    let biggestNumber = arr[0];
    for (const element of arr) {
        if (element > biggestNumber)  {
            biggestNumber = element;
        }
    }
    return biggestNumber;
}

console.log (maxNumForOfLoop(array));

