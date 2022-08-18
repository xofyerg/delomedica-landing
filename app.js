import { renderAllServices } from "./modules/services.js";
import { renderQuiz } from "./modules/quiz.js";

const body = document.body;
const headerMobile = document.querySelector(".header-mobile");
const openLinksBtn = document.querySelector(".header__burger");

const heroDialog = document.querySelector("#hero-dialog");
const openModalBtn = document.querySelector("#open-modal");
const closeModalBtn = heroDialog.querySelector("#close-modal");

openLinksBtn.addEventListener("click", openLinksBtnHandler);

openModalBtn.addEventListener("click", () => openModalHandler(true));
closeModalBtn.addEventListener("click", () => openModalHandler(false));

function openLinksBtnHandler() {
  openLinksBtn.classList.toggle("header__burger");
  openLinksBtn.classList.toggle("btn-cancel");
  openLinksBtn.classList.toggle("btn-header-cancel");

  headerMobile.classList.toggle("open");
  quiz.classList.toggle("hidden");
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

renderAllServices();
renderQuiz();
