// All 'Const' Variables Created Here.
const functions      = document.getElementsByClassName('functions-right');
const numbersArr     = document.getElementsByClassName('numbers');

// All 'Let' Variables Created Here.
let fn      = 0;
let tfn     = "";
let total   = 0;
let answers = [];
let selectedFunction = null;

for(let i = 0; i < numbersArr.length; i++) {
  numbersArr[i].addEventListener("click", function() {
      tfn = tfn.concat(numbersArr[i].innerText).replace(/\s/g,'');
      document.getElementById("nums").innerHTML = tfn;

      if (selectedFunction == "plus") {
        fn = parseInt(tfn, 10);
      }

      if (selectedFunction == "minus") {
        fn = parseInt(tfn, 10) * -1;
      }
      answers.push(fn);

      answers[answers.length]

      // for (let i = 0; i < answers.length; i++) {
      //   total += answers[answers.length] - answers[i];
      // }
  });
}

for(let i = 0; i < functions.length; i++) {
  functions[i].addEventListener("click", function() {
    tfn = "";
    fn  = 0;
    selectedFunction = functions[i].id;
  });
}

setInterval(function(){ document.getElementById("answer").innerHTML = total; }, 1);
