document.addEventListener('DOMContentLoaded', function() {
  // Loader & Main Reveal
  setTimeout(function() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('main').style.display = 'block';
  }, 4000);

  // IntersectionObserver for section animations (add/remove 'visible' for smooth reverse)
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.3 });
  sections.forEach(section => observer.observe(section));

  // Smooth scroll for navigation links
  window.scrollToSection = function(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  // Mouse-based Background Parallax
  document.addEventListener('mousemove', function(e) {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    document.body.style.transform = `translate(${x}px, ${y}px)`;
  });

  // Dynamic Music Visualizer: Create neon bars pulsing with raw energy
  const visualizer = document.getElementById('music-visualizer');
  for(let i = 0; i < 70; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.left = (i * 1.5) + '%';
    bar.style.animationDelay = (i * 0.04) + 's';
    visualizer.appendChild(bar);
  }

  // Decrypt Contact Section: Reveal secure contact form
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

  // Optional: Glitch hover effect on grid items for extra luxury
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const originalHTML = item.innerHTML;
      const glitchText = item.getAttribute('data-decrypt') || item.getAttribute('data-glitch') || '';
      item.innerHTML = `<span class="glitch-hover">${glitchText}</span>`;
      setTimeout(() => {
        item.innerHTML = originalHTML;
      }, 800);
    });
  });
});
