function getAverageScore() {
  const scoresElement = getElementForScores();
  const scoresAsString = scoresElement.value.trim();

  const arrayOfScoresString = scoresAsString.split(',');
  let sumOfAllScores = 0;
  for(const scoreString of arrayOfScoresString){
    const score = parseInt(scoreString);
    sumOfAllScores = sumOfAllScores + score;
  }
  const averageScore = sumOfAllScores / arrayOfScoresString.length;

  return averageScore;
}

function calculateGrade() {
  const score = getAverageScore();

  if (score >= 75) {
    printGrade('A1');
  } else if (score < 75 && score > 69) {
    printGrade('A2');
  } else if (score < 70 && score > 64) {
    printGrade('B3');
  } else if (score < 65 && score > 59) {
    printGrade('B4');
  } else if (score < 60 && score > 54) {
    printGrade('C5');
  } else if (score < 55 && score > 49) {
    printGrade('C6');
  } else if (score < 50 && score > 44) {
    printGrade('D7');
  } else if (score < 45 && score > 39) {
    printGrade('E8');
  } else if (score < 40) {
    printGrade('F9');
  }
}

function printGrade(grade) {
  const elementToPrintGrade = getElementToPrintTo();

  elementToPrintGrade.innerHTML = grade;
}

function getElementForScores(){
  const scoresElement = document.getElementById('scores');

  return scoresElement;
}

function getElementToPrintTo(){
  const element = document.getElementById('grade');

  return element;
}

function clearAll() {
  const confirmClear = confirm('Are you sure you want to clear');

  if(confirmClear){
    const elementToPrintGrade = getElementToPrintTo();
    const scoresElement = getElementForScores();

    elementToPrintGrade.innerHTML = 'Enter results to begin...';
    scoresElement.value = "";
  }
}