/* Modo claro/oscuro. El tema inicial lo fija el script del <head> para evitar parpadeos. */
(function () {
  var raiz = document.documentElement;
  var boton = document.querySelector('.theme-toggle');
  if (!boton) return;

  function aplicar(tema) {
    raiz.dataset.theme = tema;
    boton.setAttribute('aria-label', tema === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  }

  function guardado() {
    try { return localStorage.getItem('tema'); } catch (e) { return null; }
  }

  aplicar(raiz.dataset.theme);

  boton.addEventListener('click', function () {
    var nuevo = raiz.dataset.theme === 'dark' ? 'light' : 'dark';
    aplicar(nuevo);
    try { localStorage.setItem('tema', nuevo); } catch (e) {}
  });

  // Si la persona nunca eligió, se sigue el cambio del sistema.
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!guardado()) aplicar(e.matches ? 'dark' : 'light');
  });
})();
