//Business Logic
function halize(userNum) {
  debugger;
  countTo
  var search = {'M':1000,'CM':900,'D':500,'CD':400,'C':100,'XC':90,'L':50,'XL':40,'X':10,'IX':9,'V':5,'IV':4,'I':1}, roman = '', i;
  for (i in search) {
    while (userNum >= search[i] ) {
    roman += i;
    userNum -= search[i];
  }
}
return roman;
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
