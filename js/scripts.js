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

  document.addEventListener('DOMContentLoaded', function() {
    // Get all images with class 'lazy' or use 'img' to select all images
    const images = document.querySelectorAll('img.lazy');
    const totalImages = images.length;
    let loadedImages = 0;
    
    // If there are no images, hide loader immediately
    if (totalImages === 0) {
        hideLoader();
        return;
    }
    
    // Function to hide loader and show content
    function hideLoader() {
        const loadingScreen = document.getElementById('loading-screen');
        const content = document.getElementById('content');
        
        // Fade out loading screen
        loadingScreen.style.opacity = '0';
        
        // Show content
        content.style.display = 'block';
        setTimeout(() => {
            content.classList.add('loaded');
        }, 50);
        
        // Remove loading screen after fade out
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500); // Match this with CSS transition time
    }
    
    // Check if image is already loaded (cached)
    function imageLoaded() {
        loadedImages++;
        if (loadedImages === totalImages) {
            hideLoader();
        }
    }
    
    // Add load event listeners to all images
    images.forEach(img => {
        if (img.complete) {
            imageLoaded();
        } else {
            img.addEventListener('load', imageLoaded);
            img.addEventListener('error', imageLoaded); // Also count if image fails to load
        }
    });
    
    // Optional: Set timeout in case some images fail to load
    setTimeout(hideLoader, 5000); // 5 seconds max loading time
});