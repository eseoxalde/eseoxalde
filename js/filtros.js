(function () {
  var buttons = Array.prototype.slice.call(document.querySelectorAll('[data-filter]'));
  var items = Array.prototype.slice.call(document.querySelectorAll('#lista-proyectos .proj'));
  var status = document.getElementById('filter-status');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');
      var count = 0;
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      items.forEach(function (item) {
        var cats = item.getAttribute('data-cat').split(' ');
        var show = filter === 'todos' || cats.indexOf(filter) !== -1;
        item.hidden = !show;
        if (show) count++;
      });
      status.textContent = count + (count === 1 ? ' proyecto' : ' proyectos');
    });
  });
})();
