// The arrays of quiz question
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
//Got elements from DOM
const container = document.querySelector(".container")
const centerColumn = document.querySelector(".center-column")
const quiz = document.getElementById("quiz");
const answerQuiz = document.querySelectorAll(".answer");
const questionQuiz = document.getElementById("question");
const text_aQuiz = document.getElementById("a_text");
const text_bQuiz = document.getElementById("b_text");
const text_cQuiz = document.getElementById("c_text");
const text_dQuiz = document.getElementById("d_text");
const question_Number = document.getElementById("questionNumber");
const questionTimer = document.getElementById("timer");
const submitBtn = document.getElementById("submit");



// Start quiz //
// const usernameBox = document.getElementById("name");
// const startButton = document.getElementById("myBtn");
// const username = document.querySelector(".name-field");
// const storeUsername = localStorage.getItem("text");


 
//variables
let currentQuiz = 0;
let score = 0;
let counter = 20;

loadQuiz()

// functions for loading question with answers
function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz];
  counter = 20;
  questionQuiz.innerText = currentQuizData.question;
  text_aQuiz.innerText = currentQuizData.a;
  text_bQuiz.innerText = currentQuizData.b;
  text_cQuiz.innerText = currentQuizData.c;
  text_dQuiz.innerText = currentQuizData.d
  question_Number.innerText = currentQuiz + 1;
}

//function unchecking answers
function deselectAnswers() {
  answerQuiz.forEach(option => option.checked = false)
}
// It return the selected answer
function getSelected() {
  let answer
  answerQuiz.forEach(answerQuiz => {
    if (answerQuiz.checked) {
      answer = answerQuiz.id
    }
  })
  return answer
}



//creating submit button for each question
submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()

    } else {
      quiz.innerHTML = `
    <h2>You answered ${score}/${quizData.length} question correctly
    <button onclick ="location.reload()"
    `
    }
  }
})

// will change question numberers from1-15
//Creating Timer For Quiz Timer Section

let questionCount = 0;
let questions = quizData[currentQuiz];
// questionDivID = document.getElementById("questionNumber");

setInterval(function () {
  counter--;
  if (counter >= 0) {
    questionTimer.innerText = counter;
  }
  if (counter === 0) {
    questionTimer.innerText = "Time Up!";
    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()

    } else {
      quiz.innerHTML = `
    <h2>Your results${score}/${quizData.length} is
    <button onclick="location.reload()">Play Again!</button>
    `
    }
  }
}, 1000);

function goToNextQuestion() {
  questionCount++;
  counter = 20;
}
