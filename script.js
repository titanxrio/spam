// =========================================================================
// TITAN – 100% DOMINATION JavaScript
// =========================================================================
// Dieser Code steuert Preloader, Smooth Scrolling, den Canvas-Partikel-
// Hintergrund, zufällige Glitch-Effekte, Overlay-Animationen, den Audio-
// Visualizer und interaktive Hover-Effekte – hier reagiert jeder Pixel!
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

  // Canvas-Partikel-Hintergrund
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

  // Audio-Player & Visualizer
  const playlistItems = document.querySelectorAll('.playlist li');
  const audioPlayer = document.getElementById('audioPlayer');
  const audioCanvas = document.getElementById('audioCanvas');
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const analyser = audioCtx.createAnalyser();
  const audioSrc = audioCtx.createMediaElementSource(audioPlayer);
  audioSrc.connect(analyser);
  analyser.connect(audioCtx.destination);
  analyser.fftSize = 256;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  const canvasCtx = audioCanvas.getContext('2d');

  function drawAudioVisualizer() {
    requestAnimationFrame(drawAudioVisualizer);
    analyser.getByteFrequencyData(dataArray);
    canvasCtx.fillStyle = '#000';
    canvasCtx.fillRect(0, 0, audioCanvas.width, audioCanvas.height);
    let barWidth = (audioCanvas.width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;
    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i];
      canvasCtx.fillStyle = `rgb(${barHeight+100},50,150)`;
      canvasCtx.fillRect(x, audioCanvas.height - barHeight / 2, barWidth, barHeight / 2);
      x += barWidth + 1;
    }
  }
  drawAudioVisualizer();

  // Vordefinierte Playlist
  const playlist = [
    { title: "Track One", src: "track1.mp3" },
    { title: "Track Two", src: "track2.mp3" },
    { title: "Track Three", src: "track3.mp3" }
  ];
  // Playlist Klick-Event
  playlistItems.forEach(item => {
    item.addEventListener('click', function() {
      const src = this.getAttribute('data-src');
      audioPlayer.src = src;
      audioPlayer.play();
      audioCtx.resume();
      // Markiere aktiven Track
      playlistItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });
  // Automatischer Start mit erstem Track
  if (playlist.length > 0) {
    audioPlayer.src = playlist[0].src;
  }

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
  const interactiveElems = document.querySelectorAll('.dom-shape.smooth, .shape, .project-card, .particle');
  interactiveElems.forEach(el => {
    el.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.25)';
      this.style.transition = 'transform 0.3s ease';
    });
    el.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // Zufällige Pixel-Animationen
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

  // Responsive Anpassung
  window.addEventListener('resize', function() {
    resizeCanvas();
    console.log(`Window resized: ${window.innerWidth} x ${window.innerHeight}`);
  });

  console.log("TITAN – Domination script loaded. Every pixel is in motion.");
});
