document.getElementById('burger-menu').addEventListener('click', function () {
  var offcanvas = document.getElementById('offcanvas');
  offcanvas.classList.toggle('open');
});

document.getElementById('close-button').addEventListener('click', function () {
  var offcanvas = document.getElementById('offcanvas');
  offcanvas.classList.remove('open');
})