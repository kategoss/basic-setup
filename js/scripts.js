var quay = "quay";
var ay = "ay";
var pigLatin = [];
var vowelTest = function(word) {
  return (/^[aeiou]$/).test(word);
}
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    $("#message").empty();
    var userInput = $("#userInput").val();
    var arrayWords = userInput.split(" ");
    console.log(arrayWords);

    arrayWords.forEach(function(arrayWord) {
      var test = vowelTest(arrayWord[0]);
      if( test == true)  {
        console.log(test); // need to add "way" at end of word
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
