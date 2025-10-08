// memunculkan menu hidden
const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
});


// menandai halaman active
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("activee");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("activee");
    }
  });
});


// kegiatan

const buttons = document.querySelectorAll(".kegiatan-btn");
const contents = document.querySelectorAll(".container-hidden-kegiatann");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    const targetSection = document.getElementById(target);
    
    const isActive = targetSection.style.display === "block";

    // Tutup semua section & reset tombol
    contents.forEach(content => content.style.display = "none");
    buttons.forEach(b => b.classList.remove("active"));

    if (!isActive) {
      // Kalau sebelumnya tertutup → buka dan aktifkan tombol
      targetSection.style.display = "block";
      btn.classList.add("active");
    }
  });
});
