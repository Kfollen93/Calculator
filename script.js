const errorMessage = "Can not do";
let num1 = 0.0;
let num1parsed = 0.0;
let num2 = 0.0;
let num2parsed = 0.0;
let operation;

//All operator functions ---------------------------
function add()
{
  num1 = document.getElementById('display').textContent;
  num1parsed = parseFloat(num1);
  operation = "add";
  document.getElementById('display').innerHTML = '';
  document.getElementById('decimalButton').disabled = false;
}
document.getElementById('plusButton').addEventListener('click', add);

function subtract()
{
  num1 = document.getElementById('display').textContent;
  num1parsed = parseFloat(num1);
  operation = "subtract";
  document.getElementById('display').innerHTML = '';
  document.getElementById('decimalButton').disabled = false;
}
document.getElementById('minusButton').addEventListener('click', subtract);

function multiply()
{
  num1 = document.getElementById('display').textContent;
  num1parsed = parseFloat(num1);
  operation = "multiply";
  document.getElementById('display').innerHTML = '';
  document.getElementById('decimalButton').disabled = true;
}
document.getElementById('multiplyButton').addEventListener('click', multiply);

function divide()
{
  num1 = document.getElementById('display').textContent;
  num1parsed = parseFloat(num1);
  operation = "divide";
  document.getElementById('display').innerHTML = '';
  document.getElementById('decimalButton').disabled = true;
}
document.getElementById('divideButton').addEventListener('click', divide);

function percent() //this needs to be checked
{
  num1 = document.getElementById('display').textContent;
  num1parsed = parseFloat(num1);
  operation = "percent";
}
document.getElementById('percentButton').addEventListener('click', percent);



//-------------------------------------------------

function operate(operation, num1, num2)
{
  switch(operation) {
    case "add": return num1 + num2;
    case "percent": return num1 / 100; //this needs to be checked
    case "subtract": return num1 - num2;
    case "multiply": return num1 * num2;
    case "divide": if(num1 / num2 === Infinity || num1 / num2 === -Infinity || num1 === 0 && num2 === 0)
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
  num2parsed = parseFloat(num2);
  document.getElementById('display').innerHTML = Math.round(operate(operation, num1parsed, num2parsed) * 100) / 100;
  document.getElementById('decimalButton').disabled = true;
});

  //--------------------------------------------------------
  function allClear()
  {
    document.getElementById('display').innerHTML = '';
  }

  const allClearButton = document.querySelector('#clearButton');
  clearButton.addEventListener('click', () =>
  {
    allClear();
    document.getElementById('decimalButton').disabled = false;
  });

//-------------------------------------------------------------
  function decimalButton()
  {
   document.getElementById('display').textContent += '.';
  }

  let decimal = document.getElementById('decimalButton');
  decimal.addEventListener('click', () =>
  {
    decimalButton();
    document.getElementById('decimalButton').disabled = true;
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


