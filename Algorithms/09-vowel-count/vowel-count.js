// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    let count = 0;
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for(let i = 0; i < str.length; i++){
        if(vowels.indexOf(str[i]) !== -1){
            count ++;
        }
    }
    return count;
};
