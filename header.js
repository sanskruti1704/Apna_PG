document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Toggle mobile menu open/close
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
      menuToggle.textContent = mobileMenu.classList.contains('show') ? '✖' : '☰';
    });
  
    // Smooth scroll to sections
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
  
          // Close mobile menu on link click (optional)
          mobileMenu.classList.remove('show');
          menuToggle.textContent = '☰';
        }
      });
    });
  
    // Active link on scroll
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
  
      navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (
          section.offsetTop <= scrollY + 100 &&
          section.offsetTop + section.offsetHeight > scrollY + 100
        ) {
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    });
  });
  