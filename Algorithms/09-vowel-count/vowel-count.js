// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    var vowelCount = 0
    const vowels = ['a','e','i','o','u','I','A','E','O','U']
    for (let char of str){
        if (vowels.includes(char)){
            vowelCount++
        }
    }
    return vowelCount;
};
