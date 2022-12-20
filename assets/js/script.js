// Got elements from DOM
const startButton = document.getElementById("start-btn");
const introSection = document.getElementById("intro-section");
const quizSection = document.getElementById("quiz-section");
/**
 * hide the intro section and show the quiz section
 */
function showQuiz() {
    introSection.classList.add("hide");
    quizSection.classList.remove("hide");
}
startButton.addEventListener('click', showQuiz);
// Show question and choice of answers
//  select the right answer
// button to next question

const question = document.getElementById("question");
const answer = document.getElementsByClassName(".answer");
const textQuizA = document.getElementById("a_text");
const textQuizB = document.getElementById("b_text");
const textQuizC = document.getElementById("c_text");
const textQuizD = document.getElementById("d_text");
const submit = document.getElementById("submit");
/**
 * create function for loading question with answers
 */