var sentence = prompt("Write a sentence here");

var firstlast = function(_sentence) {
  return _sentence.charAt(0) + _sentence.charAt((_sentence.length - 1));
};

// var firstlast = sentence.charAt(0);
console.log(firstlast(sentence));

alert(firstlast(sentence));
