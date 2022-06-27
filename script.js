var display = "";

var isEqualsClicked = false;

var numbers = /\d$/;

function clear() {
  display = "";
  $("#display").text(display);
}

function appendParentheses() {
  if (display === "" 
  || display.endsWith("(")) {
    display += "(";
    $("#display").text(display);
  }
}

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
  if (
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
    $("#display").add("p");
    $("p").text(display).css("color", "green");
  } else {
    display += operator;
    $("#display").add("p");
    $("p").text(display).css("color", "green");
  }
}

$("#clear").click(function(){
  clear();
});

$("#percentage").click(function(){
  appendPercentage();
});


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

$("#multiplication").click(function(){
  appendOperator("×");
});

$("#subtraction").click(function(){
  appendOperator("−");
});

$("#addition").click(function(){
  appendOperator("+");
});

$("#parentheses").click(function(){
  appendParentheses();
});

$("#equals").click(function(){
  equals();
});

function equals() {
  if (
    display.endsWith("÷")
    || 
    display.endsWith("×")
    || 
    display.endsWith("−")
    || 
    display.endsWith("+")
  ) {
    $("#display").text(display);
  } else if (
    display.includes("÷")
    || 
    display.includes("×")
    || 
    display.includes("−")
    || 
    display.includes("+")
    || 
    display.includes("%")
  ) {
    display = display.replace("÷", "/");
    display = display.replace("×", "*");
    display = display.replace("−", "-");
    display = display.replace("%", "/100");
    display = eval(display);
    $("#display").text(display);
    display = String(display);
  }
}

function appendPercentage() {
  if (numbers.test(display)) {
    display += "%";
    $("#display").text(display);
  }
}
