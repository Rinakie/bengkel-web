// Lightbox gambar
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

document.querySelectorAll('.grid-gambar img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Form WhatsApp
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let telp = document.getElementById("telp").value;
  let layanan = document.getElementById("layanan").value;

  let pesan = `Halo, saya ingin memesan layanan:
- Nama: ${nama}
- No HP: ${telp}
- Layanan: ${layanan}`;

  let url = "https://wa.me/6285839171504?text=" + encodeURIComponent(pesan);
  window.open(url, "_blank");
});
