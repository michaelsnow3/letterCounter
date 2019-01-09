function countLetters (str) {
  var letterObj = {};
  var str = str.split(" ").join();
  for (var i = 0; i < str.length; i++){
    if(letterObj[str[i]]){
      letterObj[str[i]].count += 1;
      letterObj[str[i]].indices.push(i);
    } else {
      var addLetter = {
        count: 1,
        indices: [i]
      }
      letterObj[str[i]] = addLetter;
    }
  }
  return letterObj;
}
console.log(countLetters("lighthouse in the house"));