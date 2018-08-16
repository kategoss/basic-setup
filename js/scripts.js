// business logic
var quay = "quay";
var ay = "ay";
var vowels = ["a", "e", "i", "o", "u"];
var firstLetterVowelResult;

var ifFirstLetterVowel = function(firstLetter) { // to check is first letter of word(s) is a vowel
  vowels.forEach(function(vowel) {
    if(vowel === firstLetter) {
      firstLetterVowelResult = true;
    }
  });
}
var ifBeginOfWordIsConsonant = function(word) { // to check if first letter or consecutive letters are consonants
  for(var i = 0; i <= vowels.length; i++) {
    var vowel = vowels[i];
    for(var j = 0; j <= word.length; j++) {
      var letter = word[j];
      if(letter === vowel) {
        var vowelIndex = word.indexOf(word[j]);
        var startOfNewWord = word.substring(vowelIndex);
        var slicedConsonent = word.substring(0, vowelIndex);
        return startOfNewWord.concat(slicedConsonent + "ay");
      }
    }
  }
}

// user interface logic
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    $("#message").html("");
    var userInput = $("#userInput").val();
    var arrayWords = userInput.split(" ");
    var pigLatin = [];
    arrayWords.forEach(function(arrayWord) {
      firstLetterVowelResult = undefined;
      ifFirstLetterVowel(arrayWord[0]);

      if( firstLetterVowelResult == true)  {
        var vowelAtBegin = arrayWord.concat("way");
        pigLatin.push(vowelAtBegin);
      } else if (arrayWord.includes("qu")) {
        if(arrayWord[0] == "q" && arrayWord[1] == "u" && arrayWord !== ""  && arrayWord !== "") {
          var slicedWord = arrayWord.slice(2);
          var quAtBegin = slicedWord.concat(quay);
          pigLatin.push(quAtBegin);
        } else {
          var quAtMiddle = arrayWord.concat(ay);
          pigLatin.push(quAtMiddle);
        }
      } else if (arrayWord !== "") {
        var newWord = ifBeginOfWordIsConsonant(arrayWord);
        pigLatin.push(newWord);
      }
    });
    finalPhrase = pigLatin.join(" ");
    $("#userInput").val(" ");
    $("#message").html(finalPhrase);
  });
});
