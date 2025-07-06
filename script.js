document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("¡Gracias por tu interés! Te contactaremos pronto.");
  });
  document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'block';
    });
  });
  
  document.querySelectorAll('.close').forEach(span => {
    span.addEventListener('click', () => {
      const modalId = span.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'none';
    });
  });
  
  // Cerrar modal al hacer click fuera del contenido
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });
  