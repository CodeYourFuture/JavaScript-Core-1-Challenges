// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
  let numberOfVowels = 0;
  for (let i = 0; i < str.length; i++) {
    if ("aeiou".indexOf(str[i].toLowerCase()) > -1) {
      numberOfVowels++;
    }
  }
  return numberOfVowels;
  // return str.split("").filter((element) => "aieou".indexOf(element.toLowerCase()) > -1).length;
};
