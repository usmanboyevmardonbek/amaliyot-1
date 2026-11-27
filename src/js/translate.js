import { translations } from "./translations.js";

const elements = document.querySelectorAll("[data-key]");
const defaultLanguage = "uz";
const currentLanguage = localStorage.getItem("language");
const selectedLanguage = currentLanguage || defaultLanguage;

window.addEventListener("DOMContentLoaded", () => {
  elements.forEach((element) => {
    const key = element.getAttribute("data-key");
    const translation = translations?.[selectedLanguage] && 
    translations?.[selectedLanguage]?.[key]

    if (translation) {
      element.textContent = translation
    }
  })
})
