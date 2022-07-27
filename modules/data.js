import {
  renderStepOne,
  renderStepTwo,
  renderStepThree,
  renderStepFour,
} from "./templates.js";

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
      text: `Укажите вид необходимой услуги <br> (Можно выбрать несколько вариантов)`,
    },
    {
      number: 3,
      text: `Укажите количество сотрудников, которым нужно провести профосмотр`,
    },
    {
      number: 4,
      text: "Вы планируете пройти профосмотр в одном из наших медцентров или требуется выездная бригада",
    },
  ],
  content: [
    renderStepOne(),
    renderStepTwo(),
    renderStepThree(),
    renderStepFour(),
  ],
};

// export function renderServices() {
//   const serviceItem = services.map((service) => `<li>${service}</li>`).join("");
//   return `
//     <ul>${serviceItem}</ul>
//   `;
// }
