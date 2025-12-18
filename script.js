document.addEventListener("DOMContentLoaded", () => {
    // Sticky navbar
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    });
  
    // Mobile menu toggle
    const toggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    toggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("show");
      toggle.textContent = mobileMenu.classList.contains("show") ? "✖" : "☰";
    });
  
    // Smooth scroll
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const section = document.querySelector(link.getAttribute("href"));
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          mobileMenu.classList.remove("show");
          toggle.textContent = "☰";
        }
      });
    });
  });
  