// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function(num) {
    let i = 0;
    while (i <= num) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i += 1;
    }
};

logEvenNums(7);

var logEvenNumsForLoop = function(num) {
    for (i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }  
    };
}
logEvenNumsForLoop(7);

var logEvenNumsShortCut = function (num) {
  for (i = 0; i <= num; i += 2) {
    console.log(i);
  }
};
logEvenNumsShortCut(7);