// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

function logNums(num) {
  numPrint = 0;
  for (i = 1; i <= num; i++) {
    numPrint += i;
  }
  return numPrint;
}

console.log(logNums(2));
