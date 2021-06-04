function showModal() {
    document.getElementById('modal').style.display = 'block';
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }

function closeModal() {
  modal.style.display = 'none';
}
