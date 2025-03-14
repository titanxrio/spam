document.addEventListener('DOMContentLoaded', function() {
  // Loader and main content control
  setTimeout(function() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('main').style.display = 'block';
  }, 4000); // 4-second loader for maximum impact

  // IntersectionObserver for cinematic section animations
  const sections = document.querySelectorAll('.section');
  const observerOptions = { threshold: 0.3 };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);
  sections.forEach(section => observer.observe(section));

  // Smooth scroll on navigation click
  window.scrollToSection = function(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  // Passcode validation for secure access
  window.validatePasscode = function(e) {
    e.preventDefault();
    const passcode = document.getElementById('passcode').value;
    if(passcode === 'TITAN2025') {
      alert('Access Granted. Welcome to the Titan Network.');
    } else {
      alert('Access Denied. Incorrect Passcode.');
    }
  };

  // Dynamic Music Visualizer: Create neon bars pulsing with raw energy
  const visualizer = document.getElementById('music-visualizer');
  for (let i = 0; i < 70; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.left = (i * 1.5) + '%';
    bar.style.animationDelay = (i * 0.04) + 's';
    visualizer.appendChild(bar);
  }
});
