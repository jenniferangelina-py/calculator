var display = "";

var isEqualsClicked = false;

function appendNumber(number) {
  if (!isEqualsClicked) {
    display += number;
    $("#display").text(display);
  } else {
    display = "";
    display += number;
    $("#display").text(display);
    isEqualsClicked = false;
  }
}

function appendDecimalSeparator() {
  if (
    display === ""
    ||
    display.endsWith("÷")
    ||
    display.endsWith("×")
    ||
    display.endsWith("−")
    ||
    display.endsWith("+")
    ||
    display.endsWith("(")
  ) {
    display += "0.";
    $("#display").text(display);
  }
}

function appendOperator(operator) {
  if (display === "") {
    $("#display").text(display);
  } else if (
    display.endsWith("÷")
    ||
    display.endsWith("×")
    ||
    display.endsWith("−")
    ||
    display.endsWith("+")
    ||
    display.endsWith("(")
  ) {
    display = display.slice(0, -1);
    display += operator;
    $("#display").text(display);
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

$("#decimal-separator").click(function(){
  appendDecimalSeparator();
});

$("#division").click(function(){
  appendOperator("÷");
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
  appendOperator("×");
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
  appendOperator("−");
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
  appendOperator("+");
});

function clear() {
  display = "";
  $("#display").text(display);
}

$("#clear").click(function(){
  clear();
});

function equals() {
  if (display.endsWith("÷")
    || display.endsWith("×")
    || display.endsWith("−")
    || display.endsWith("+")) {
    $("#display").text(display);
  } else if (display.includes("÷")
    || display.includes("×")
    || display.includes("−")
    || display.includes("+")
    || display.includes("%")) {
    display = display.replace("÷", "/");
    display = display.replace("×", "*");
    display = display.replace("−", "-");
    display = display.replace("%", "/100");
    display = eval(display);
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

$("#percentage").click(function(){
  appendPercentage();
});

function appendParentheses() {
  if (display === "" 
  || display.endsWith("(")) {
    display += "(";
    $("#display").text(display);
  }
}

$("#parentheses").click(function(){
  appendParentheses();
});

console.log(display);
