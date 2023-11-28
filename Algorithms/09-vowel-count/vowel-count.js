// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  let count = 0;

  for (let char of str) {
    char = char.toLowerCase();
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") count++;
  }

  return count;
};
