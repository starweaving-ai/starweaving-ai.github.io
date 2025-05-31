// Make navbar solid after scroll
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Navbar scroll background
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll-based movement for hero gif
window.addEventListener('scroll', () => {
  const gif = document.querySelector('.hero-gif');
  if (!gif) return;

  const scrollY = window.scrollY;
  const offset = Math.min(scrollY * 0.3, 50); // Cap movement at 50px
  gif.style.transform = `translateY(-${offset}px)`;
});

window.addEventListener('scroll', function() {
const navbar = document.querySelector('.navbar');
if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
} else {
    navbar.classList.remove('scrolled');
}
});
