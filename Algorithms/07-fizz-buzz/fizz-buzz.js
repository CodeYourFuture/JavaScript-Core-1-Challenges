// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function(arr) {
    //loop array
    for(let i = 0; i < arr.length; i++){
        //check if it is evenly divisible by both
        //this must be called first as it will print
        //the first successful if/else
        if((arr[i] % 3 === 0) && (arr[i] % 5 === 0)){
            console.log("Fizz Buzz");
        }
        //check if it is evenly divisible by 3
        else if (arr[i] % 3 === 0){
            console.log("Fizz");
        }
        //check if it is evenly divisible by 5
        else if(arr[i] % 5 === 0){
            console.log("Buzz");
        }
        //if none of the above log the number
        else{
            console.log(arr[i]);
        } 
    }
};
var arr = [13, 14, 15, 16, 17, 18, 19, 20];
fizzBuzz(arr);