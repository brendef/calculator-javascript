// All 'Const' Variables Created Here.
const functions      = document.getElementsByClassName('function');
const numbersArr     = document.getElementsByClassName('numbers');

// All 'Let' Variables Created Here.
let fn        = 0;
let tfn       = "";
let total     = 0;
let tempTotal = 0;
let selectedSign = "=";
let selectedFunction = null;

// Act On button Clicks And Work Out Temporary Total
for(let i = 0; i < numbersArr.length; i++) {
  numbersArr[i].addEventListener("click", function() {
      tfn = tfn.concat(numbersArr[i].innerText).replace(/\s/g,'');
      document.getElementById("nums").innerHTML = tfn;
      fn = parseFloat(tfn, 10);
      if (selectedFunction == "minus") {
        fn = fn * -1;
      }
      if (selectedFunction == "multiply") {
        fn = (total * fn) - total;
      }
      if (selectedFunction == "devide") {
        fn = (total / fn) - total;
      }
      tempTotal = total + fn;
  });
}

// Act On All Function Clicks and Work Out Total
for(let i = 0; i < functions.length; i++) {
  functions[i].addEventListener("click", function() {
    selectedFunction = functions[i].id;
    selectedSign = functions[i].innerText;
    document.getElementById("nums").innerHTML = "";
    if (selectedFunction == "clear") {
      document.getElementById("nums").innerHTML = "";
      tfn = "";
      fn  = 0;
      tempTotal = total;
    } else {
      total += fn;
      tfn = "";
      fn  = 0;
    }
    if (selectedFunction == "equals") {
      document.getElementById("operator").innerHTML =  selectedSign;
    }
  });
}

// Display Results On Screen
setInterval(function(){ document.getElementById("answer").innerHTML = tempTotal ; }, 1);
setInterval(function(){ document.getElementById("operator").innerHTML =  selectedSign ; }, 1);
