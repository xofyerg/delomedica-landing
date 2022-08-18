import { quizData } from "../helpers/data.js";
import { renderSteps } from "../helpers/templates.js";

let quizPage = 1;
const { images, questions, content } = quizData;

// ---------- get dom ---------- //
const quiz = document.querySelector("#quiz");
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
btnQuizPrev.addEventListener("click", () => toggleQuestionsHandler(true));
btnQuizNext.addEventListener("click", () => toggleQuestionsHandler());

// ---------- functions ---------- //
function toggleQuestionsHandler(option) {
  option ? quizPage-- : quizPage++;
  renderQuiz();
}

export function renderQuiz() {
  quizBodySteps.innerHTML = renderSteps(quizPage);

  quizPage > 1
    ? btnQuizPrev.classList.remove("hidden")
    : btnQuizPrev.classList.add("hidden");

  if (quizPage === 5) {
    quizFeedback.classList.remove("visually-hidden");
    btnQuizPrev.removeEventListener("click", () =>
      toggleQuestionsHandler(true)
    );
    btnQuizNext.removeEventListener("click", () => toggleQuestionsHandler());
    return;
  }

  quizFormImage.setAttribute("src", images[quizPage - 1]);
  questionNumber.innerHTML = questions[quizPage - 1].number;
  questionTitle.innerHTML = questions[quizPage - 1].text;
  quizBodyContent.innerHTML = content[quizPage - 1];
}
