// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let letter of str) {
    if (vowels.includes(letter.toLowerCase())) {
      count++;
    }
  }
    return count;
}
