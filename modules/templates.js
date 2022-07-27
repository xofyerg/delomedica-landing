import { services } from "./data.js";

// ---------- Services ---------- //
export const renderServices = () => {
  const serviceItem = services.map((service) => `<li>${service}</li>`).join("");
  return `
      <ul>${serviceItem}</ul>
    `;
};

// ---------- QUIZ ---------- //
export const renderStepOne = () => {
  return `
      <textarea
        class="textarea-primary"
        placeholder="Введите ответ"
      ></textarea>
    `;
};

export const renderStepTwo = () => {
  const serviceItem = services
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
          ${serviceItem}
      </ul>
    `;
};

export const renderStepThree = () => {
  return `
      <textarea
        class="textarea-primary"
        placeholder="Введите число"
      ></textarea>
    `;
};

export const renderStepFour = () => {
  return `
          <div class="">
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
};
