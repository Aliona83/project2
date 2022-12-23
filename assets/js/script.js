const quizData = [{
    question: "Where did the Christmas tree originate from?",
    a: "Germany",
    b: "Ireland",
    c: "Norway",
    d: "Sweden",
    correct: "a",
  },
  {
    question: "Who invented electric lights for the Christmas tree?",
    a: "Ernest Hemingway",
    b: "Saul Bellow",
    c: "Edward H. Johnson",
    d: "Frank Kafka",
    correct: "c",
  },
  {
    question: "Where is the oldest Christmas market in the world?",
    a: " Cologne Germany",
    b: "Dresden Striezelmarkt",
    c: "Birmingham Christmas Market",
    d: "Seville's Christmas Market Spain",
    correct: "b",
  },
  {
    question: "What is the name for the period in between Christmas and New Year?",
    a: "Turxmas",
    b: "Landxmas",
    c: "Twelvetide",
    d: "Twixmas",
    correct: "d",
  },
  {
    question: "What is the most popular Christmas tree topper ornament?",
    a: "An angel",
    b: "Snowflake",
    c: "Star",
    d: "Elf",
    correct: "a",
  },
  {
    question: "What country started the tradition of hanging stockings?",
    a: "Canada",
    b: "Australia",
    c: "Italy",
    d: "Germany",
    correct: "c",
  },
  {
    question: "Which popular christmas beverage is also called 'milk punch?",
    a: "Milkpunch",
    b: "Eggnog",
    c: "Milkbag",
    d: "Eggpunch",
    correct: "b",
  },
  {
    question: "What plant is sometimes known as the 'Christmas flower?",
    a: "Bromeliad",
    b: "amarillis",
    c: "Shamrock",
    d: "Poinsettias",
    correct: "d",
  },
  {
    question: "In which country is it tradition to eat KFC for Christmas dinner?",
    a: "Japan",
    b: "Germany",
    c: "Ireland",
    d: "China",
    correct: "a",
  },
  {
    question: "What is the name of the ballet that takes place at Christmas?",
    a: "The Sleeping Beauty",
    b: "The Nutcracker",
    c: "The Little Match Girl",
    d: "The Snowman",
    correct: "b",
  },
  {
    question: "What is traditionally hidden inside a Christmas pudding?",
    a: "Button",
    b: "Pin",
    c: "A coin",
    d: "Stone",
    correct: "c",
  },
  {
    question: "If you are born on Christmas day, what is your star sign?",
    a: "Taurus",
    b: "Capricorn",
    c: "Virgo",
    d: "Aries",
    correct: "b",
  },
  {
    question: "According to tradition, when should you have your Christmas decorations down by?",
    a: "January 5th",
    b: "January 2nd",
    c: " January 7th",
    d: "January 14yh",
    correct: "a",
  },
  {
    question: "What decoration do elves traditionally have on their shoes?",
    a: "Buttons",
    b: "Shoes",
    c: "Stars",
    d: "Bells",
    correct: "d",
  },
  {
    question: "How many reindeer drive Santa's sleigh (including Rudolph)?",
    a: "Six",
    b: "Eight",
    c: "Nine",
    d: "Ten",
    correct: "c",
  },
];
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
const answerInputs = document.getElementsByClassName(".answer");
const playAgain = document.getElementById("restart");
const scoreDiv = document.querySelector(".score");
const resultsection1=document.getElementById("result-section");


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
let answer

showQuestion();
function showQuestion() {
   scoreDiv.innerHTML = `Score:${score}/${quizData.length}`
  document.querySelectorAll("input[name = answer]").forEach(option => option.checked = false)
   const currentQuizData = quizData[currentQuiz];

  //set questions and answers from array

  quizQuestion.innerText = currentQuizData.question;
  textQuizA.innerText = currentQuizData.a;
  textQuizB.innerText = currentQuizData.b;
  textQuizC.innerText = currentQuizData.c;
  textQuizD.innerText = currentQuizData.d;
}
/**
 * Handling event listner on button click
 */
function nextQuestion() {
  let = answerQuiz = document.querySelector("input[name = answer]:checked");
  console.log(answerQuiz);
  if(answerQuiz == null)
  {
    alert("Please select one answer");

  }
   else {
    let answerCorrect = quizData[currentQuiz].correct;
    if(answerQuiz.id == answerCorrect) {
      score++;
      console.log(score);
    }
  }
  currentQuiz++;
  if (currentQuiz == quizData.length) {
    //shows final answer
    results(score)
  } else {
    showQuestion();
    //show next question
}
}
submitBtn.addEventListener("click", nextQuestion);
 
  function results (score ) {
    console.log('score',score);
    playAgain.classList.add("hide");
    quizSection.classList.add("hide");
    scoreDiv.classList.remove("hide");
    resultsection1.classList.remove("hide");

  };
  