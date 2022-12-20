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