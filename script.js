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
  clearButton.addEventListener('mousedown', () => //using mousedown on some funcs to remove focus for clicking/typing
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
  });
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
      i -= 2; // Bring i back 2 because I removed two values from the whole equationArr with the splice above
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
  if (Number.isInteger(parseInt(event.key)))
  {
    document.getElementById('display').textContent += event.key;
  }
  else if (event.key == '+')
  {
    document.getElementById('display').textContent += '+';
    document.getElementById('decimalButton').disabled = false;
  }
  else if (event.key == '-')
  {
    document.getElementById('display').textContent += '-';
    document.getElementById('decimalButton').disabled = false;
  }
  else if (event.key == '*')
  {
    document.getElementById('display').textContent += '*';
    document.getElementById('decimalButton').disabled = false;
  }
  else if (event.key == '.')
  {
    hasPreviousDecimal();
  }
  else if (event.key == '/')
  {
    document.getElementById('display').textContent += '/';
    document.getElementById('decimalButton').disabled = false;
  }
  else if (event.key == 'Backspace')
  {
    allClear();
  }
  else if (event.key == 'Enter') // Equivalent to equal button
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

//Prevent decimal from being placed twice --------------------------
function hasPreviousDecimal()
{
  const equation = document.getElementById('display').textContent; 
  const equationArr = equation.split(/([-\+\*\/])/);
  if ((equationArr[0].match(/\./)) && (typeof equationArr[2] === 'undefined')) {
    console.log('First number has a decimal point');
    return;
  } else if ((typeof equationArr[2] !== 'undefined') && (equationArr[2].match(/\./))) {
    console.log("Second number has a decimal point");
    return;
  } else {
    document.getElementById('display').textContent += '.';
    document.getElementById('decimalButton').disabled = true;
    return false;
  }
}

