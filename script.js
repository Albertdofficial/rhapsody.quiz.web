"use strict";

const quizData = [
  {
    question: "Who is the Holy Spirit?",
    a: "The Holy Spirit is the third Person of the Godhead ",
    b: "The Holy Spirit is the way, the truth and the life",
    c: "The Holy Spirit is a Cloud",
    d: "The Holy Spirit is a Smoke",
    correct: "a",
  },
  {
    question: "How was God introduced to us?",
    a: "Jeovah Jireh",
    b: "The Holy Spirit",
    c: "Elohim",
    d: "Yaweh",
    correct: "c",
  },
  {
    question:
      "What are the synonyms for the Holy Spirit used in John 14:16 AMPC",
    a: "Helper, Intercessor, Advocate",
    b: "Comforter, Counsellor, Helper, Intercessor, Advocate, Strengthener and Standby",
    c: "Prince of Peace Comforter, Counsellor",
    d: "Advocate, Strengthener and Standby",
    correct: "b",
  },
  {
    question: "What statement best describes the Holy Spirit?",
    a: "The Holy Spirit comforts",
    b: "The Holy Spirit strengthens",
    c: "The Holy Spirit heals",
    d: `The Holy Spirit is exactly like Jesus. He doesn’t receive power from God. 
        In fact, He’s the POWER of God. He’s the Spirit of truth who proceeds from the Father`,
    correct: "d",
  },
];

const ul = document.querySelector("ul");

const body = document.querySelector("body");

const quizHeader = document.querySelector(".quiz-header");
const quiz = document.getElementById("quiz");
const quizResult = document.querySelector(".quiz-result");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.querySelector(".submit");

let currentQuiz = 0;
let score = 0;
let correctEl = document.querySelector("p");

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  //gets each of the objects of the array
  const currentQuizData = quizData[currentQuiz];

  // get the question property in the objects
  questionEl.innerText = currentQuizData.question;

  // get the question property in the questions
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  // removes the checks or selections
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id; // gets the id of the checked element
    }
  });

  return answer;
}

submitBtn.addEventListener("click", (e) => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      correctEl.textContent = "Correct";
      correctEl.style.color = "#3330E4";
      score += 25;
    } else {
      correctEl.textContent = "Wrong";
      correctEl.style.color = "crimson";
    }

    currentQuiz++;

    setTimeout(() => {
      if (currentQuiz < quizData.length) {
        correctEl.textContent = "";
        loadQuiz();
      } else {
        quiz.innerHTML = "";
        // animate score
        let output = 0;
        const timer = setInterval(() => {
          quizResult.innerHTML = `
          <h1 class="score" >Congratulations🎊</h1>
        <h2 class="score" > Your score is ${output}% </h2> `;
          correctEl.textContent = "";
          if (output === score) {
            clearInterval(timer);
          } else {
            output++;
          }
        }, 10);
      }
    }, 1000);
  }
});

{
  /* <button class="reload" onclick="location.reload()">Reload Quiz</button> */
}
