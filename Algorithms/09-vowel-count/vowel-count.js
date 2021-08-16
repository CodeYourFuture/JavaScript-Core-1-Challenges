// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  // count is equal to an array with elements equal to the vowels in str
  let count = str.match(/[aeiou]/gi);
  // return the length of the array if it isn't empty, so empty strings return 0
  return count === null ? 0 : count.length;
};
