// Write code to return the the number of vowels in `str`

let vowelCount = function (str) {
  let characters = [];
  let numberOfVowels = 0;
  let formatString = str.toLowerCase();

  characters = formatString.split("");

  for (i = 0; i < characters.length; i++) {
    let character = characters[i];
    if (
      character === "a" ||
      character === "e" ||
      character === "i" ||
      character === "o" ||
      character === "u"
    ) {
      numberOfVowels++;
    }
  }
  return numberOfVowels;
};
