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

const handleSubmit = (event) => {
    event.preventDefault();
    
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const message = document.querySelector('#message').value

    fetch('https://api.sheetmonkey.io/form/mJ2MWJY7DgvFGQCJgHbPXQ', {
        
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, message}), //converte o objeto em string
    })
}

// Itera sobre cada formulário e adiciona o event listener
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', handleSubmit)
})
