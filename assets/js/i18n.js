// Selector de idioma ES/EN: alterna nodos [data-lang] vía la clase
// .lang-hidden, persiste en localStorage y no recarga la página
// (conserva la sección/scroll actual), según
// contracts/content-i18n-contract.md.
(function () {
  var STORAGE_KEY = 'lang';
  var DEFAULT_LANG = 'es';

  function getStoredLang() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage no disponible (modo privado, etc.) — se ignora */
    }
  }

  function applyLang(lang) {
    document.querySelectorAll('[data-lang]').forEach(function (node) {
      if (node.getAttribute('data-lang') === lang) {
        node.classList.remove('lang-hidden');
      } else {
        node.classList.add('lang-hidden');
      }
    });

    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('.lang-switch [data-set-lang]').forEach(function (btn) {
      var isActive = btn.getAttribute('data-set-lang') === lang;
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function setLang(lang) {
    applyLang(lang);
    storeLang(lang);
  }

  function initI18n() {
    var initialLang = getStoredLang() || DEFAULT_LANG;
    applyLang(initialLang);

    document.querySelectorAll('.lang-switch [data-set-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-set-lang'));
      });
    });
  }

  window.initI18n = initI18n;
})();
