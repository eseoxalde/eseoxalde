/* Menú hamburguesa para pantallas chicas */
(function () {
  var boton = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu');
  if (!boton || !menu) return;

  function abrir(estado) {
    boton.setAttribute('aria-expanded', String(estado));
    boton.setAttribute('aria-label', estado ? 'Cerrar menú' : 'Abrir menú');
    menu.classList.toggle('is-open', estado);
  }

  boton.addEventListener('click', function () {
    abrir(boton.getAttribute('aria-expanded') !== 'true');
  });

  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) abrir(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && boton.getAttribute('aria-expanded') === 'true') {
      abrir(false);
      boton.focus();
    }
  });

  window.matchMedia('(min-width: 821px)').addEventListener('change', function (e) {
    if (e.matches) abrir(false);
  });
})();
