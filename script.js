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
