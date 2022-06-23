var display = "";

function appendNumber(number) {
  if (isEqualsClicked === false) {
    display += number;
    $("#display").text(display);
  } else {
    display = "";
    display += number;
    $("#display").text(display);
  }
}

$("#0").click(function(){
  appendNumber("0");
});

$("#1").click(function(){
  appendNumber("1");
});

$("#2").click(function(){
  appendNumber("2");
});

$("#3").click(function(){
  appendNumber("3");
});

$("#4").click(function(){
  appendNumber("4");
});

$("#5").click(function(){
  appendNumber("5");
});

$("#6").click(function(){
  appendNumber("6");
});

$("#7").click(function(){
  appendNumber("7");
});

$("#8").click(function(){
  appendNumber("8");
});

$("#9").click(function(){
  appendNumber("9");
});

function appendDecimalSeparator() {
  if (display === "") {
    display = "0.";
    $("#display").text(display);
  } else if (display.endsWith("÷")) {
    display += "0.";
    $("#display").text(display);
  } else if (display.endsWith("×")) {
    display += "0.";
    $("#display").text(display);
  } else if (display.endsWith("−")) {
    display += "0.";
    $("#display").text(display);
  } else if (display.endsWith("+")) {
    display += "0.";
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
  } else if (display.endsWith("÷")) {
    $("#display").text(display);
  } else if (display.endsWith("×")) {
    display = display.slice(0, -1);
    display += "÷";
    $("#display").text(display);
  } else if (display.endsWith("−")) {
    display = display.slice(0, -1);
    display += "÷";
    $("#display").text(display);
  } else if (display.endsWith("+")) {
    display = display.slice(0, -1);
    display += "÷";
    $("#display").text(display);
  } else if (display.endsWith("(")) {
    $("#display").text(display);
  } else {
    display += "÷";
    $("#display").text(display);
  }
}

$("#division").click(function(){
  appendDivisionOperator();
});

function appendMultiplicationOperator() {
  if (display === "") {
    $("#display").text(display);
  } else if (display.endsWith("÷")) {
    display = display.slice(0, -1);
    display += "×";
    $("#display").text(display);
  } else if (display.endsWith("×")) {
    $("#display").text(display);
  } else if (display.endsWith("−")) {
    display = display.slice(0, -1);
    display += "×";
    $("#display").text(display);
  } else if (display.endsWith("+")) {
    display = display.slice(0, -1);
    display += "×";
    $("#display").text(display);
  } else if (display.endsWith("(")) {
    $("#display").text(display);
  } else {
    display += "×";
    $("#display").text(display);
  }
}

$("#multiplication").click(function(){
  appendMultiplicationOperator();
});

function appendSubtractionOperator() {
  if (display === "") {
    $("#display").text(display);
  } else if (display.endsWith("÷")) {
    display = display.slice(0, -1);
    display += "−";
    $("#display").text(display);
  } else if (display.endsWith("×")) {
    display = display.slice(0, -1);
    display += "−";
    $("#display").text(display);
  } else if (display.endsWith("−")) {
    $("#display").text(display);
  } else if (display.endsWith("+")) {
    display = display.slice(0, -1);
    display += "−";
    $("#display").text(display);
  } else if (display.endsWith("%")) {
    $("#display").text(display);
  } else {
    display += "−";
    $("#display").text(display);
  }
}

$("#subtraction").click(function(){
  appendSubtractionOperator();
});

function appendAdditionOperator() {
  if (display === "") {
    $("#display").text(display);
  } else if (display.endsWith("÷")) {
    display = display.slice(0, -1);
    display += "+";
    $("#display").text(display);
  } else if (display.endsWith("×")) {
    display = display.slice(0, -1);
    display += "+";
    $("#display").text(display);
  } else if (display.endsWith("−")) {
    display = display.slice(0, -1);
    display += "+";
    $("#display").text(display);
  } else if (display.endsWith("+")) {
    $("#display").text(display);
  } else {
    display += "+";
    $("#display").text(display);
  }
}

$("#addition").click(function(){
  appendAdditionOperator();
});

function clear() {
  display = "";
  $("#display").text(display);
}

$("#clear").click(function(){
  clear();
});

var isEqualsClicked = false;

function equals() {
  if (display.endsWith("÷")
    || display.endsWith("×")
    || display.endsWith("−")
    || display.endsWith("+")) {
    $("#display").text(display);
  } else {
    isEqualsClicked = true;
    display = display.replace("÷", "/");
    display = display.replace("×", "*");
    display = display.replace("−", "-");
    result = eval(display);
    display = result;
    $("#display").text(display);
    display = String(display);
  }
}

$("#equals").click(function(){
  equals();
});

function appendPercentage() {
  if (display === "") {
    $("#display").text(display);
  } else if (display.endsWith("÷")) {
    $("#display").text(display);
  } else if (display.endsWith("×")) {
    $("#display").text(display);
  } else if (display.endsWith("−")) {
    $("#display").text(display);
  } else if (display.endsWith("+")) {
    $("#display").text(display);
  } else if (display.endsWith("(")) {
    $("#display").text(display);
  } else {
    display += "%";
    $("#display").text(display);
  }
}

$("percentage").click(function(){
  appendPercentage();
});

function appendParentheses() {
  if (display === "" 
  || display.endsWith("(")) {
    display += "(";
    $("#display").text(display);
}

$("parentheses").click(function(){
  appendParentheses();
});
