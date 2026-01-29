document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     MENU RESPONSIVE
  ===================== */
  window.responsiveMenu = function () {
    const nav = document.getElementById("nav");
    if (nav) {
      nav.className = nav.className === "" ? "responsive" : "";
    }
  };

  /* =====================
     DARK MODE
  ===================== */
  const themeBtn = document.getElementById("toggle-theme");

  if (themeBtn) {
    // Estado inicial
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }

    themeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      document.body.classList.toggle("dark");

      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
      );
    });
  } else {
    console.warn("Botón toggle-theme no encontrado");
  }

  /* =====================
     LANGUAGE SWITCH
  ===================== */
  const langBtn = document.getElementById("toggle-lang");
  let currentLang = localStorage.getItem("lang") || "es";

  const texts = {
    es: {
      welcome: "Bienvenida",
      role: "QA Analyst | Web y Mobile",
      hero_text:
        "Analista QA con más de 3 años de experiencia en testing manual de aplicaciones web y mobile, trabajando en productos digitales y equipos ágiles. Mi enfoque está en asegurar la calidad funcional, la estabilidad de los releases y minimizar riesgos en producción."
    },
    en: {
      welcome: "Welcome",
      role: "QA Analyst | Web & Mobile",
      hero_text:
        "QA Analyst with over 3 years of experience in manual testing of web and mobile applications, working on digital products and agile teams. My focus is on ensuring functional quality, release stability, and minimizing production risks."
    }
  };

  function applyLanguage(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (texts[lang][key]) {
        el.textContent = texts[lang][key];
      }
    });
  }

  // Estado inicial
  applyLanguage(currentLang);

  if (langBtn) {
    langBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      currentLang = currentLang === "es" ? "en" : "es";
      localStorage.setItem("lang", currentLang);
      applyLanguage(currentLang);
    });
  } else {
    console.warn("Botón toggle-lang no encontrado");
    }
}); 

window.responsiveMenu = function () {
  const nav = document.getElementById("nav");
  if (nav) {
    nav.classList.toggle("responsive");
  }
};

function applyLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (texts[lang][key]) {
      el.textContent = texts[lang][key];
    }
  });

  // Mostrar CV correcto
  document.querySelectorAll(".btn-cv").forEach(btn => {
    btn.style.display =
      btn.dataset.lang === lang ? "inline-block" : "none";
  });

  // Marcar idioma activo
  document.getElementById("toggle-lang").textContent =
    lang === "es" ? "ES" : "EN";
}

let currentLang = "es";

document.getElementById("toggle-lang").addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  applyLanguage(currentLang);
});

const themeBtn = document.getElementById("toggle-theme");

function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  themeBtn.textContent = isDark ? "🌙" : "☀️";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

themeBtn.addEventListener("click", () => {
  applyTheme(!document.body.classList.contains("dark"));
});

// Al cargar
applyTheme(localStorage.getItem("theme") === "dark");


document.getElementById("toggle-lang").textContent =
  lang === "es" ? "ES" : "EN";

    
