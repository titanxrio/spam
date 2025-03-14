// Öffnet das Modal und zeigt das angeklickte Produktbild im Overlay an
function openModal(element) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const img = element.querySelector('img');
  modalImg.src = img.src;
  modal.style.display = 'flex';
}

// Schließt das Modal, wenn außerhalb des Inhalts oder auf den Schließ-Button geklickt wird
function closeModal(event) {
  const modalContent = document.querySelector('.modal-content');
  if (event.target.classList.contains('close-btn') || !modalContent.contains(event.target)) {
    document.getElementById('modal').style.display = 'none';
  }
}
