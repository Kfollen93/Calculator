const errorMessage = "Can not do";
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

function subtract()
{
  num1 = document.getElementById('display').textContent;
  num1parsed = parseInt(num1);
  console.log(num1parsed);
  operation = "subtract";
  document.getElementById('display').innerHTML = '';
}
document.getElementById('minusButton').addEventListener('click', subtract);

function multiply()
{
  num1 = document.getElementById('display').textContent;
  num1parsed = parseInt(num1);
  console.log(num1parsed);
  operation = "multiply";
  document.getElementById('display').innerHTML = '';
}
document.getElementById('multiplyButton').addEventListener('click', multiply);

function divide()
{
  num1 = document.getElementById('display').textContent;
  num1parsed = parseInt(num1);
  console.log(num1parsed);
  operation = "divide";
  document.getElementById('display').innerHTML = '';
}
document.getElementById('divideButton').addEventListener('click', divide);



function operate(operation, num1, num2)
{
  switch(operation) {
    case "add": return num1 + num2;
    case "subtract": return num1 - num2;
    case "multiply": return num1 * num2;
    case "divide": if (num1 / num2 === Infinity || num1 / num2 === -Infinity || num1 === 0 && num2 === 0)
      {
        return errorMessage;
      } 
      else
      {
        return num1 / num2;
      } 
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

let digitBtn = document.getElementsByClassName('digit');
    
for(let i = 0; i < digitBtn.length; i++)
{
  digitBtn[i].addEventListener("click",() =>
  {
    document.getElementById('display').textContent += digitBtn[i].textContent;
  })
}