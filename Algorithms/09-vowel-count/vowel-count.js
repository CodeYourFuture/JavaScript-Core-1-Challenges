// Write code to return the the number of vowels in `str`

const vowelsArr = ["a", "e", "i", "u", "o"];
const strings = "hello";

var vowelCounts = function (str) {
  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    if (vowelsArr.includes(str[i])) {
      count++;
    }
  }
  return count;
};
console.log(vowelCounts("hello"));

/////////////////////////////////////////////////////////////

// different solution (above method is easier)

string = "alphabet"
const vowels = ["a", "e", "i", "o", "u"];

var vowelCount = function(str) {
    let stringVowels = [];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            stringVowels.push(vowels[i])
        }
    }
    return stringVowels.length;
};
console.log(vowelCount(string));
