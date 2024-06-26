/********** EFFETTO ACQUA SULLA PAGINA ****************/
$(document).ready(function() {
  $('#effetoacqua').ripples({
      resolution: 700,    // Maggiore è la risoluzione, più dettagliato è l'effetto
      dropRadius: 20,     // Dimensione dei cerchi di disturbo
      perturbance: 0.1,  // Intensità dell'effetto di disturbo
      interactive: true  // Disabilita l'interazione dell'utente con l'effetto
  });

  // Aggiorna l'effetto acqua ad intervalli regolari
  setInterval(function() {
    $('#effetoacqua').ripples('update');
  }, 100); // Chiamata ogni 100 millisecondi per mantenere l'effetto fluido
});


/********************* GESTIONE PULSANTI AVANTI E INDIETRO PER SCORRIMENTO SLIDE **********************/
const carouselCells = document.querySelectorAll('.carousel__cell');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.previous-button');
let currentIndex = 0;
const cellCount = carouselCells.length;

function updateCarousel() {
  carouselCells.forEach((cell, index) => {
    cell.classList.remove('active'); // Rimuove la classe active da tutte le celle
    cell.style.visibility = 'hidden';
    cell.style.opacity = '0';
    cell.style.transform = 'translateY(100%) scale(0.5)';
  });

  const prevIndex = (currentIndex - 1 + cellCount) % cellCount;
  const nextIndex = (currentIndex + 1) % cellCount;

  carouselCells[prevIndex].style.transform = 'translateY(-100%) scale(0.5)';
  carouselCells[prevIndex].style.visibility = 'visible';

  carouselCells[currentIndex].style.transform = 'translateY(0) scale(1)';
  carouselCells[currentIndex].style.opacity = '1';
  carouselCells[currentIndex].style.visibility = 'visible';
  carouselCells[currentIndex].classList.add('active'); // Aggiunge la classe active alla cella corrente

  carouselCells[nextIndex].style.transform = 'translateY(100%) scale(0.5)';
  carouselCells[nextIndex].style.visibility = 'visible';
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cellCount;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cellCount) % cellCount;
  updateCarousel();
});

updateCarousel();

  
  
  
  