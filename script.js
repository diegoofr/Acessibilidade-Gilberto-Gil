// Funções de acessibilidade
function increaseFont() {
  document.body.style.fontSize = "larger";
}

function decreaseFont() {
  document.body.style.fontSize = "smaller";
}

function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}

// ScrollReveal animações
ScrollReveal().reveal('section', {
  duration: 1500,
  origin: 'bottom',
  distance: '50px'
});
