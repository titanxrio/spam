// ==========================================================================
// TITAN – 100% DOMINATION JavaScript
// ==========================================================================
// Dieser Code steuert den Preloader, Smooth Scrolling, Partikel-Animationen,
// Glitch-Effekte, dynamische Overlays und interaktive Hover-Animationen,
// die dir Gänsehaut verpassen. Jeder Abschnitt ist darauf ausgelegt, die
// absolute Macht von TITAN zu demonstrieren.
// ==========================================================================
document.addEventListener("DOMContentLoaded", function() {
  // Preloader ausblenden
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => { preloader.style.display = 'none'; }, 500);
  }, 2000);

  // Smooth Scrolling-Funktion
  function smoothScroll(targetID) {
    const target = document.getElementById(targetID);
    target.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Navigation Click Event
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
  
  // "Enter My Domain"-Button
  const enterBtn = document.getElementById('enterBtn');
  if (enterBtn) {
    enterBtn.addEventListener('click', function() {
      smoothScroll('about');
    });
  }
  
  // Partikel-Effekt (Erzeuge hunderte Partikel)
  const particlesContainer = document.querySelector('.particles');
  let particles = [];
  const particleCount = 200;
  function createParticles() {
    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement('div');
      p.classList.add('particle');
      p.style.left = Math.random() * 100 + '%';
      p.style.top = Math.random() * 100 + '%';
      p.style.width = p.style.height = Math.random() * 4 + 1 + 'px';
      p.style.opacity = Math.random();
      particlesContainer.appendChild(p);
      particles.push(p);
    }
  }
  function animateParticles() {
    particles.forEach(p => {
      let speed = 0.5 + Math.random();
      let posY = parseFloat(p.style.top);
      posY += speed * 0.1;
      if (posY > 100) posY = 0;
      p.style.top = posY + '%';
    });
    requestAnimationFrame(animateParticles);
  }
  if (particlesContainer) { createParticles(); animateParticles(); }
  
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
  
  // Overlay Scroll-Effekt
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
  
  // Hover-Animation für DOM-Boxen und andere interaktive Elemente
  const interactiveElems = document.querySelectorAll('.dom-box, .particle, .product-card');
  interactiveElems.forEach(el => {
    el.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.25)';
      this.style.transition = 'transform 0.3s ease';
    });
    el.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
    });
  });
  
  // Responsive Anpassung bei Fenstergröße-Änderung (Debugging)
  window.addEventListener('resize', function() {
    console.log(`Window resized: ${window.innerWidth} x ${window.innerHeight}`);
    // Hier können weitere responsive Anpassungen implementiert werden.
  });
  
  console.log("TITAN – Domination script loaded. Prepare to be overwhelmed.");
});
