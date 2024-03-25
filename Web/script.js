// Abrir y cerrar menú desplegable
document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
      dropdown.addEventListener('click', function(event) {
        dropdown.querySelector('.dropdown-content').classList.toggle('show');
      });
    });
  
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(function(openDropdown) {
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        });
      }
    }
  });
  