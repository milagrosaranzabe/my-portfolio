// Selector de modo claro/oscuro: persiste en localStorage. El valor
// inicial ya lo aplica un script inline en <head> (evita el flash del
// tema incorrecto); esta función solo sincroniza los botones y conecta
// los listeners.
(function () {
  var STORAGE_KEY = 'theme';

  function storeTheme(theme) {
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* localStorage no disponible — se ignora */
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-switch [data-set-theme]').forEach(function (btn) {
      var isActive = btn.getAttribute('data-set-theme') === theme;
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function setTheme(theme) {
    applyTheme(theme);
    storeTheme(theme);
  }

  function initTheme() {
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current);

    document.querySelectorAll('.theme-switch [data-set-theme]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setTheme(btn.getAttribute('data-set-theme'));
      });
    });
  }

  window.initTheme = initTheme;
})();
