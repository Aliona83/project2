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
const resultsection1 = document.getElementById("result-section");
const questionNumber = document.getElementById("questionNumber");
const timer = document.getElementById("timer");
/**
 * hide the intro section and show the quiz section
 */
function showQuiz() {
  introSection.classList.add("hide");
  quizSection.classList.remove("hide");
}
startButton.addEventListener('click', showQuiz);
/**
 * load question with answers
 */

let currentQuiz = 0;
let score = 0;
// let answer;

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
  let = answerQuiz 
  document.querySelector("input[name = answer]:checked");
  if (answerQuiz == null && counter > 0) {
    alert("Please select one answer");
  } else {
    let answerCorrect 
    QUIZ_DATA[currentQuiz].correct;
    if (counter > 0 && answerQuiz != null && answerQuiz.id == answerCorrect) {
      score++;
      console.log(score);
    }
  }
  currentQuiz++;
  if (currentQuiz == QUIZ_DATA.length) {
    //shows final answer
    results(score);

  } else {
    showQuestion();
    counter = 20;
    //show next question
  }
}

//timer for each question 
let counter = 20;
let questions = QUIZ_DATA[currentQuiz];
setInterval(function () {
  counter--;
  if (counter >= 0) {
    timer.innerText = counter;
  }
  if (counter === 0) {

    } else {
      quizQuestion.addEventListener("click",function() {
        showQuestion();
  });
}
}, 1000);

// button for next question
submitBtn.addEventListener("click", nextQuestion);

// last page of quiz - results with button play again 
function results(score) {
  document.getElementById("result").innerHTML = `Score:${score}/${QUIZ_DATA.length}`;
  playAgain.classList.remove("hide");
  quizSection.classList.add("hide");
  scoreDiv.classList.remove("hide");
  resultsection1.classList.remove("hide");
}
let playGameAgain = document.getElementById("restart");
playGameAgain.onclick = function () {
  window.location.reload();
};