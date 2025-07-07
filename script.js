document.addEventListener("DOMContentLoaded", () => {
  // FORMULARIO (si existe)
  const form = document.getElementById('formulario');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert("¡Gracias por tu interés! Te contactaremos pronto.");
    });
  }

  // SELECT de colores (si existe)
  const colorSelect = document.getElementById('color-select');
  const productImage = document.getElementById('product-image');

  if (colorSelect && productImage) {
    colorSelect.addEventListener('change', () => {
      const selectedImage = colorSelect.value;
      productImage.src = `./multimedia/${selectedImage}`;
    });
  }

  // GALERÍA: cambia imagen principal al hacer click en miniaturas
  const imgMain = document.getElementById('img-main');
  const gallery = document.getElementById('gallery');

  if (imgMain && gallery) {
    const thumbnails = gallery.querySelectorAll('img');

    thumbnails.forEach((thumb) => {
      thumb.style.cursor = 'pointer';
      thumb.addEventListener('click', () => {
        imgMain.classList.add("fade");
        imgMain.src = thumb.src;

        setTimeout(() => {
          imgMain.classList.remove("fade");
        }, 200);

        thumbnails.forEach((t) => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  }
});
