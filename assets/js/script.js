// The arrays of quiz question
const quizData = [
    {
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
      question:"What is the name for the period in between Christmas and New Year?",
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
      question:"In which country is it tradition to eat KFC for Christmas dinner?",
      a: "Japan",
      b: "Germany",
      c: "Ireland",
      d: "China",
      correct: "a",
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
      question:
        "According to tradition, when should you have your Christmas decorations down by?",
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
  const quiz=document.getElementById("quiz") 
  const answerQuiz = document.querySelectorAll(".answer")
  const questionQuiz = document.getElementById("question")
  const text_aQuiz = document.getElementById("a_text")
  const text_bQuiz = document.getElementById("b_text")
  const text_cQuiz = document.getElementById("c_text")
  const text_dQuiz = document.getElementById("d_text")
  const questionTimer = document.getElementById("countDown")
  const submitBtn = document.getElementById("submit")


//variables

  let currentQuiz = 0;
  let score =0;

  loadQuiz()

  function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionQuiz.innerHTML = currentQuizData.question
    text_aQuiz.innerHTML = currentQuizData.a
    text_bQuiz.innerHTML = currentQuizData.b
    text_cQuiz.innerHTML = currentQuizData.c
    text_dQuiz.innerHTML = currentQuizData.d

  }

  function deselectAnswers() {
    answerQuiz.forEach(answerQuiz=> answerQuiz.checked = false)
  }
  function getSelected() {
   let answerQuiz
   answerQuiz.forEach(answerQuiz => {
    if(answerQuiz.checked) {
      answer = answerQuiz.id
    }
   })
   return answer
  }



//Add timer
 let time = 20
 let quizTimeInSeconds = time * 20 * 20;
 quizTime = quizTimeInSeconds / 20;
 let counting = document.getElementById("countDown")
 function startCountdown() {
    let quizTimer = setInterval(function() {
        if(quizTime <= 0) {
            clearInterval(quizTimer);
            showScore();
        }else {
            quizTime--;
            let sec = Math.floor(quizTime % 20);
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    },1000)
 }
 startCountdown();