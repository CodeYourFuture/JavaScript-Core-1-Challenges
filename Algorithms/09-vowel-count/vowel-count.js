// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  let strArr = str.toLowerCase().split("");
  let vowels_counter = strArr.filter((letter) =>
    "aeiou".includes(letter)
  ).length;

  return vowels_counter;
};
