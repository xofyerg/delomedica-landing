import { renderServices } from "../helpers/templates.js";

// ---------- get dom ---------- //
const openServicesMobile = document.querySelector(
  ".header-mobile__services-btn"
);
const openServicesDesktop = document.querySelector(
  ".header-content__services-btn"
);
const toggleServicesArrow = openServicesMobile.querySelector(".services-open");
const servicesBlockMobile = document.querySelector("#services-block-mobile");
const servicesBlockDesktop = document.querySelector("#services-block-desktop");

// ---------- listeners ---------- //
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

// ---------- functions ---------- //
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

export function renderAllServices() {
  servicesBlockDesktop.innerHTML = renderServices();
  servicesBlockMobile.innerHTML = renderServices();
}
