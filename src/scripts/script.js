const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    if (currentIndex < slide.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slide.length - 1;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    const button = document.getElementById('mainButton');

    // Oculta o conteúdo principal inicialmente
    mainContent.classList.add('hidden');

    button.addEventListener('click', () => {
        // Torna o conteúdo visível quando o botão é clicado
        mainContent.classList.remove('hidden');
        mainContent.classList.add('visible');
    });
});
