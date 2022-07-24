import { services } from "./data.js";

export const renderServices = () => {
  return services.map(serviceItem).join("");
};

const serviceItem = (service, index) => {
  return `
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
    `;
};
