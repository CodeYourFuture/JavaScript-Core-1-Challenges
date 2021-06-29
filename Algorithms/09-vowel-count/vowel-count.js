// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length; //return (str.match(/[aeiou]/gi) || []).length;
};

//! other tries
/*let strVowelNum = 0;
  for (let i = 0; i <= str.length; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "u"
    ) {
      strVowelNum += 1;
    }
  }
  return vowelsCount;*/
