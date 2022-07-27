import { quizData } from "./modules/data.js";
import { renderServices, renderSteps } from "./modules/templates.js";

const { images, questions, content } = quizData;

let headerToggle = false;
let servicesToggle = false;
let quizItem = 1;

// ---------- get dom ---------- //
const headerBurger = document.querySelector(".header__burger");

const servicesBlock = document.getElementById("services-block");

const heroDialogModal = document.getElementById("hero-dialog-modal");
const heroBtnCancel = heroDialogModal.querySelector("#hero-btn-cancel");

const heroContentOpen = document.getElementById("hero-content-open");

const quizForm = document.getElementById("quiz-form");

const quizFeedback = quizForm.querySelector(".quiz-feedback");
const quizFormImage = quizForm.querySelector(".quiz-form__image");
const quizBodySteps = quizForm.querySelector(".quiz-body__steps");
const questionNumber = quizForm.querySelector(".quiz-body__question-number");
const questionTitle = quizForm.querySelector(".quiz-body__question-title");
const quizBodyContent = quizForm.querySelector(".quiz-body__content");

const servicesBtn = document.getElementById("services-btn");
const servicesArrow = servicesBtn.querySelector(
  ".header-content__services-arrow-down"
);

const btnQuizPrev = document.getElementById("btn-quiz-prev");
const btnQuizNext = document.getElementById("btn-quiz-next");

// ---------- listeners ---------- //
headerBurger.addEventListener("click", () => {
  headerToggle = !headerToggle;

  if (headerToggle) {
    headerBurger.classList.remove("header__burger", "hidden");
    headerBurger.classList.add("btn-cancel");
  } else {
    headerBurger.classList.add("header__burger");
    headerBurger.classList.remove("btn-cancel");
  }
});
servicesBtn.addEventListener("click", () => {
  servicesToggle = !servicesToggle;

  if (servicesToggle) {
    servicesBlock.classList.remove("hidden");

    servicesArrow.classList.remove("header-content__services-arrow-down");
    servicesArrow.classList.add("header-content__services-arrow-up");
  } else {
    servicesBlock.classList.add("hidden");

    servicesArrow.classList.add("header-content__services-arrow-down");
    servicesArrow.classList.remove("header-content__services-arrow-up");
  }
});
heroContentOpen.addEventListener("click", () => {
  heroDialogModal.classList.remove("hidden");
});
heroBtnCancel.addEventListener("click", () => {
  heroDialogModal.classList.add("hidden");
});
btnQuizPrev.addEventListener("click", () => {
  quizItem--;
  renderQuizItem(quizItem);
});
btnQuizNext.addEventListener("click", () => {
  quizItem++;
  renderQuizItem(quizItem);
});

// ---------- main renders ---------- //
function renderQuizItem(quizItem) {
  quizBodySteps.innerHTML = renderSteps(quizItem);

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
