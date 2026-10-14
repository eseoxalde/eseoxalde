(function () {
  var botones = document.querySelectorAll('[data-filtro]');
  var tarjetas = document.querySelectorAll('#lista-proyectos .card');
  var estado = document.getElementById('filter-status');

  botones.forEach(function (boton) {
    boton.addEventListener('click', function () {
      var filtro = boton.dataset.filtro;
      var visibles = 0;
      botones.forEach(function (b) { b.setAttribute('aria-pressed', String(b === boton)); });
      tarjetas.forEach(function (tarjeta) {
        var mostrar = filtro === 'todos' || tarjeta.dataset.cat === filtro;
        tarjeta.hidden = !mostrar;
        if (mostrar) visibles++;
      });
      estado.textContent = visibles + (visibles === 1 ? ' proyecto' : ' proyectos');
    });
  });
})();
