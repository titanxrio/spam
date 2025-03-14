/* JavaScript: Boot-Up, Navigation, and Interactivity */

// Simulate a cinematic boot sequence before revealing the main content
setTimeout(() => {
  document.getElementById('entrance').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
}, 3000);

// Smooth scrolling navigation
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Contact form passcode validation
function validatePasscode(event) {
  event.preventDefault();
  const passcode = document.getElementById('passcode').value;
  // Replace 'TITAN2025' with your secure passcode if needed
  if (passcode === 'TITAN2025') {
    alert('Access Granted. Welcome to the Titan Network.');
  } else {
    alert('Access Denied. Incorrect Passcode.');
  }
}

// Music Visualizer: Create dynamic neon bars that pulse like digital energy
const visualizer = document.getElementById('music-visualizer');
for (let i = 0; i < 50; i++) {
  const bar = document.createElement('div');
  bar.className = 'bar';
  bar.style.left = (i * 2) + '%';
  bar.style.animationDelay = (i * 0.1) + 's';
  visualizer.appendChild(bar);
}
