//Business logic
function eatNum(number) {
  var inputArray = [];
  for (var n = 0; n <= number; n++) {
    var inputArray = n.toString().split('');
    if (n % 3 === 0) {
      inputArray.push("I'm sorry Dave, i can't do that.");
    } else if(inputArray.includes("1")) {
      inputArray.push(" Boop");
    } else if(inputArray.includes("0")) {
      inputArray.push(" Beep");
    } else {
      inputArray.push("Mmm, " + n + (" is a tasty number! Thanks, human. Perhaps I will spare you after all!"));
    }
  }
  return inputArray[inputArray.length-1];
};
// User Logic
$(document).ready(function() {
  $("#user-input-form").submit(function(event) {
    event.preventDefault();
    var userInput =
    $("#user-input").val();

    $('#user-input-form')[0].reset();
    $("#output h2").text(eatNum(userInput));
    $("#output").show();

  });
});
