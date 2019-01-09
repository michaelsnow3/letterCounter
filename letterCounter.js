function countLetters (str) {
  var letterObj = {};
  var str = str.split(" ").join();
  for (var i = 0; i < str.length; i++){
    if(letterObj[str[i]]){
      letterObj[str[i]] += 1;
    } else {
      letterObj[str[i]] = 1;
    }
  }
  return letterObj;
}
console.log(countLetters("lighthouse in the house"));