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

    /* EXPERIENCIA */
    exp_1_desc:
      "Liderazgo del área de QA, definición de estrategia de testing y validaciones pre-release.",
    exp_2_desc:
      "Testing funcional y exploratorio, regresión manual y validación de APIs.",
    exp_3_desc:
      "Proyectos de e-commerce, diseño de casos de prueba y testing funcional.",
    exp_4_desc:
      "Testing manual en proyectos de e-commerce y publicidad digital.",

    /* SERVICIOS */
    service_1_title: "Validación Funcional",
    service_1_text:
      "Validación de funcionalidades, criterios de aceptación y flujos críticos.",
    service_2_title: "Regresión y Smoke",
    service_2_text:
      "Ejecución de pruebas de regresión para asegurar estabilidad.",
    service_3_title: "APIs y Datos",
    service_3_text:
      "Validación funcional de APIs y bases de datos relacionales.",
    service_4_title: "Análisis de Riesgos",
    service_4_text:
      "Identificación temprana de riesgos funcionales.",

    /* SKILLS */
    skill_1_title: "Testing Manual y Exploratorio",
    skill_1_text: "Validación de escenarios y edge cases.",
    skill_2_title: "Diseño de Casos de Prueba",
    skill_2_text: "Casos claros, reutilizables y trazables.",
    skill_3_title: "Análisis de Riesgos",
    skill_3_text: "Priorización basada en impacto.",
    skill_4_title: "Comunicación",
    skill_4_text: "Trabajo colaborativo con producto y desarrollo.",
    skill_5_title: "Agile QA",
    skill_5_text: "QA integrada a equipos ágiles.",

    /* QA */
    qa_title: "Casos de Prueba y Controles de Calidad",
    qa_dark_title: "Modo Oscuro",
    qa_dark_desc:
      "Validación del cambio de tema y persistencia de la configuración.",
    qa_lang_title: "Cambio de Idioma",
    qa_lang_desc:
      "Validación de traducción completa del contenido.",
    qa_a11y_title: "Accesibilidad",
    qa_a11y_desc:
      "Controles de accesibilidad y navegación por teclado.",

    footer_github: "GitHub"
  },

  en: {
    /* NAV */
    nav_experience: "Experience",
    nav_services: "Services",
    nav_skills: "Skills",
    nav_email: "Email",
    nav_linkedin: "LinkedIn",

    /* HERO */
    welcome: "Welcome",
    role: "QA Analyst | Web & Mobile",
    hero_text:
      "QA Analyst with over 3 years of experience in manual testing of web and mobile applications.",
    cv_download: "Download CV",

    /* SECCIONES */
    experience_title: "Professional Experience",
    services_title: "What I do as a QA",
    skills_title: "QA Skills",

    /* EXPERIENCIA */
    exp_1_desc:
      "QA leadership, test strategy definition and pre-release validations.",
    exp_2_desc:
      "Functional and exploratory testing, manual regression and API validation.",
    exp_3_desc:
      "E-commerce projects, test case design and functional testing.",
    exp_4_desc:
      "Manual testing for e-commerce and digital advertising projects.",

    /* SERVICIOS */
    service_1_title: "Functional Validation",
    service_1_text:
      "Validation of functionalities, acceptance criteria and critical flows.",
    service_2_title: "Regression & Smoke",
    service_2_text:
      "Execution of regression tests to ensure stability.",
    service_3_title: "APIs & Data",
    service_3_text:
      "Functional validation of APIs and relational databases.",
    service_4_title: "Risk Analysis",
    service_4_text:
      "Early identification of functional risks.",

    /* SKILLS */
    skill_1_title: "Manual & Exploratory Testing",
    skill_1_text: "Validation of scenarios and edge cases.",
    skill_2_title: "Test Case Design",
    skill_2_text: "Clear, reusable and traceable test cases.",
    skill_3_title: "Risk Analysis",
    skill_3_text: "Impact-based prioritization.",
    skill_4_title: "Communication",
    skill_4_text: "Collaborative work with product and development teams.",
    skill_5_title: "Agile QA",
    skill_5_text: "QA integrated into agile teams.",

    /* QA */
    qa_title: "Test Cases & Quality Checks",
    qa_dark_title: "Dark Mode",
    qa_dark_desc:
      "Theme switching and configuration persistence validation.",
    qa_lang_title: "Language Switch",
    qa_lang_desc:
      "Full content translation validation.",
    qa_a11y_title: "Accessibility",
    qa_a11y_desc:
      "Accessibility and keyboard navigation checks.",

    footer_github: "GitHub"
  }
};

/*********************************
 * APLICAR IDIOMA
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

  /* Botón idioma */
  const langBtn = document.getElementById("toggle-lang");
  if (langBtn) {
    langBtn.textContent = lang.toUpperCase();
  }

  /* CV dinámico */
  const cvBtn = document.getElementById("cv-download");
  if (cvBtn) {
    cvBtn.href =
      lang === "en"
        ? "QA Analyst - Milagros Aranzabe - CV.pdf"
        : "Analista QA - Milagros Aranzabe - CV.pdf";
    cvBtn.textContent = texts[lang].cv_download;
  }
}

/*********************************
 * TEMA OSCURO / CLARO
 *********************************/
function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);

  const themeBtn = document.getElementById("toggle-theme");
  if (themeBtn) {
    themeBtn.textContent = isDark ? "🌙" : "☀️";
  }

  localStorage.setItem("theme", isDark ? "dark" : "light");
}

/*********************************
 * MENÚ RESPONSIVE
 *********************************/
function responsiveMenu() {
  const nav = document.getElementById("nav");
  if (nav) {
    nav.classList.toggle("responsive");
  }
}

/*********************************
 * CERRAR MENÚ AL HACER CLICK
 *********************************/
function closeMenuOnClick() {
  const nav = document.getElementById("nav");
  if (nav && nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
  }
}

/*********************************
 * INIT
 *********************************/
document.addEventListener("DOMContentLoaded", () => {
  /* Idioma inicial */
  applyLanguage(currentLang);

  /* Tema inicial */
  const savedTheme = localStorage.getItem("theme");
  applyTheme(savedTheme === "dark");

  /* Botón idioma */
  const langBtn = document.getElementById("toggle-lang");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      applyLanguage(currentLang === "es" ? "en" : "es");
      closeMenuOnClick();
    });
  }

  /* Botón tema */
  const themeBtn = document.getElementById("toggle-theme");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      applyTheme(!document.body.classList.contains("dark"));
      closeMenuOnClick();
    });
  }

  /* Cerrar menú al tocar links */
  document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", closeMenuOnClick);
  });
});

exp_1_date: "Jul 2024 – Actualidad",
exp_2_date: "Nov 2023 – Jul 2024",
exp_3_date: "Jun 2023 – Nov 2023",
exp_4_date: "Sep 2022 – Jun 2023",

edu_1_date: "2022 – 2023",

exp_1_date: "Jul 2024 – Present",
exp_2_date: "Nov 2023 – Jul 2024",
exp_3_date: "Jun 2023 – Nov 2023",
exp_4_date: "Sep 2022 – Jun 2023",

edu_1_date: "2022 – 2023",

