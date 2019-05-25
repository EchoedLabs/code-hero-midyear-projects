const firstNumberElement = document.getElementById('first-number');
  const secondNumberElement = document.getElementById('second-number');
  const answerElement = document.getElementById('final-answer');

  function addNumbers() {
    const firstNumber = parseInt(firstNumberElement.value);
    const secondNumber = parseInt(secondNumberElement.value);

    const answer = firstNumber + secondNumber;
    answerElement.innerHTML = answer;
  }

  function subtractNumbers(){
    const firstNumber = parseInt(firstNumberElement.value);
    const secondNumber = parseInt(secondNumberElement.value);

    const answer = firstNumber - secondNumber;
    answerElement.innerHTML = answer;
  }

  function multiplyNumbers(){
    const firstNumber = parseInt(firstNumberElement.value);
    const secondNumber = parseInt(secondNumberElement.value);

    const answer = firstNumber * secondNumber;
    answerElement.innerHTML = answer;
  }

  function divideNumbers(){
    const firstNumber = parseInt(firstNumberElement.value);
    const secondNumber = parseInt(secondNumberElement.value);

    const answer = firstNumber / secondNumber;
    answerElement.innerHTML = answer;
  }

  function cleanNumbers() {
    firstNumberElement.value = null;
    secondNumberElement.value = null;
    answerElement.innerHTML = 0;
  }