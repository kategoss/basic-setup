var userInput;
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    userInput = $("#userInput").val();
    console.log(userInput);
  });
});
