/*********************************
 * ESTADO GLOBAL
 *********************************/
let currentLang = "es";

/*********************************
 * TEXTOS i18n
 *********************************/
const texts = {
  es: {
    /* NAV */
    nav_experience: "Experiencia",
    nav_services: "Servicios",
    nav_skills: "Habilidades",
    nav_email: "Email",
    nav_linkedin: "LinkedIn",

    /* HERO */
    welcome: "Bienvenidos",
    role: "QA Analyst | Web y Mobile",
    hero_text:
      "Analista QA con más de 3 años de experiencia en testing manual de aplicaciones web y mobile.",
    cv_download: "Descargar CV",

    /* SECCIONES */
    experience_title: "Experiencia Profesional",
    services_title: "Qué hago como QA",
    skills_title: "Competencias QA",
    education_title: "Formación",
    qa_title: "Ejemplos de Casos de Prueba y Controles de Calidad",

    /* EXPERIENCIA */
    exp_1_date: "Jul 2024 – Actualidad",
    exp_1_desc:
      "Liderazgo del área de QA, definición de estrategia de testing y validaciones pre-release.",
    exp_2_date: "Nov 2023 – Jul 2024",
    exp_2_desc:
      "Testing funcional y exploratorio, regresión manual y validación de APIs.",
    exp_3_date: "Jun 2023 – Nov 2023",
    exp_3_desc:
      "Proyectos de e-commerce, diseño de casos de prueba y testing funcional.",
    exp_4_date: "Sep 2022 – Jun 2023",
    exp_4_desc:
      "Testing manual en proyectos de e-commerce y publicidad digital.",

    /* QA */
    qa_objective: "Objetivo",
    qa_testcases: "Casos de Prueba",
    qa_expected: "Resultado esperado:",
    qa_dm_title: "Funcionalidad: Modo Oscuro",
    qa_dm_objective:
      "Validar el comportamiento del cambio de tema, la consistencia visual y la persistencia de la configuración entre sesiones.",
    qa_lang_title: "Funcionalidad: Cambio de Idioma (ES / EN)",
    qa_lang_objective:
      "Validar la correcta traducción de los textos, la consistencia del contenido y la cobertura total de los elementos visibles.",
    qa_a11y_title: "Controles de Accesibilidad (a11y)",

    /* EDUCATION */
    edu_1_title: "Testing QA – Educación IT",
    edu_1_date: "2022 – 2023",
    edu_1_desc:
      "Formación orientada a Testing Manual, Automatizado, APIs, Bases de datos SQL, UX/UI, HTML, CSS e introducción a Java.",

    footer_github: "GitHub"
  },

  en: {
    nav_experience: "Experience",
    nav_services: "Services",
    nav_skills: "Skills",
    nav_email: "Email",
    nav_linkedin: "LinkedIn",

    welcome: "Welcome",
    role: "QA Analyst | Web & Mobile",
    hero_text:
      "QA Analyst with over 3 years of experience in manual testing of web and mobile applications.",
    cv_download: "Download CV",

    experience_title: "Professional Experience",
    services_title: "What I do as a QA",
    skills_title: "QA Skills",
    education_title: "Education",
    qa_title: "Test Cases & Quality Checks",

    exp_1_date: "Jul 2024 – Present",
    exp_1_desc:
      "QA leadership, test strategy definition and pre-release validations.",

    qa_objective: "Objective",
    qa_testcases: "Test Cases",
    qa_expected: "Expected result:",
    qa_dm_title: "Feature: Dark Mode",
    qa_dm_objective:
      "Validate theme switching behavior and persistence.",
    qa_lang_title: "Feature: Language Switch (ES / EN)",
    qa_lang_objective:
      "Validate full content translation and consistency.",
    qa_a11y_title: "Accessibility Checks",

    edu_1_title: "QA Testing – Educación IT",
    edu_1_date: "2022 – 2023",
    edu_1_desc:
      "Training focused on manual testing, APIs, SQL databases, UX/UI, HTML, CSS and Java basics.",

    footer_github: "GitHub"
  }
};

/*********************************
 * FUNCIONES
 *********************************/
function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (texts[lang][key]) {
      el.textContent = texts[lang][key];
    }
  });

  const cvBtn = document.getElementById("cv-download");
  if (cvBtn) {
    cvBtn.href =
      lang === "en"
        ? "QA Analyst - Milagros Aranzabe - CV.pdf"
        : "Analista QA - Milagros Aranzabe - CV.pdf";
    cvBtn.textContent = texts[lang].cv_download;
  }

  document.getElementById("toggle-lang").textContent = lang.toUpperCase();
}

function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  document.getElementById("toggle-theme").textContent = isDark ? "🌙" : "☀️";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function toggleMenu() {
  document.getElementById("nav").classList.toggle("responsive");
}

function closeMenu() {
  document.getElementById("nav").classList.remove("responsive");
}

/*********************************
 * INIT
 *********************************/
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);
  applyTheme(localStorage.getItem("theme") === "dark");

  document.getElementById("toggle-lang").onclick = () => {
    applyLanguage(currentLang === "es" ? "en" : "es");
    closeMenu();
  };

  document.getElementById("toggle-theme").onclick = () => {
    applyTheme(!document.body.classList.contains("dark"));
    closeMenu();
  };

  document.getElementById("icono-nav").onclick = toggleMenu;

  document.querySelectorAll("#nav a").forEach(a =>
    a.addEventListener("click", closeMenu)
  );
});
