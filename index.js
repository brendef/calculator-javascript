// All 'Const' Variables Created Here.
const functions      = document.getElementsByClassName('functions-right');
const numbersArr     = document.getElementsByClassName('numbers');

// All 'Let' Variables Created Here.
let n         = 0;
let fn        = 0;
let tfn       = "";
let total     = 0;
let answers   = [0];
let tempTotal = 0;
let selectedFunction = null;

for(let i = 0; i < numbersArr.length; i++) {
  numbersArr[i].addEventListener("click", function() {
      tfn = tfn.concat(numbersArr[i].innerText).replace(/\s/g,'');
      document.getElementById("nums").innerHTML = tfn;
      fn = parseInt(tfn, 10);
      tempTotal = total + fn;
  });
}

for(let i = 0; i < functions.length; i++) {
  functions[i].addEventListener("click", function() {
    total += fn;
    tfn = "";
    fn  = 0;
    selectedFunction = functions[i].id;
  });
}

setInterval(function(){ document.getElementById("answer").innerHTML = tempTotal; }, 1);
