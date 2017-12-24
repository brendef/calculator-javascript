const numbersArr = document.getElementsByClassName('numbers');
const functions = document.getElementsByClassName('functions-right');
let selectedFunction;
let currentInput = [];
let fullnumber;
let total = 0;
let fn = 0;
let var1 = null;
let var2 = null;
let num1 = 0;
let num2 = 0;

for(let i = 0; i < numbersArr.length; i++) {
  numbersArr[i].addEventListener("click", function() {
      currentInput.push(numbersArr[i].innerText);
      fullnumber = currentInput.join("");
      tfn = fullnumber.replace(/\s/g,'');
      document.getElementById("nums").innerHTML = tfn;

      if (var1 != null) {
        var2 = tfn;
      }

      if (var2 != null) {
        if (selectedFunction == "plus") {
          num1 = parseInt(var1, 10);
          num2 = parseInt(var2, 10);
          total += num1 + num2;
          // var1 = null;
          // var2 = null;
          // fullnumber = 0;
          // currentInput.length = 0;
        } else if (selectedFunction == "minus") {
          num1 = parseInt(var1, 10);
          num2 = parseInt(var2, 10);
          total -= num1 - num2;
          // var1 = null;
          // var2 = null;
          // fullnumber = 0;
          // currentInput.length = 0;
        }
      }

  });
}

for(let i = 0; i < functions.length; i++) {
  functions[i].addEventListener("click", function() {
    if(functions[i].id == "plus"){
      if (var2 != null) {
        fullnumber = 0;
        currentInput.length = 0;
        var1 = null;
        var2 = null;
      }

      if (var1 == null) {
        var1 = tfn;
        fullnumber = 0;
        currentInput.length = 0;
      } else {
        document.getElementById("nums").innerHTML = "error";
      }
      selectedFunction = "plus";
    }
    if(functions[i].id == "minus"){
      selectedFunction = "minus";
    }
    if(functions[i].id == "multiply") {
      selectedFunction = "multiply";
    }
    if (functions[i].id == "devide"){
      selectedFunction = "devide";
    }
  });
}

if (var2 != null) {
  document.getElementById("nums").innerHTML = "var2 is full";
}
















 setInterval(function(){ document.getElementById("l").innerHTML = total; }, 100);
 setInterval(function(){ document.getElementById("var1").innerHTML = var1; }, 100);
 setInterval(function(){ document.getElementById("var2").innerHTML = var2; }, 100);












 // function plus(number) {
 //   fn = parseInt(number, 10);
 //   total += fn;
 //   fullnumber = 0;
 //   currentInput.length = 0;
 // }
 //
 // function minus(number) {
 //   fn = parseInt(number, 10);
 //   total -= fn;
 //   fullnumber = 0;
 //   currentInput.length = 0;
 // }
