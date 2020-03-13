function add(...theArgs) {
    const sum = theArgs.reduce((acc, arg) => acc + arg, 0);
    return sum;
    
  }

  function subtract(...theArgs) {
    const sum = theArgs.reduce((acc, arg) => acc - arg);
    return sum;
    
  }

  function multiply(...theArgs) {
    const sum = theArgs.reduce((acc, arg) => acc * arg);
    return sum;
    
  }

  function divide(...theArgs) {
    const sum = theArgs.reduce((acc, arg) => acc / arg);
    return sum;
    
  }

  function operate()
  {
      //takes an operator and 2 numbers and then calls one of the above functions above on the numbers
  }





