import { services } from "./data.js";
import { quizData } from "./data.js";

// ---------- Services ---------- //
export const renderServices = () => {
  const serviceItems = services
    .map((service, index) => {
      if (index !== 1 && index !== 11) {
        return `<a href="#">${service}</a>`;
      }
    })
    .join("");
  return `
     <nav>${serviceItems}</nav>
  `;
};

// ---------- QUIZ ---------- //
export const renderSteps = (quizItem) => {
  const stepItems = quizData.steps
    .map(
      (step, index) =>
        `<li class=${index + 1 === quizItem && "active-step"}>${step}</li>`
    )
    .join("");

  return `
    <ul>${stepItems}</ul>
  `;
};

export function renderStepOne() {
  return `
    <textarea
      class="textarea-primary"
      placeholder="Введите ответ"
    ></textarea>
  `;
}

export function renderStepTwo() {
  const serviceItems = services
    .map(
      (service, index) =>
        `
          <li>
            <label class="check" for="serv-check-${index + 1}">
              <input
                id="serv-check-${index + 1}"
                class="check__input visually-hidden"
                type="checkbox"
              />
          
              <span class="check__primary check__box"></span>
              ${service}
            </label>
          </li>
        `
    )
    .join("");

  return `
    <ul class="quiz-body__checks">
      ${serviceItems}
    </ul>
  `;
}

export function renderStepThree() {
  return `
    <textarea
      class="textarea-primary"
      placeholder="Введите число"
    ></textarea>
  `;
}

export function renderStepFour() {
  return `
    <div class="check-wrap">
      <label class="check" for="med-radio">
        <input
          id="med-radio"
          class="check__input visually-hidden"
          type="radio"
          name="radio-group"
          value="В медцентре"
          checked
        />
        <span class="check__primary check__radio"></span>
        В медцентре
      </label>
      <label class="check" for="need-radio">
        <input
          id="need-radio"
          class="check__input visually-hidden"
          type="radio"
          name="radio-group"
          value="Требуется выездная бригада"
        />
        <span class="check__primary check__radio"></span>
        Требуется выездная бригада
      </label>
    </div>
  `;
}
