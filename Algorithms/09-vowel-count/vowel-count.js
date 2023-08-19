// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  let vowels = str.match(/[aeiou]/gi);
  return vowels === null ? 0 : vowels.length;
};

let testStr = " a.xaaaaze,.iou - _";

console.log(vowelCount(testStr));
