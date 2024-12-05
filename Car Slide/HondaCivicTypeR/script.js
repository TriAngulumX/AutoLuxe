/// prev and next start
let slideIndex = 0; // Indeks slide awal

// Fungsi untuk menampilkan slide berdasarkan indeks
function showSlides(n) {
  let slides = document.querySelectorAll(".pictures .content img");

  // Reset indeks jika melebihi jumlah slide
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  // Sembunyikan semua gambar
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // Tampilkan slide yang sesuai
  slides[slideIndex].style.display = "block";
}

// Fungsi untuk mengubah indeks slide
function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

// Tampilkan slide pertama saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
});

//prev and next end //////

// Buka modal
function openGifModal() {
  const modal = document.getElementById("gifModal");
  modal.style.display = "block"; // Tampilkan modal
  modal.classList.add("zoom");
}

// Tutup modal
function closeGifModal() {
  const modal = document.getElementById("gifModal");
  modal.style.display = "none"; // Sembunyikan modal
  modal.classList.remove("zoom"); // Hapus kelas zoom
}

// Tutup modal jika pengguna mengklik di luar modal
window.onclick = function (event) {
  const modal = document.getElementById("gifModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

const bttn = document.getElementById("button");

document
  .getElementById("email-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    bttn.value = "Sending....";
    const serviceid = "service_45bmfx9";
    const templateid = "template_wloxvp9";

    emailjs.sendForm(serviceid, templateid, this).then(
      () => {
        bttn.value = "Send Email";
        alert("Email Sent.");
      },
      (err) => {
        bttn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
  });
