// Animación de aparición al hacer scroll sobre los elementos .reveal.
// Respeta prefers-reduced-motion: si el usuario lo pide, se muestra
// todo directamente, sin animar (accesibilidad — principio II).
(function () {
  function initReveal() {
    var targets = document.querySelectorAll('.reveal');
    if (targets.length === 0) return;

    var prefersReducedMotion =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach(function (el) {
        el.classList.add('reveal--visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  window.initReveal = initReveal;
})();
