// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
 var c =[];
 if(str.length === 0){
  return 0;
 }
 for (var i=0; i<str.length ; i++){
  if(str[i]=== "a"||str[i]=== "o"||str[i]=== "u"||str[i]=== "w"||str[i]=== "i"|| str[i]=== "e"||str[i]=== "A"||str[i]=== "O"||str[i]=== "U"||str[i]=== "W"||str[i]=== "I"|| str[i]=== "E"){
    c.push(i);
   var p = c;
  

  }
 }
 return p.length;
};
console.log(vowelCount("gone wth"));