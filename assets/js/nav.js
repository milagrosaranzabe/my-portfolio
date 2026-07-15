// Navegación: resalta la sección activa según los ids reales del DOM
// (no hardcodea ids — los lee de los href de la nav), según
// contracts/navigation-anchors.md.
(function () {
  function initNav() {
    var navLinks = Array.prototype.slice.call(
      document.querySelectorAll('.site-nav__list a[href^="#"]')
    );

    if (navLinks.length === 0) return;

    var sections = navLinks
      .map(function (link) {
        var id = link.getAttribute('href').slice(1);
        return document.getElementById(id);
      })
      .filter(Boolean);

    function setActive(id) {
      navLinks.forEach(function (link) {
        var isActive = link.getAttribute('href') === '#' + id;
        if (isActive) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }

    if ('IntersectionObserver' in window && sections.length > 0) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );

      sections.forEach(function (section) {
        observer.observe(section);
      });
    }

    // Estado inicial: la primera sección visible en carga.
    if (sections.length > 0) {
      setActive(sections[0].id);
    }
  }

  window.initNav = initNav;
})();
