import { quizData } from "./modules/data.js";
import { renderServices } from "./modules/templates.js";

const { images, questions, content } = quizData;

let servicesToggle = false;
let quizItem = 1;

const servicesBlock = document.getElementById("services-block");
const quizForm = document.getElementById("quiz-form");

const quizFeedback = quizForm.querySelector("#quiz-feedback");
const quizFormImage = quizForm.querySelector("#quiz-form-image");
const questionNumber = quizForm.querySelector("#question-number");
const questionTitle = quizForm.querySelector("#question-title");
const quizBodyContent = quizForm.querySelector("#quiz-body-content");

const servicesBtn = document.getElementById("services-btn");
const btnQuizPrev = document.getElementById("btn-quiz-prev");
const btnQuizNext = document.getElementById("btn-quiz-next");

servicesBtn.addEventListener("click", () => {
  servicesToggle = !servicesToggle;

  servicesToggle
    ? servicesBlock.classList.remove("hidden")
    : servicesBlock.classList.add("hidden");
});
btnQuizPrev.addEventListener("click", () => {
  quizItem--;
  renderQuizItem(quizItem);
});
btnQuizNext.addEventListener("click", () => {
  quizItem++;
  renderQuizItem(quizItem);
});

function renderQuizItem(quizItem) {
  quizItem > 1
    ? btnQuizPrev.classList.remove("hidden")
    : btnQuizPrev.classList.add("hidden");

  if (quizItem === 5) {
    quizFeedback.classList.remove("visually-hidden");
    return;
  }

  quizFormImage.setAttribute("src", images[quizItem - 1]);
  questionNumber.innerHTML = questions[quizItem - 1].number;
  questionTitle.innerHTML = questions[quizItem - 1].text;
  quizBodyContent.innerHTML = content[quizItem - 1];
}

servicesBlock.innerHTML = renderServices();
renderQuizItem(quizItem);
