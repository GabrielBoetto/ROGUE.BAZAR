document.addEventListener("DOMContentLoaded", () => {
  // ----- FORMULARIO -----
  const form = document.getElementById('formulario');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert("¡Gracias por tu interés! Te contactaremos pronto.");
    });
  }

  // ----- CAMBIO DE IMAGEN SEGÚN SELECT (para páginas con variantes de color) -----
  const colorSelect = document.getElementById('color-select');
  const productImage = document.getElementById('product-image');

  if (colorSelect && productImage) {
    colorSelect.addEventListener('change', () => {
      const selectedImage = colorSelect.value;
      productImage.src = `./multimedia/${selectedImage}`;
    });
  }

  // ----- GALERÍA PRINCIPAL -----
  const imgMain = document.getElementById('img-main');
  const gallery = document.getElementById('gallery');

  if (imgMain && gallery) {
    const thumbnails = gallery.querySelectorAll('img');

    thumbnails.forEach((thumb) => {
      thumb.style.cursor = 'pointer';
      thumb.addEventListener('click', () => {
        // Animación fade (opcional)
        imgMain.classList.add("fade");
        imgMain.src = thumb.src;
        setTimeout(() => {
          imgMain.classList.remove("fade");
        }, 300);

        // Cambiar imagen activa
        thumbnails.forEach((t) => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    }

    );

    // Marcar primera como activa si ninguna lo está
    const active = gallery.querySelector('.active');
    if (!active && thumbnails.length > 0) {
      thumbnails[0].classList.add('active');
    }
  }

  // ----- LIGHTBOX (si existe) -----
  const lightboxOverlay = document.getElementById('lightbox-overlay');
  const lightboxImage = lightboxOverlay?.querySelector('img');

  if (lightboxOverlay && lightboxImage && gallery) {
    const thumbnails = gallery.querySelectorAll('img');
    thumbnails.forEach((img) => {
      img.addEventListener('click', () => {
        lightboxImage.src = img.src;
        lightboxOverlay.style.display = 'flex';
      });
    });

    lightboxOverlay.addEventListener('click', () => {
      lightboxOverlay.style.display = 'none';
      lightboxImage.src = '';
    });
  }
});
