const correctAnswers = ['1', '2', '3', '4']
let selectedOptions = [];

function generateResult() {
    populateSelectedOptions();
    const totalScore = calculateResults();
    displayResult(totalScore);
    selectedOptions = [];
}

function populateSelectedOptions() {
    const selectedOption1 = document.querySelector('input[name="qn1"]:checked').value;
    const selectedOption2 = document.querySelector('input[name="qn2"]:checked').value;
    const selectedOption3 = document.querySelector('input[name="qn3"]:checked').value;
    const selectedOption4 = document.querySelector('input[name="qn4"]:checked').value;
    selectedOptions.push(selectedOption1);
    selectedOptions.push(selectedOption2);
    selectedOptions.push(selectedOption3);
    selectedOptions.push(selectedOption4);
    console.log('selectedOptions', selectedOptions)
}

function calculateResults() {
    let i = 0;
    let score = 0;
    for(correctAnswer of correctAnswers) {
        console.log(i, correctAnswer, selectedOptions[i])
        if (correctAnswer === selectedOptions[i]) score++;
        i++;
    }
    return score;
}

function displayResult(score) {
    // default - fullmarks
    let message = 'Wow nice! So you do know me well ';
    if (score === 0) {
        message = 'wow ok gotta say Im truly disappointed'
    } else if (score < 2) {
        message = 'Meh, you do not really know me'
    } else if (score < 4) {
        message = 'Not bad at all actually - I can call you a friend'
    }

    Swal.fire(
        score + ' out of 4!',
        message,
        'info'
      )
}