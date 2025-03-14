/* JavaScript: Boot-Up, Navigation, and Interactivity */

// Simulate an epic boot sequence before unleashing the main content
setTimeout(() => {
  document.getElementById('entrance').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
}, 3000);

// Smooth scrolling navigation for a cinematic experience
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Contact form passcode validation – secure and uncompromising
function validatePasscode(event) {
  event.preventDefault();
  const passcode = document.getElementById('passcode').value;
  // The ultimate passcode—change it if you dare.
  if (passcode === 'TITAN2025') {
    alert('Access Granted. Welcome to the Titan Network.');
  } else {
    alert('Access Denied. Incorrect Passcode.');
  }
}

// Music Visualizer: Generate towering neon bars that pulse with raw energy
const visualizer = document.getElementById('music-visualizer');
for (let i = 0; i < 60; i++) {
  const bar = document.createElement('div');
  bar.className = 'bar';
  bar.style.left = (i * 1.5) + '%';
  bar.style.animationDelay = (i * 0.08) + 's';
  visualizer.appendChild(bar);
}
