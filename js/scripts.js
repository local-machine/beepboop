//Business Logic
var
function halize(userNum) {
  debugger;

  var search = [], roman = '', i;
  for (i in search) {
    while (userNum >= search[i] ) {
    hal += i;
    userNum -= search[i];
  }
}
return hal;
}




//UI
$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
    event.preventDefault();
    var userNum = parseInt($("input#userString").val());
    $(".inputNum").text(userNum);
    result = halize(userNum);
    $(".result").text(result);
});
});
