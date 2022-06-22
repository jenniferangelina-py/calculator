var display = "";

function appendNumber(number) {
  display += number;
  $("#display").text(display);
}

$("#0").click(function(){
  appendNumber(0);
});

$("#1").click(function(){
  appendNumber(1);
});

$("#2").click(function(){
  appendNumber(2);
});

$("#3").click(function(){
  appendNumber(3);
});

$("#4").click(function(){
  appendNumber(4);
});

$("#5").click(function(){
  appendNumber(5);
});

$("#6").click(function(){
  appendNumber(6);
});

$("#7").click(function(){
  appendNumber(7);
});

$("#8").click(function(){
  appendNumber(8);
});

$("#9").click(function(){
  appendNumber(9);
});

function appendDecimalSeparator() {
  if (display === "") {
    display = 0 + ".";
    $("#display").text(display);
  } else {
    display += ".";
    $("#display").text(display);
  }
}

$("#decimal-separator").click(function(){
  appendDecimalSeparator();
});

function appendDivisionOperator() {
  if (display === "") {
    $("#display").text(display);
  } else if (display.endsWith("÷") {
    $("#display").text(display);
  } else {
    display += "÷";
    $("#display").text(display);
  }
}

$("#division").click(function(){
  appendDivisionOperator;
});
