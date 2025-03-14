document.addEventListener('DOMContentLoaded', function() {
  // Remove loader and reveal main content after 4 seconds
  setTimeout(function() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('main').style.display = 'block';
  }, 4000);

  // IntersectionObserver for section reveal & reverse animations on scroll
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
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

  // Mousemove event: parallax background & custom cursor update
  document.addEventListener('mousemove', function(e) {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    document.body.style.transform = `translate(${x}px, ${y}px)`;
    // Update custom cursor position
    const cursor = document.getElementById('custom-cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // Ambient Particle Animation on Canvas
  const canvas = document.getElementById('ambient');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particles = [];
  const particleCount = 100;
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5
    });
  }
  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 255, 255, 0.3)';
      ctx.fill();
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // Create dynamic neon bars for Music Visualizer (if not already generated)
  const visualizer = document.getElementById('music-visualizer');
  for (let i = 0; i < 70; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.left = (i * 1.5) + '%';
    bar.style.animationDelay = (i * 0.04) + 's';
    visualizer.appendChild(bar);
  }

  // Decrypt Contact Section to reveal the secure form
  window.decryptContact = function() {
    document.getElementById('contact-lockdown').style.display = 'none';
    document.getElementById('contact-form').style.display = 'flex';
  };

  // Passcode validation for secure network access
  window.validatePasscode = function(e) {
    e.preventDefault();
    const passcode = document.getElementById('passcode').value;
    if (passcode === 'TITAN2025') {
      alert('Access Granted. Welcome to the Titan Network.');
    } else {
      alert('Access Denied. Incorrect Passcode.');
    }
  };

  // Ripple effect on button clicks
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const circle = document.createElement('span');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
      circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
      circle.classList.add('ripple');
      const ripple = button.getElementsByClassName('ripple')[0];
      if (ripple) ripple.remove();
      button.appendChild(circle);
    });
  });

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
