document.addEventListener("DOMContentLoaded", function() {
  // Hide loader and reveal main content after cinematic boot sequence
  setTimeout(function() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }, 4000); // 4-second delay for maximum impact
  
  // Animate sections on scroll using IntersectionObserver
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // Smooth scroll for navigation (accessible via inline onclick handlers)
  window.scrollToSection = function(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };
  
  // Contact form passcode validation
  window.validatePasscode = function(e) {
    e.preventDefault();
    const passcode = document.getElementById('passcode').value;
    if (passcode === 'TITAN2025') {
      alert('Access Granted. Welcome to the Titan Network.');
    } else {
      alert('Access Denied. Incorrect Passcode.');
    }
  };
  
  // Dynamic Music Visualizer: Generate neon bars that pulse with raw energy
  const visualizer = document.getElementById('music-visualizer');
  for (let i = 0; i < 80; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.left = (i * 1.25) + '%';
    bar.style.animationDelay = (i * 0.05) + 's';
    visualizer.appendChild(bar);
  }
});
