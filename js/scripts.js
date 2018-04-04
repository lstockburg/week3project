//Business logic
function eatNum(number) {
  var inputArray = [];
  for (var n = 0; n <= number; n++) {
    var inputArray = n.toString().split('');
    if (n % 3 === 0) {
      inputArray.push("I'm sorry Dave");
    } else if(inputArray.includes("1")) {
      inputArray.push(" Boop");
    } else if(inputArray.includes("0")) {
      inputArray.push(" Beep");
    } else {
      inputArray.push(" " + n);
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

    $("#output h2").text(eatNum(userInput));
    $("#output").show();

  });
});
