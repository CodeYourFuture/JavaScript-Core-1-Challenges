// Write code to return the largest number in the given array

var maxNum = function(arr) {
 var c = 0;
 for (var i=0; i<arr.length ; i++){
  if(c < arr[i]){
   c = arr[i];

  }
 
 }
 return c
};
[100,50,70,200,10]