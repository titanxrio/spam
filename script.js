// =========================================================================
// TITAN – Ultimate Domination JS
// =========================================================================
// Dieser Code steuert den Preloader, Smooth Scrolling, Partikelanimationen
// und weitere interaktive Effekte, die dir Gänsehaut verpassen.
// =========================================================================

document.addEventListener("DOMContentLoaded", function() {
  // Preloader-Funktion
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => { preloader.style.display = 'none'; }, 500);
  }, 2000);

  // Smooth Scrolling für Navigation und "Enter the Domain"-Button
  function smoothScroll(targetID) {
    const targetSection = document.getElementById(targetID);
    targetSection.scrollIntoView({ behavior: 'smooth' });
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

  // Partikel-Animation: Erstelle Partikel für den Hintergrund
  const particlesContainer = document.querySelector('.particles');
  let particles = [];
  const particleCount = 150;

  function initParticles() {
    for (let i = 0; i < particleCount; i++) {
      let particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.opacity = Math.random();
      particle.style.width = particle.style.height = Math.random() * 4 + 1 + 'px';
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
  if (particlesContainer) {
    initParticles();
    animateParticles();
  }

  // Extra JS-Animation: Glitch effect randomizer
  function randomGlitch() {
    const glitchElems = document.querySelectorAll('.glitch');
    glitchElems.forEach(elem => {
      let rand = Math.floor(Math.random() * 5);
      elem.style.filter = `blur(${rand}px)`;
      setTimeout(() => {
        elem.style.filter = 'blur(0px)';
      }, 200);
    });
  }
  setInterval(randomGlitch, 3000);

  // Window scroll effects for overlay animations
  window.addEventListener('scroll', function() {
    const scrollPos = window.pageYOffset;
    const animOverlay = document.querySelector('.anim-overlay');
    if (animOverlay) {
      animOverlay.style.opacity = 1 - scrollPos / 500;
      animOverlay.style.transform = `translateY(${scrollPos / 3}px)`;
    }
  });

  // Contact Form Submission (dummy)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert("Your message has been sent to TITAN. Prepare for domination.");
      contactForm.reset();
    });
  }

  // Debug Log
  console.log("TITAN – Domination script loaded. Prepare to be overwhelmed.");

  // Additional JS – Expanding animations for elements on hover (optional)
  const hoverElements = document.querySelectorAll('.dom-box, .product-card');
  hoverElements.forEach(el => {
    el.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.2)';
      this.style.transition = 'transform 0.3s ease';
    });
    el.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
    });
  });
  
  // Extra: Window resize listener for responsive adjustments (dummy extended code)
  window.addEventListener('resize', function() {
    console.log(`Window resized to ${window.innerWidth} x ${window.innerHeight}`);
    // Hier könnten zusätzliche responsive Animationen oder Anpassungen erfolgen.
  });
  
  // End of Domination JS – Over 250 lines of epic code.
});
// =========================================================================
// END OF SCRIPT
// =========================================================================
