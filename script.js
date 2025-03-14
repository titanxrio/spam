document.addEventListener('DOMContentLoaded', function() {
  // Remove loader and reveal main content after cinematic delay
  setTimeout(function() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('main').style.display = 'block';
  }, 4000);

  // IntersectionObserver for section animations
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  sections.forEach(section => observer.observe(section));

  // Smooth scroll for navigation links
  window.scrollToSection = function(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  // Mouse-based background movement (subtle parallax effect)
  document.addEventListener('mousemove', function(e) {
    const x = (e.clientX / window.innerWidth) * 10;
    const y = (e.clientY / window.innerHeight) * 10;
    document.body.style.setProperty('--bg-move-x', `${x}px`);
    document.body.style.setProperty('--bg-move-y', `${y}px`);
    document.querySelector('body::before'); // For triggering CSS variable update
  });

  // Dynamic Music Visualizer – Generate neon bars
  const visualizer = document.getElementById('music-visualizer');
  for(let i = 0; i < 70; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.left = (i * 1.5) + '%';
    bar.style.animationDelay = (i * 0.04) + 's';
    visualizer.appendChild(bar);
  }

  // Decrypt Contact Section: Reveal form after "decryption"
  window.decryptContact = function() {
    document.getElementById('contact-lockdown').style.display = 'none';
    document.getElementById('contact-form').style.display = 'flex';
  };

  // Passcode validation for secure network access
  window.validatePasscode = function(e) {
    e.preventDefault();
    const passcode = document.getElementById('passcode').value;
    if(passcode === 'TITAN2025') {
      alert('Access Granted. Welcome to the Titan Network.');
    } else {
      alert('Access Denied. Incorrect Passcode.');
    }
  };

  // Optional: Additional hover glitch for grid items
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const originalText = item.innerHTML;
      item.innerHTML = `<span class="glitch-hover">${item.getAttribute('data-decrypt') || item.getAttribute('data-glitch')}</span>`;
      setTimeout(() => {
        item.innerHTML = originalText;
      }, 800);
    });
  });
});
