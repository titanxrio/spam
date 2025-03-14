// DOMContentLoaded – Alles läuft, wenn das Dokument bereit ist.
document.addEventListener("DOMContentLoaded", function() {
  // Preloader ausblenden
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => { preloader.style.display = 'none'; }, 500);
  }, 2000);

  // Smooth Scrolling für Navigation
  const links = document.querySelectorAll('nav ul li a');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      links.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // "Enter the Realm"-Button scrollt zur About-Section
  const enterBtn = document.getElementById('enterBtn');
  if (enterBtn) {
    enterBtn.addEventListener('click', function() {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
  }
});
