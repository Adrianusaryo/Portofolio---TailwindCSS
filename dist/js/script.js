// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;
  const toTop = document.querySelector("#toTop");

  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Darkmode Toggle

const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});


// AOS Ketika Layar Kecil
function toggleAOS() {
  if (window.innerWidth < 800) {
    document.querySelectorAll("[data-aos]").forEach((element) => {
      element.removeAttribute("data-aos");
    });
  } else {
    AOS.init();
  }
}

document.addEventListener("DOMContentLoaded", toggleAOS);

window.addEventListener("resize", function () {
  toggleAOS();
});
