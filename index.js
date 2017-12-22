const numbersArr = document.getElementsByClassName('numbers');
const functions = document.getElementsByClassName('functions-right');
let currentInput = [];
let fullnumber;
let total = 0;
let fn = 0;
let num1 = 0;
let num2 = 0;

function plus(number) {
  fn = parseInt(number, 10);
  total += fn;
  fullnumber = 0;
  currentInput.length = 0;
}

function minus(number) {
  fn = parseInt(number, 10);
  total -= fn;
  fullnumber = 0;
  currentInput.length = 0;
}

for(let i = 0; i < numbersArr.length; i++) {
  numbersArr[i].addEventListener("click", function() {
      currentInput.push(numbersArr[i].innerText);
      fullnumber = currentInput.join("");
      tfn = fullnumber.replace(/\s/g,'');
      document.getElementById("nums").innerHTML = tfn;
  });
}

for(let i = 0; i < functions.length; i++) {
  functions[i].addEventListener("click", function() {
      if(functions[i].id == "plus"){
        plus(tfn);
        document.getElementById("nums").innerHTML = total;
      }
      if(functions[i].id == "minus"){
        minus(tfn);
        document.getElementById("nums").innerHTML = total;
      }
      if(functions[i].id == "multiply") {
      }
      if (functions[i].id == "devide"){
      }
  });
}

 setInterval(function(){ document.getElementById("l").innerHTML = total; }, 100);
