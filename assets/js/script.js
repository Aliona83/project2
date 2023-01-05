// Got elements from DOM
const startButton = document.getElementById("start-btn");
const introSection = document.getElementById("intro-section");
const quizSection = document.getElementById("quiz-section");
const quizQuestion = document.getElementById("question");
const textQuizA = document.getElementById("a_text");
const textQuizB = document.getElementById("b_text");
const textQuizC = document.getElementById("c_text");
const textQuizD = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const playAgain = document.getElementById("restart");
const scoreDiv = document.querySelector(".score");
const resultsectionOne = document.getElementById("result-section");
const questionNumber = document.getElementById("questionNumber");
const timer = document.getElementById("timer");

let currentQuiz = 0;
let score = 0;
let counter = 20;

/**
 * hide the intro section and show the quiz section
 */
function showQuiz() {
  introSection.classList.add("hide");
  quizSection.classList.remove("hide");
}
window.addEventListener('DOMContentLoaded',(event) => {
  startButton.addEventListener('click', showQuiz);
  let playBtnAgain = document.getElementById("restart");
  submitBtn.addEventListener("click", nextQuestion);
});




/**
 * load question with answers
 */
showQuestion();

function showQuestion() {
  scoreDiv.innerHTML = `Score:${score}/${QUIZ_DATA.length}`;
  document.querySelectorAll("input[name = answer]").forEach(option => option.checked = false);
  const currentQuizData = QUIZ_DATA[currentQuiz];

  //set questions and answers from array
  quizQuestion.innerText = currentQuizData.question;
  textQuizA.innerText = currentQuizData.a;
  textQuizB.innerText = currentQuizData.b;
  textQuizC.innerText = currentQuizData.c;
  textQuizD.innerText = currentQuizData.d;
  questionNumber.innerText = currentQuiz + 1;
}
/**
 * Handling event listner on button click
 */
function nextQuestion() {
  let answerQuiz = document.querySelector("input[name = answer]:checked");
  if (answerQuiz == null && counter > 0) {
    alert("Please select one answer");
    return;
  } else {
    let answerCorrect = QUIZ_DATA[currentQuiz].correct;
    if (counter > 0 && answerQuiz != null && answerQuiz.id == answerCorrect) {
      score++;
    }
  }
  currentQuiz++;
  if (currentQuiz == QUIZ_DATA.length) {
    //shows final answer
    results(score);
    myStopTimer();

  } else {
    showQuestion();
    counter = 20;
  }
}

let questions = QUIZ_DATA[currentQuiz];
 let myInterval = setInterval(function () {
  counter--;
  if (counter >= 0) {
    timer.innerText = counter;
  }
  if (counter === 0) {
    timer.innerText = "Time Up";
    alert("Your time up,press for next question");
    if (currentQuiz >= QUIZ_DATA.length) {
      nextQuestion();
      if (QUIZ_DATA[currentQuiz]<= 0){
        myStopTimer();
      }
      
    }
  }
}, 1000);
function myStopTimer() {
  clearInterval(myInterval);
}

/**
 * Function to show results
 */
function results(score) {
  document.getElementById("result").innerHTML = `Score:${score}/${QUIZ_DATA.length}`;
  playAgain.classList.remove("hide");
  quizSection.classList.add("hide");
  scoreDiv.classList.remove("hide");
  resultsectionOne.classList.remove("hide");
}


playAgain.onclick = function () {
  window.location.reload();
};