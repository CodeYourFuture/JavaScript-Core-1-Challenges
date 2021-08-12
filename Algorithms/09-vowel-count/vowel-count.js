// Write code to return the the number of vowels in `str`

let vowelList = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var vowelCount = function (str) {
  let numOfVowels = 0;
  for (vowel of vowelList) {
    for (letter of str) {
      if (letter === vowel) {
        numOfVowels++;
      }
    }
  }
  return numOfVowels;
};
