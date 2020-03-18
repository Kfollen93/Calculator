/*function add(a, b)
{
  return a + b;
}
const additionButton = document.querySelector('#plusButton');
additionButton.addEventListener('click', () =>
{
  add();
});

function subtract(a, b)
{
  return a - b;
}
function multiply(a, b)
{
  return a * b;
}
function divide(a, b)
{
  if (a / b === Infinity || a / b === -Infinity || a === 0 && b === 0)
  {
    return errorMessage;
  } 
  else
  {
    return a / b;
  }
 
}
const errorMessage = "Can not do"; */

let num1;
let num1parsed;
let num2;
let num2parsed;
let operation;

function add()
{
  num1 = document.getElementById('display').textContent;
  num1parsed = parseInt(num1);
  console.log(num1parsed);
  operation = "add";
  document.getElementById('display').innerHTML = '';
}
document.getElementById('plusButton').addEventListener('click', add);


function operate(operation, num1, num2)
{
    switch(operation) {
        case "add": return num1 + num2;
        case "subtract": return num1 - num2;
        case "multiply": return num1 * num2;
        case "divide": return num1 / num2;
    };
}

const equalButton = document.querySelector('#equalButton');
equalButton.addEventListener('click', () =>
{
  num2 = document.getElementById('display').textContent;
  num2parsed = parseInt(num2);
  console.log(num2parsed);
  document.getElementById('display').innerHTML = operate(operation, num1parsed, num2parsed);
  console.log(num1parsed + num2parsed);
});
//-------------------------------------------------------------------------
//Functions that populate the display when you click a number

  function showSeven()
  {
    document.getElementById('display').style.color = 'white';
    document.getElementById('display').innerHTML += 7;
  }

  const sevenButton = document.querySelector('#sevenButton');
  sevenButton.addEventListener('click', () =>
  {
    showSeven();
  });

  function showEight()
  {
    document.getElementById('display').style.color = 'white';
    document.getElementById('display').innerHTML += 8;
  }

  const eightButton = document.querySelector('#eightButton');
  eightButton.addEventListener('click', () =>
  {
    showEight();
  });


  //clear function --------------------------------------------------------
  function allClear()
  {
    document.getElementById('display').innerHTML = '';
  }

  const allClearButton = document.querySelector('#clearButton');
  clearButton.addEventListener('click', () =>
  {
    allClear();
  });

 //function for all digit values------------------------------------

 /*const digits = document.getElementsByClassName("digit");
 digits.forEach(function(digit){
   digit.addEventListener("click", function(eventObject){
     // in here, when a button is clicked, we can see which one by
     //  that eventObject - it has a 'target' property which is the
     //  element that caused the event!
     const value = eventObject.target.textContent;
     // in your case, the buttons don't have a value, but their
     //  actual text is pretty much what we want.
   })
 }) */ //digits[I].addEventListener

 //Do a foor loop for each button to make it display