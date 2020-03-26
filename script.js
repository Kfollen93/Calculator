//All operator functions ---------------------------
function add()
{
  document.getElementById('display').innerHTML += '+';
  document.getElementById('decimalButton').disabled = false;
}
document.getElementById('plusButton').addEventListener('click', add);

function subtract()
{
  document.getElementById('display').innerHTML += '-';
  document.getElementById('decimalButton').disabled = false;
}
document.getElementById('minusButton').addEventListener('click', subtract);

function multiply()
{
  document.getElementById('display').innerHTML += '*';
  document.getElementById('decimalButton').disabled = false;
}
document.getElementById('multiplyButton').addEventListener('click', multiply);

function divide()
{
  document.getElementById('display').innerHTML += '/';
  document.getElementById('decimalButton').disabled = false;
}
document.getElementById('divideButton').addEventListener('click', divide);
//-------------------------------------------------
function operate(num1, num2, operation)
{
  switch(operation) {
    case "+": return num1 + num2;
    case "-": return num1 - num2;
    case "*": return num1 * num2;
    case "/": return num1 / num2;
    }
}
  //--------------------------------------------------------
  function allClear()
  {
    document.getElementById('display').innerHTML = '';
  }

  const allClearButton = document.querySelector('#clearButton');
  clearButton.addEventListener('mousedown', () =>
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
  digitBtn[i].addEventListener("mousedown",() =>
  {
    document.getElementById('display').textContent += digitBtn[i].textContent;
    console.log(digitBtn[i].textContent);
  })
}
//Equal Button for operation order ------------------------------------

equalButton.addEventListener('mousedown', () =>
{
  const equation = document.getElementById('display').textContent; 
  const equationArr = equation.split(/([-\+\*\/])/); // Splits the equation into an array between operator signs
  console.log(equationArr);

  for (let i = 0; i < equationArr.length; i++) {
    if (equationArr[i] === '*' || equationArr[i] === '/')
    {
        // solve for multiplication and division only
        // in [12, +, 7, -, 5, * 3], it would come to i = 5
        // Replace i - 1 with the value from the operate function: operate(num before the *, num after the *, the operator (ie *)
        // equationArr would be [12, +, 7, -, 15]
      equationArr[i - 1] = operate(parseFloat(equationArr[i - 1]), parseFloat(equationArr[i + 1]), equationArr[i]);
      equationArr.splice(i, 2); //At the i'th value, remove that and the next value, in this it removes * and 3.
      i -= 2; // Bring i back 2 because we removed two values from the whole equationArr  with the splice above
    }
  }
  
  for (let i = 0; i < equationArr.length; i++)
  {
    if (equationArr[i] === '+' || equationArr[i] === '-')
    {
      equationArr[i - 1] = operate(parseFloat(equationArr[i - 1]), parseFloat(equationArr[i + 1]), equationArr[i]);
      equationArr.splice(i, 2);
      i -= 2;
    }
  }
  document.getElementById('display').textContent = Math.round(equationArr[0] * 1000) / 1000;
});

//Keyboard Support ---------------------

document.body.addEventListener("keydown", function(event) {
  console.log(event.which);

  for (let i = 0; i < 10; i++) 
  {
    if (event.keyCode == i + 48)
    {
      document.getElementById('display').textContent += i;
    } 
  }
  
  if (event.which == 107) //no
  {
    document.getElementById('display').textContent += '+'; //no work
  }
  else if (event.which == 189)
  {
    document.getElementById('display').textContent += '-';
  }
  else if (event.which == 16 + event.which == 56) //no work
  {
    document.getElementById('display').textContent += '*'; //no
  }
  else if (event.which == 190)
  {
    document.getElementById('decimalButton').disabled = true; 
  }
  else if (event.which == 191)
  {
    document.getElementById('display').textContent += '/';
  }
  else if (event.which == 8) //clear button (press BACKSPACE)
  {
    allClear();
  }
  else if (event.which == 13)
  {
  const equation = document.getElementById('display').textContent; 
  const equationArr = equation.split(/([-\+\*\/])/); // Splits the equation into an array between operator signs
  console.log(equationArr);

  for (let i = 0; i < equationArr.length; i++) {
    if (equationArr[i] === '*' || equationArr[i] === '/')
    {
        // solve for multiplication and division only
        // in [12, +, 7, -, 5, * 3], it would come to i = 5
        // Replace i - 1 with the value from the operate function: operate(num before the *, num after the *, the operator (ie *)
        // equationArr would be [12, +, 7, -, 15]
      equationArr[i - 1] = operate(parseFloat(equationArr[i - 1]), parseFloat(equationArr[i + 1]), equationArr[i]);
      equationArr.splice(i, 2); //At the i'th value, remove that and the next value, in this it removes * and 3.
      i -= 2; // Bring i back 2 because we removed two values from the whole equationArr  with the splice above
    }
  }
  
  for (let i = 0; i < equationArr.length; i++)
  {
    if (equationArr[i] === '+' || equationArr[i] === '-')
    {
      equationArr[i - 1] = operate(parseFloat(equationArr[i - 1]), parseFloat(equationArr[i + 1]), equationArr[i]);
      equationArr.splice(i, 2);
      i -= 2;
    }
  }
  document.getElementById('display').textContent = Math.round(equationArr[0] * 1000) / 1000;
  }
  else
  {
    return;
  }
});