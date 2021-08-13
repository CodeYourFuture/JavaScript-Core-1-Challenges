// Write code to return the largest number in the given array
let biggestNum = 0;
var maxNum = function(arr) {
   
    for (i of arr){
        if (i > biggestNum){
            biggestNum = i;
        }
    }
        return biggestNum;
    }
//   return Math.max(...arr); easy way using library


