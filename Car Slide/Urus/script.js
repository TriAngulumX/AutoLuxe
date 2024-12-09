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

///speedtext animation start
const speed = document.querySelectorAll(".hero .speedtext");
const obs10 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("speedtext--visible");
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
speed.forEach((element) => obs10.observe(element));
///speedtext animation end

///accelertaion start
const acc = document.querySelectorAll(".hero .acceleration");
const obs9 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("acceleration--visible");
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
acc.forEach((element) => obs9.observe(element));
///accelertaion end

//animation eng start
const eng = document.querySelectorAll(".hero .engine");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("engine--visible");
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
eng.forEach((element) => observer.observe(element));
///animation engine end

//img1 animtion start
const exp = document.querySelectorAll(".explan .img1");
document.addEventListener("scroll", function () {
  exp.forEach((boxes) => {
    if (inview(boxes)) {
      boxes.classList.add("img1--visible");
    }
  });
});

function inview(element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight - 150;
}
//img1 animation end

//h1 explan animtion start
const txt = document.querySelectorAll(".explan .content h1 ");
document.addEventListener("scroll", function () {
  txt.forEach((boxes) => {
    if (inview(boxes)) {
      boxes.classList.add("h1--visible");
    }
  });
});

function inview(element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight - 150;
}
//h1 explan animation end

//p explan animtion start
const p = document.querySelectorAll(".explan .content p");
document.addEventListener("scroll", function () {
  p.forEach((boxes) => {
    if (inview(boxes)) {
      boxes.classList.add("p--visible");
    }
  });
});

function inview(element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight - 150;
}
//p explan animation end

///audio script start
const btn = document.querySelector(".btn");
const audio = document.querySelector("audio");
const visualizer = document.querySelector(".visualizer");

let audioContextStarted = false;
let ctx;
btn.addEventListener("click", () => {
  // Mulai audio context hanya jika belum dimulai
  if (!audioContextStarted) {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = ctx.createAnalyser();
    const source = ctx.createMediaElementSource(audio);
    source.connect(analyser);
    source.connect(ctx.destination);
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;

    let dataArray = new Uint8Array(bufferLength);
    let elements = [];

    for (let i = 0; i < bufferLength; i++) {
      const element = document.createElement("span");
      element.classList.add("element");
      elements.push(element);
      visualizer.appendChild(element);
    }

    const clamp = (num, min, max) => {
      if (num >= max) return max;
      if (num <= min) return min;
      return num;
    };

    const update = () => {
      requestAnimationFrame(update);
      analyser.getByteFrequencyData(dataArray);

      const startindex = 10;

      for (let i = 0; i < bufferLength; i++) {
        let item = dataArray[i];
        let height = clamp(item, 60, 130);

        let index = (i + startindex) % bufferLength;
        elements[index].style.height = `${height}px`;
        elements[index].style.transform = `rotate(${
          i * (360 / bufferLength)
        }deg) translateY(-50%)`;
      }
    };

    update();
    audioContextStarted = true;
  }

  // Play atau pause  the fucking audio
  if (audio.paused) {
    audio.currentTime = 0; // Start from stupid 0
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0; // Set to first audio
  }
  btn.classList.toggle("btn-play");
  btn.classList.toggle("btn-pause");

  audio.addEventListener("ended", () => {
    // audio back to the reset
    btn.classList.remove("btn-pause");
    btn.classList.add("btn-play");
    audio.currentTime = 0; // Reset audio to the fucking first
  });
});
///audio script end

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