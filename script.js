const scrollContainer = document.querySelector('.popular_netflix');

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault(); // Impede o scroll vertical
    scrollContainer.scrollLeft += evt.deltaY * 2; // Controla a velocidade
});