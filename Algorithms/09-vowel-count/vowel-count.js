// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    var count = str.match(/[aeiou]/gi); //looks to match all vowels
    return count === null ? 0 : count.length; //if string is empty return 0 else return count
};
