// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    //this function counts all the vowels in a string
    //regardless of casing or spacing :P

    //a list of vowels in bot lower and upper case forms
    const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    //split the word into characters
    const wordArray = str.split('');
    let vowelCount = 0;
    //loops the word array and adds 1 to count whenever it 
    //finds a vowel.
    for(let i = 0; i < wordArray.length; i++){
        if(vowels.includes(wordArray[i])){
            vowelCount++;
        }
    }
    //return the final vowel count
    return vowelCount;
};