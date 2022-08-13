import { quizData } from "./modules/data.js";
import { renderServices, renderSteps } from "./modules/templates.js";

const { images, questions, content } = quizData;
let quizPage = 1;

// ---------- get dom ---------- //
const body = document.body;
const headerMobile = document.querySelector(".header-mobile");
const openLinksBtn = document.querySelector(".header__burger");

const openServicesMobile = document.querySelector(
  ".header-mobile__services-btn"
);
const openServicesDesktop = document.querySelector(
  ".header-content__services-btn"
);
const toggleServicesArrow = openServicesMobile.querySelector(".services-open");

const servicesBlockMobile = document.getElementById("services-block-mobile");
const servicesBlockDesktop = document.getElementById("services-block-desktop");

const heroDialog = document.getElementById("hero-dialog");
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = heroDialog.querySelector("#close-modal");

const quiz = document.getElementById("quiz");
const quizForm = quiz.querySelector("#quiz-form");
const quizFeedback = quizForm.querySelector(".quiz-feedback");
const quizFormImage = quizForm.querySelector(".quiz-form__image");
const quizBodySteps = quizForm.querySelector(".quiz-body__steps");
const questionNumber = quizForm.querySelector(".quiz-body__question-number");
const questionTitle = quizForm.querySelector(".quiz-body__question-title");
const quizBodyContent = quizForm.querySelector(".quiz-body__content");
const btnQuizPrev = quizForm.querySelector(".btn-prev");
const btnQuizNext = quizForm.querySelector(".btn-next");

// ---------- listeners ---------- //
openLinksBtn.addEventListener("click", openLinksBtnHandler);

openServicesMobile.addEventListener("click", openServicesMobileHandler);
openServicesDesktop.addEventListener("mouseover", () =>
  openServicesDesktopHandler(true)
);
openServicesDesktop.addEventListener("mouseout", () =>
  openServicesDesktopHandler(false)
);
servicesBlockDesktop.addEventListener("mouseover", () =>
  openServicesDesktopHandler(true)
);
servicesBlockDesktop.addEventListener("mouseout", () =>
  openServicesDesktopHandler(false)
);

openModalBtn.addEventListener("click", () => openModalHandler(true));
closeModalBtn.addEventListener("click", () => openModalHandler(false));

btnQuizPrev.addEventListener("click", () => toggleQuestionsHandler(true));
btnQuizNext.addEventListener("click", () => toggleQuestionsHandler());

// ---------- functions ---------- //
function openLinksBtnHandler() {
  openLinksBtn.classList.toggle("header__burger");
  openLinksBtn.classList.toggle("btn-cancel");
  openLinksBtn.classList.toggle("btn-header-cancel");

  headerMobile.classList.toggle("open");
  quiz.classList.toggle("hidden");
}

function openServicesMobileHandler() {
  servicesBlockMobile.classList.toggle("hidden");

  if (toggleServicesArrow.classList.contains("services-open")) {
    toggleServicesArrow.classList.remove("services-open");
    toggleServicesArrow.classList.add("services-close");
  } else {
    toggleServicesArrow.classList.add("services-open");
    toggleServicesArrow.classList.remove("services-close");
  }
}

function openServicesDesktopHandler(option) {
  option
    ? servicesBlockDesktop.classList.remove("hidden")
    : servicesBlockDesktop.classList.add("hidden");
}

function openModalHandler(option) {
  if (option) {
    heroDialog.classList.add("open");
    body.classList.add("hide-scroll");
  } else {
    heroDialog.classList.remove("open");
    body.classList.remove("hide-scroll");
  }
}

function toggleQuestionsHandler(option) {
  option ? quizPage-- : quizPage++;
  renderQuiz(quizPage);
}

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

servicesBlockDesktop.innerHTML = renderServices();
servicesBlockMobile.innerHTML = renderServices();
renderQuiz(quizPage);
