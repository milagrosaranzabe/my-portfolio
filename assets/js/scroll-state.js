// Header con sombra al scrollear + barra de progreso de lectura.
// Puramente visual: si falla o no corre, el sitio funciona igual.
(function () {
  function initScrollState() {
    var header = document.querySelector('.site-header');
    var progress = document.querySelector('.scroll-progress');
    if (!header && !progress) return;

    function update() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (header) {
        header.classList.toggle('is-scrolled', scrollTop > 8);
      }

      if (progress) {
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var ratio = docHeight > 0 ? scrollTop / docHeight : 0;
        document.documentElement.style.setProperty('--scroll-progress', String(Math.min(1, Math.max(0, ratio))));
      }
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  window.initScrollState = initScrollState;
})();
