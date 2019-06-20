//Business Logic
var sorry = "I'm sorry, Dave. I'm afraid I can't do that";
function halize(userNum) {

// function that replaces a single number w/ 'Beep!', 'Boop!' & sorry
// returns the replaced value

var numTransform = num => {
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

numbers = []
// Load the `numbers` array with all numbers up to userNum
for (var i = 0; i <= userNum; i++){
    numbers.push(i)
}

// For each number/element in the array, pass it into the `numTransform` function
// `map()` returns new array post `numTransform` function
return numbers.map(i => numTransform(i)).toString()
}

//User Interface
$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
    event.preventDefault();
    var userNum = parseInt($("input#userString").val());
    $(".inputNum").text(userNum);
    result = halize(userNum);
    $(".result").text(result);
});
});
