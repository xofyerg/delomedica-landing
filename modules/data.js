// import quiz_1 from "../assets/images/quiz-1.png";
// import quiz_2 from "../assets/images/quiz-2.png";
// import quiz_3 from "../assets/images/quiz-3.png";
// import quiz_4 from "../assets/images/quiz-4.png";
// import { renderServices } from "./templates.js";

export const services = [
  "Предварительный/периодический медицинский осмотр",
  "Выездной медициский осмотр (профосмотр)",
  "Личные медицинские книжки (ЛМК)",
  "Психиатрическое освидетельствование",
  "Предрейсовые/послерейсовые профосмотры",
  "Предсменные/послесменные профосмотры",
  "Организация здравпункта на предприятии",
  "Диспанцеризация",
  "Вакцинация",
  "Помощь в организации аттестации рабочих мест (СОУТ)",
  "Тендерный отдел",
  "Я не знаю, нужна помощь в подборе",
];

export const quizData = {
  images: [
    "assets/images/quiz-1.png",
    "assets/images/quiz-2.png",
    "assets/images/quiz-3.png",
    "assets/images/quiz-4.png",
  ],
  questions: [
    { number: 1, text: "Чем занимается ваша организация?" },
    {
      number: 2,
      text: "Укажите вид необходимой услуги (Можно выбрать несколько вариантов)",
    },
    {
      number: 3,
      text: "Укажите количество сотрудников, которым нужно провести профосмотр",
    },
    {
      number: 4,
      text: "Вы планируете пройти профосмотр в одном из наших медцентров или требуется выездная бригада",
    },
  ],
  content: [
    quizStepOne(),
    quizStepTwo().join(""),
    quizStepThree(),
    quizStepFour(),
  ],
};

function quizStepOne() {
  return `
    <textarea
      class="textarea-primary"
      placeholder="Введите ответ"
    ></textarea>
  `;
}

function quizStepTwo() {
  return services.map(
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
  );
}

function quizStepThree() {
  return `
    <textarea
      class="textarea-primary"
      placeholder="Введите число"
    ></textarea>
  `;
}

function quizStepFour() {
  return `
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
  `;
}

export function renderServices() {
  return services.map((service) => `<li>${service}</li>`);
}
