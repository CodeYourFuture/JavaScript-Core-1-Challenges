// Write code to return the the number of vowels in `str`

const vowels =["a", "e", "i", "o", "u"];
const strings = "hello";
var vowelCount = function(str) {
    let count= 0
for (let i = 0; i<=str.length; i++){
if (vowels.includes(str[i])){
    count++;
    }
}

return count;
};
console.log(vowelCount("hello"))

//******************bellow here 
//there is another example to do 
//this, 

string = "alphabet"
const vowels = ["a", "e", "i", "o", "u"];

var vowelCount =function (str){
    let stringVowels =[];
    for (let i = 0; i < str.length; i++){
        if (str includes(vowels[i])){
            stringVowels.push(vowels[i])
        }
    }
return stringVowels.length
};
console.log (vowelCount(string));