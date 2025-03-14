// Warte, bis das Dokument geladen ist
document.addEventListener("DOMContentLoaded", function() {
  // Preloader ausblenden
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => { preloader.style.display = 'none'; }, 500);
  }, 2000);

  // Smooth Scrolling für "Enter the Domain"-Button
  const enterBtn = document.getElementById('enterBtn');
  if (enterBtn) {
    enterBtn.addEventListener('click', function() {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Optional: Navigation Smooth Scrolling
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      targetSection.scrollIntoView({ behavior: 'smooth' });
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
