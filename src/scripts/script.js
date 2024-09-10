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

//validação do formulario!
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('e-mail').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validação do nome (se preenchido)
    if (name !== '' && name.length === 0) {
        alert('O campo nome não pode estar vazio.');
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    // Validação do e-mail (se preenchido)
    if (email !== '' && !validateEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    // Validação da mensagem
    if (message.length > 300) {
        alert('A mensagem não pode ter mais de 300 caracteres.');
        event.preventDefault(); // Impede o envio do formulário
        return;
    }
});

// Função para validar o formato do e-mail
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
