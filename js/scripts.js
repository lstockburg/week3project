//Business logic
function eatNum(number) {
  var numArray = [];
  for (var n = 0; n <= number; n++) {
    var numArray = n.toString().split('');
    if (n % 3 === 0) {
      numArray.push("I'm sorry Dave");
    } else if(numArray.includes("1")) {
      numArray.push(" Boop");
    } else if(numArray.includes("0")) {
      numArray.push(" Beep");
    } else {
      numArray.push(" " + n);
    }
  }
  alert(numArray)
  return numArray;
};
// User Logic
$(document).ready(function() {
  $("#user-input-form").submit(function(event) {
    event.preventDefault();
    var userInput =
    $("#user-input").val();

    $("#output h2").text(eatNum(userInput));
    $("#output").show();

    debugger
  });
});
