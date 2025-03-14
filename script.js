// =========================================================================
// TITAN – 100% DOMINATION JavaScript
// =========================================================================
// Dieser Code steuert den Preloader, Smooth Scrolling, den Canvas-Partikel-
// Hintergrund, zufällige Glitch-Effekte, Overlay-Animationen, interaktive
// Hover-Effekte und zusätzliche Pixelanimationen – jeder Pixel ist in Bewegung.
// =========================================================================

document.addEventListener("DOMContentLoaded", function() {
  // Preloader ausblenden
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => { preloader.style.display = 'none'; }, 500);
  }, 2000);

  // Smooth Scrolling
  function smoothScroll(targetID) {
    const target = document.getElementById(targetID);
    target.scrollIntoView({ behavior: 'smooth' });
  }
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      smoothScroll(targetID);
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
  const enterBtn = document.getElementById('enterBtn');
  if (enterBtn) {
    enterBtn.addEventListener('click', function() {
      smoothScroll('about');
    });
  }

  // Canvas-Partikel-Hintergrund (100% animierte Pixel)
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  const particleCount = 500;
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
      this.color = "#1e90ff";
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.size, this.size);
    }
  }
  function initParticles() {
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }
  function animateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateCanvas);
  }
  initParticles();
  animateCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Glitch-Effekt Randomizer
  function randomGlitch() {
    const glitchElems = document.querySelectorAll('.glitch');
    glitchElems.forEach(elem => {
      let blur = Math.floor(Math.random() * 4);
      elem.style.filter = `blur(${blur}px)`;
      setTimeout(() => { elem.style.filter = 'blur(0px)'; }, 150);
    });
  }
  setInterval(randomGlitch, 2500);

  // Overlay-Scroll-Effekt
  const animOverlay = document.querySelector('.anim-overlay');
  window.addEventListener('scroll', function() {
    let scrollPos = window.pageYOffset;
    if (animOverlay) {
      animOverlay.style.opacity = 1 - scrollPos / 600;
      animOverlay.style.transform = `translateY(${scrollPos / 4}px)`;
    }
  });

  // Kontaktformular: Dummy-Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert("Your tribute has been sent to TITAN. Prepare for the reckoning.");
      contactForm.reset();
    });
  }

  // Interaktive Hover-Animationen für dynamische Elemente
  const interactiveElems = document.querySelectorAll('.dom-shape, .shape, .project-card, .particle');
  interactiveElems.forEach(el => {
    el.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.25)';
      this.style.transition = 'transform 0.3s ease';
    });
    el.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // Zufällige Pixel-Animationen: Jeder DOM-Knoten bekommt gelegentlich einen Twist
  function randomPixelAnimation() {
    const allElems = document.querySelectorAll('body *');
    allElems.forEach(el => {
      if (Math.random() < 0.03) {
        el.style.transition = 'transform 0.3s ease';
        el.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
        setTimeout(() => { el.style.transform = 'rotate(0deg)'; }, 300);
      }
    });
  }
  setInterval(randomPixelAnimation, 5000);

  // Responsive Anpassung bei Fenstergrößenänderung
  window.addEventListener('resize', function() {
    console.log(`Window resized: ${window.innerWidth} x ${window.innerHeight}`);
  });

  console.log("TITAN – Domination script loaded. Every pixel is in motion.");
});
