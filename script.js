// =========================================================================
// TITAN – 100% DOMINATION JavaScript
// =========================================================================
// Dieser Code steuert Preloader, Smooth Scrolling, Partikel-, Glitch- und
// Overlay-Effekte sowie interaktive Hover-Animationen. Jeder Pixel lebt,
// pulsiert und zeigt Dominanz!
// =========================================================================

document.addEventListener("DOMContentLoaded", function() {
  // Preloader-Funktion
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => { preloader.style.display = 'none'; }, 500);
  }, 2000);

  // Smooth Scrolling für Navigation & "Enter My Domain"-Button
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
  
  // Partikel-Effekt: Erzeuge 200 Partikel, die dynamisch animieren
  const particlesContainer = document.querySelector('.particles');
  let particles = [];
  const particleCount = 200;
  function initParticles() {
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.width = particle.style.height = Math.random() * 4 + 1 + 'px';
      particle.style.opacity = Math.random();
      particlesContainer.appendChild(particle);
      particles.push(particle);
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
  if (particlesContainer) { initParticles(); animateParticles(); }
  
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
  
  // Overlay-Scroll-Effekt: Passe Overlay-Animation an den Scroll-Wert an
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
  
  // Interaktive Hover-Animationen für DOM-Boxen, ZEROBYTE-Boxen und andere Elemente
  const hoverElems = document.querySelectorAll('.dom-box, .zb-box, .particle');
  hoverElems.forEach(el => {
    el.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.25)';
      this.style.transition = 'transform 0.3s ease';
    });
    el.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
    });
  });
  
  // Zusätzliche zufällige Animationen für kleine Elemente (jeder Pixel zählt!)
  function randomPixelAnimation() {
    const allElems = document.querySelectorAll('body *');
    allElems.forEach(el => {
      if (Math.random() < 0.05) {
        el.style.transition = 'transform 0.3s ease';
        el.style.transform = `rotate(${Math.random()*10 - 5}deg)`;
        setTimeout(() => { el.style.transform = 'rotate(0deg)'; }, 300);
      }
    });
  }
  setInterval(randomPixelAnimation, 5000);
  
  // Responsive Anpassung bei Fenstergrößenänderung (Debugging & Anpassungen)
  window.addEventListener('resize', function() {
    console.log(`Window resized: ${window.innerWidth} x ${window.innerHeight}`);
  });
  
  console.log("TITAN – Domination script loaded. Prepare to be overwhelmed.");
});
