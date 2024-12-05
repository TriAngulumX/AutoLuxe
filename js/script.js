//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//when menu is clicked
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//click outstide the sidebar the hide nav
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const search = () => {
  const searchbox = document.getElementById("cari").value.toUpperCase();
  const storeitems = document.getElementById("cars-container");
  const car = document.querySelectorAll(".box");
  const cname = document.getElementsByTagName("h3");

  for (var i = 0; i < cname.length; i++) {
    let match = car[i].getElementsByTagName("h3")[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        car[i].style.display = "";
      } else {
        car[i].style.display = "none";
      }
    }
  }
};

const box = document.querySelectorAll(".box");
document.addEventListener("scroll", function () {
  box.forEach((boxes) => {
    if (inview(boxes)) {
      boxes.classList.add("box--visible");
    }
  });
});

function inview(element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight - 150;
}

const one = document.querySelectorAll(".cars h1");
document.addEventListener("scroll", function () {
  one.forEach((one_x) => {
    if (y_view(one_x)) {
      one_x.classList.add("h1--visible");
    }
  });
});
function y_view(element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight - 150;
}

//title cars animation
const two = document.querySelectorAll(".cars h2");
document.addEventListener("scroll", function () {
  two.forEach((two_x) => {
    if (_view(two_x)) {
      two_x.classList.add("h2--visible");
    }
  });
});

function _view(element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight - 150;
}

//searchcar animation
const searchcarx = document.querySelectorAll(".cars .searchcar");
document.addEventListener("scroll", function () {
  searchcarx.forEach((search_x) => {
    if (_view(search_x)) {
      search_x.classList.add("searchcar--visible");
    }
  });
});

function _view(element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight - 150;
}

///Dropdown animation
const motionx = document.querySelectorAll(".cars .dropdown");
document.addEventListener("scroll", function () {
  motionx.forEach((boxes) => {
    if (inview(boxes)) {
      boxes.classList.add("dropdown--visible");
    }
  });
});

function inview(element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight - 150;
}

//create dropdown menu
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList = remove("select-clicked");
      caret.classList = remove("cared-rotate");
      menu.classList = remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const carTypeMenu = document.querySelector(".dropdown .menu");
  const priceMenu = document.querySelectorAll(".dropdown-container .menu")[1];

  let selectedType = "All"; // Default tipe mobil
  let selectedPrice = "None"; // Default harga mobil

  const applyFilters = () => {
    document.querySelectorAll(".cars-container .box").forEach((box) => {
      // Ambil tipe mobil
      const carTypes = box
        .getAttribute("dataname")
        .split(",")
        .map((type) => type.trim());
      // Ambil harga mobil
      const carPrice = parseFloat(
        box
          .getAttribute("dataprice")
          .replace("Jt", "")
          .replace("M", "000")
          .replace(",", ".")
      );

      // Default: Tampilkan elemen
      let showBox = true;

      // Filter berdasarkan tipe mobil
      if (selectedType !== "All" && !carTypes.includes(selectedType)) {
        showBox = false;
      }

      // Filter berdasarkan harga mobil
      if (selectedPrice === "< 100Jt") {
        showBox = showBox && carPrice < 100;
      } else if (selectedPrice === "100Jt - 500Jt") {
        showBox = showBox && carPrice >= 100 && carPrice <= 500;
      } else if (selectedPrice === "500Jt - 1M") {
        showBox = showBox && carPrice > 500 && carPrice <= 1000;
      } else if (selectedPrice === "1M - 5M") {
        showBox = showBox && carPrice > 1000 && carPrice <= 5000;
      } else if (selectedPrice === "> 5M") {
        showBox = showBox && carPrice > 5000;
      }

      // Logika tambahan: Jika tipe mobil adalah Sedan dan harga di atas 1M
      if (
        selectedType === "Sedan" &&
        selectedPrice !== "< 100Jt" &&
        carPrice > 1000
      ) {
        showBox = false;
      }

      // Sembunyikan atau tampilkan elemen berdasarkan hasil filter
      box.style.display = showBox ? "block" : "none";
    });
  };

  // Event listener untuk dropdown tipe mobil
  carTypeMenu.addEventListener("click", (e) => {
    selectedType = e.target.textContent.trim();
    applyFilters();
  });

  // Event listener untuk dropdown harga mobil
  priceMenu.addEventListener("click", (e) => {
    selectedPrice = e.target.textContent.trim();
    applyFilters();
  });
});

const terra = document.querySelectorAll(".about h1");
document.addEventListener("scroll", function () {
  terra.forEach((boxes) => {
    if (inview(boxes)) {
      boxes.classList.add("h1--visible");
    }
  });
});

function inview(element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight - 150;
}

const terra2 = document.querySelectorAll(".about h2");
document.addEventListener("scroll", function () {
  terra2.forEach((boxes) => {
    if (inview(boxes)) {
      boxes.classList.add("h2--visible");
    }
  });
});

function inview(element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight - 150;
}

const parag = document.querySelectorAll(".about p");
document.addEventListener("scroll", function () {
  parag.forEach((boxes) => {
    if (inview(boxes)) {
      boxes.classList.add("p--visible");
    }
  });
});

function inview(element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight - 150;
}
