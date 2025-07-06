document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("¡Gracias por tu interés! Te contactaremos pronto.");
  });
  const colorSelect = document.getElementById('color-select');
const productImage = document.getElementById('product-image');

colorSelect.addEventListener('change', () => {
  const selectedImage = colorSelect.value;
  productImage.src = `./multimedia/${selectedImage}`;
});
// gallery.js
const imgMain = document.getElementById('img-main');
const galleryImages = document.querySelectorAll('.gallery-container img');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImage = lightboxOverlay.querySelector('img');

galleryImages.forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
    // Cambia la imagen principal
    imgMain.src = img.src;

    // Marca activa
    galleryImages.forEach(i => i.classList.remove('active'));
    img.classList.add('active');

    // Abre lightbox con la imagen clickeada
    lightboxImage.src = img.src;
    lightboxOverlay.style.display = 'flex';
  });
});

// Cierra el lightbox al hacer clic en la imagen ampliada o fuera de ella
lightboxOverlay.addEventListener('click', () => {
  lightboxOverlay.style.display = 'none';
  lightboxImage.src = '';
});

// Marcar la primera imagen como activa al cargar
if (galleryImages.length > 0) {
  galleryImages[0].classList.add('active');
}
