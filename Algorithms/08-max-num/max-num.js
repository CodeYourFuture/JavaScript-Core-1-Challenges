// Write code to return the largest number in the given array

var arr = [3, 1, 17, 5, 6];

var maxNum = function(arr) {
    let biggestNum = 0 ;
    for (let i = 0 ; i<arr.length; i++ ){
       
        if(arr[i] > biggestNum){
            biggestNum = arr[i];
        }
    }
    return  biggestNum;
};
maxNum(arr);
console.log(maxNum(arr));

//************* From here down is just an example

var arr = [3, 1, -17, 5, 6];
var maxNum = function (arr) {
    let biggestNum =arr [0];
    for (const item of arr) {
        if ( item > biggestNum) {
            biggestNum = item;
        }

    }
    return biggestNum;
};
console.log(maxNum);
//the line 31 is not correct