// Bootstrap: inicializa nav.js, i18n.js, theme.js y reveal.js. Único
// punto de entrada del sitio (ver plan.md → Project Structure).
document.addEventListener('DOMContentLoaded', function () {
  document.documentElement.classList.add('js-ready');

  if (typeof window.initNav === 'function') {
    window.initNav();
  }
  if (typeof window.initI18n === 'function') {
    window.initI18n();
  }
  if (typeof window.initTheme === 'function') {
    window.initTheme();
  }
  if (typeof window.initReveal === 'function') {
    window.initReveal();
  }
  if (typeof window.initScrollState === 'function') {
    window.initScrollState();
  }

  initServiceCards();
});

// Servicios (US4, FR-009): al hacer hover o dar foco de teclado a una
// tarjeta, se muestra su descripción ampliada. El botón además es
// accionable con Enter/Espacio y con tap en touch, sin depender del
// hover para ser usable.
function initServiceCards() {
  document.querySelectorAll('.service-card').forEach(function (card) {
    var toggle = card.querySelector('.service-card__toggle');
    var extended = card.querySelector('.service-card__extended');
    if (!toggle || !extended) return;

    function show() {
      extended.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
    }

    function hide() {
      extended.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', function () {
      if (extended.hidden) {
        show();
      } else {
        hide();
      }
    });

    card.addEventListener('mouseenter', show);
    card.addEventListener('mouseleave', hide);
    toggle.addEventListener('focus', show);
    card.addEventListener('focusout', function (event) {
      if (!card.contains(event.relatedTarget)) {
        hide();
      }
    });
  });
}
