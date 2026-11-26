const translations = {
  uz: {
    about: "haqida",
    collections: "kolleksiyalar",
    projects: "loyihalar",
    campaigns: "kompaniyalar",
    your_card: "savatingiz",
  },
  en: {
    about: "about",
    collections: "kolleksiyalar",
    projects: "loyihalar",
    campaigns: "kompaniyalar",
    your_card: "your card",
  },
};

const elements = document.querySelectorAll(["data-key"]);
const defaultLanguage = "uz";
const currentLanguage = localStorage.getItem("language");

const selectedLangauage = currentLanguage || defaultLanguage;

window.addEventListener("DOMContentLoaded", () => {
  elements.forEach((element) => {
    const key = element.getAttribute("data-key");

    const translation =
      translations?.[selectedLangauage] &&
      translations?.[selectedLangauage]?.[key];

    if (element) {
      element.textContent = translation;
    }

    
  });
});
