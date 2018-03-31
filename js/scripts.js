//Business logic
function eatNum(ateNum) {
  var yum = ['1', '0'];
  var ateNum = ""
  if (ateNum === yum('1')) {
    return()

  }

  return();
}
// User Logic
$(document).ready(function() {
  $("#user-input-form").submit(function(event) {
    event.preventDefault();
    var userInput=
    $("#user-input").val();

    var ateNum =
    userInput.split('');
    $("#output").empty().text("#output");
  });
});
