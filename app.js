import { quizData } from "./modules/data.js";
import { renderServices, renderSteps } from "./modules/templates.js";

const { images, questions, content } = quizData;
let quizPage = 1;

// ---------- get dom ---------- //
const body = document.body;
const headerInfo = document.querySelector(".header-info");
const openLinksBtn = document.querySelector(".header__burger");

const openServicesBtn = document.getElementById("services-btn");
const servicesArrow = openServicesBtn.querySelector(".services-open");
const servicesBlock = document.querySelector(".services-block");

const heroDialog = document.getElementById("hero-dialog");
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = heroDialog.querySelector("#close-modal");

const quizForm = document.getElementById("quiz-form");
const quizFeedback = quizForm.querySelector(".quiz-feedback");
const quizFormImage = quizForm.querySelector(".quiz-form__image");
const quizBodySteps = quizForm.querySelector(".quiz-body__steps");
const questionNumber = quizForm.querySelector(".quiz-body__question-number");
const questionTitle = quizForm.querySelector(".quiz-body__question-title");
const quizBodyContent = quizForm.querySelector(".quiz-body__content");
const btnQuizPrev = quizForm.querySelector(".btn-prev");
const btnQuizNext = quizForm.querySelector(".btn-next");

// ---------- listeners ---------- //
openLinksBtn.addEventListener("click", () => {
  openLinksBtn.classList.toggle("header__burger");
  openLinksBtn.classList.toggle("btn-cancel");
  openLinksBtn.classList.toggle("btn-header-cancel");

  headerInfo.classList.toggle("open");
  body.classList.toggle("hide-scroll");
});
openServicesBtn.addEventListener("click", () => {
  servicesBlock.classList.toggle("hidden");

  if (servicesArrow.classList.contains("services-open")) {
    servicesArrow.classList.remove("services-open");
    servicesArrow.classList.add("services-close");
  } else {
    servicesArrow.classList.add("services-open");
    servicesArrow.classList.remove("services-close");
  }
});
openModalBtn.addEventListener("click", () => {
  heroDialog.classList.add("open");
  body.classList.add("hide-scroll");
});
closeModalBtn.addEventListener("click", () => {
  heroDialog.classList.remove("open");
  body.classList.remove("hide-scroll");
});
btnQuizPrev.addEventListener("click", () => {
  quizPage--;
  renderQuiz(quizPage);
});
btnQuizNext.addEventListener("click", () => {
  quizPage++;
  renderQuiz(quizPage);
});

// ---------- main renders ---------- //
function renderQuiz(quizPage) {
  quizBodySteps.innerHTML = renderSteps(quizPage);

  quizPage > 1
    ? btnQuizPrev.classList.remove("hidden")
    : btnQuizPrev.classList.add("hidden");

  if (quizPage === 5) {
    quizFeedback.classList.remove("visually-hidden");
    return;
  }

  quizFormImage.setAttribute("src", images[quizPage - 1]);
  questionNumber.innerHTML = questions[quizPage - 1].number;
  questionTitle.innerHTML = questions[quizPage - 1].text;
  quizBodyContent.innerHTML = content[quizPage - 1];
}

servicesBlock.innerHTML = renderServices();
renderQuiz(quizPage);
