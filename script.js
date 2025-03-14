document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.section');
  
  // Using IntersectionObserver to trigger smooth, cinematic transitions
  const observerOptions = {
    threshold: 0.3
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
});
