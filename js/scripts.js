// business logic
var quay = "quay";
var ay = "ay";
var pigLatin = [];
var vowels = ["a", "e", "i", "o", "u"];
var firstLetterVowelResult;

var ifFirstLetterVowel = function(word) {
  vowels.forEach(function(vowel) {
    if(vowel === word) {
      firstLetterVowelResult = true;
    }
  });
}

// user interface logic
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    // $("#message").empty(); NEED TO FIND A WAY TO CLEAR MESSAGE ON SUBMIT
    var userInput = $("#userInput").val();
    var arrayWords = userInput.split(" ");

    arrayWords.forEach(function(arrayWord) {
      firstLetterVowelResult = undefined;
      ifFirstLetterVowel(arrayWord[0]);
      if( firstLetterVowelResult == true)  {
        console.log(firstLetterVowelResult);
        var vowelAtBegin = arrayWord.concat("way");
        pigLatin.push(vowelAtBegin);
      } else {
        console.log(firstLetterVowelResult);
      }
      if (arrayWord.includes("qu")) {
        if(arrayWord[0] == "q" && arrayWord[1] == "u" && arrayWord !== ""  && arrayWord !== /\W/g ) {
          var slicedWord = arrayWord.slice(2);
          console.log(slicedWord)
          var quAtBegin = slicedWord.concat(quay);
          pigLatin.push(quAtBegin);
        } else {
          var quAtMiddle = arrayWord.concat(ay);
          pigLatin.push(quAtMiddle);
        }
      } else if (arrayWord !== "") {
        var ifNoQu = arrayWord.concat(ay);
        pigLatin.push(ifNoQu);
      }
    });
    var finalPhrase = pigLatin.join(" ");
    $("#message").text(finalPhrase);
  });
});
