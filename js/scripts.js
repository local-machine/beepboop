//Business Logic

// function halize(userNum) {
//   var numArray = [];
//   for (var i = 0; i <= userNum; i++) {
//     numArray.push(i)
//     var newString = numArray.toString()
//     var newString = newString.split("");
//     console.log(newString);
//     if (newString.includes("1")) {
//       var outputStr = newString.replace("1", "Beep!");
//       console.log(outputStr);
//     } else {
//
//     }
//   }
// }

var sorry = "I'm sorry, Dave. I'm afraid I can't do that.";

var halize = num => {
  num = num.toString();
  if (num.includes('1')) {
    if (num.length > 1) {
      return sorry;
    } else {
      return 'Beep!';
    }
  } else if (num.includes('2')){
    if (num.length > 1) {
      return sorry;
    } else {
      return 'Boop!';
    }
  } else if (num.includes('3')) {
    return sorry;
  } else {
    return num;
  }
};

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
