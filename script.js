var display = "";

function append(element) {
  display += element;
  $("#display").text(display);
}

$("#0").click(function(){
  append(0);
});

$("#1").click(function(){
  append(1);
});

$("#2").click(function(){
  append(2);
});

$("#3").click(function(){
  append(3);
});

$("#4").click(function(){
  appendN(4);
});

$("#5").click(function(){
  append(5);
});

$("#6").click(function(){
  append(6);
});

$("#7").click(function(){
  append(7);
});

$("#8").click(function(){
  append(8);
});

$("#9").click(function(){
  append(9);
});

$("#decimal-separator").click(function(){
  append(.);
});
