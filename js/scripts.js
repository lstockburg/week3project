//Business logic
function convertNum(numbersArray) {
  var numbersArray = userInput.split("");

    if (numbersArray.match[/0/g]) {
      return ('boop');
    }
    if (numbersArray.match[/1/g]) {
      return ('beep');
    }
};






// User Logic
$(document).ready(function() {
  $("#user-input-form").submit(function(event) {
    event.preventDefault();
    //Grab input from user form, set to variable
    var userInput=
    $("#user-input").val();

    $("#output").empty().append(convertNum());
  });

console.log(numbersArray)
});
