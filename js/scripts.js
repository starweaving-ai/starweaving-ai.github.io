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

  const sparkleContainer = document.querySelector('.sparkle-wrapper');

  for (let i = 0; i < 50; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 5}s`;
    sparkle.style.animationDuration = `${2 + Math.random() * 3}s`;
    sparkleContainer.appendChild(sparkle);
  }