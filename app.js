import { questions } from "./modules/data.js";
import { quizBody } from "./modules/data.js";

let page = 1;

const quizForm = document.getElementById("quiz-form");
const quizImage = quizForm.querySelector("#quiz-form-image");
const questionTitle = quizForm.querySelector("#question-title");
const questionNumber = quizForm.querySelector("#question-number");
const quizFormBody = quizForm.querySelector("#quiz-form-body");

const btnPrev = document.getElementById("btn-quiz-prev");
const btnNext = document.getElementById("btn-quiz-next");

btnPrev.addEventListener("click", prevQuiz);
btnNext.addEventListener("click", nextQuiz);

function prevQuiz() {
  page--;
  quizImage.setAttribute("src", `assets/images/quiz-${page}.png`);
  questionTitle.innerHTML = questions[page - 1];
  questionNumber.innerHTML = page;
  quizFormBody.innerHTML = quizBody[page - 1];

  if (page === 1) {
    btnPrev.classList.add("visually-hidden");
  }
}

function nextQuiz() {
  if (page === 1) {
    btnPrev.classList.remove("visually-hidden");
  }

  page++;
  quizImage.setAttribute("src", `assets/images/quiz-${page}.png`);
  questionTitle.innerHTML = questions[page - 1];
  questionNumber.innerHTML = page;
  quizFormBody.innerHTML = quizBody[page - 1];
}

console.log(quizFormBody);
