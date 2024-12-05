/// h3 animation start
const h3 = document.querySelectorAll(".hero .content h3");
const obss = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("h3--visible");
      }
    });
  },
  {
    root: null, // Mengamati dari viewport utama
    rootMargin: "0px", // Tanpa margin tambahan
    threshold: 0.1, // Elemen minimal 10% terlihat untuk mengaktifkan animasi
  }
);
// Pasangkan observer ke setiap elemen dalam daftar
h3.forEach((element) => obss.observe(element));
/// h3 animation end

/// h4 animation start
const h4 = document.querySelectorAll(".hero .content h4");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("h4--visible");
      }
    });
  },
  {
    root: null, // Mengamati dari viewport utama
    rootMargin: "0px", // Tanpa margin tambahan
    threshold: 0.1, // Elemen minimal 10% terlihat untuk mengaktifkan animasi
  }
);
h4.forEach((element) => obs.observe(element));
/// h4 animation end
