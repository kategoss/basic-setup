var quay = "quay";
var ay = "ay";
var pigLatin = [];

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    $("#message").empty();
    var userInput = $("#userInput").val();
    var arrayWords = userInput.split(" ");
    console.log(arrayWords);

    arrayWords.forEach(function(arrayWord) {
      // if (arrayWord !== (/[\W])/g) {
      //   return = false;
      // }
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
