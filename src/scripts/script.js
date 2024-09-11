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

    // Captura os campos do formulário
    const form = event.target;
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const message = form.querySelector('#message').value;

    // Envia os dados para a API
    fetch('https://api.sheetmonkey.io/form/mJ2MWJY7DgvFGQCJgHbPXQ', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message }), // Converte o objeto em string
    })

        .then(response => {
            if (response.ok) {
                // Limpa os campos do formulário
                form.querySelector('#name').value = '';
                form.querySelector('#email').value = '';
                form.querySelector('#message').value = '';
                // Exibe o alerta
                alert('Mensagem enviada com sucesso');
            } else {
                alert('Houve um problema ao enviar a mensagem');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Houve um problema ao enviar a mensagem');
        });
}

// Itera sobre cada formulário e adiciona o event listener
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', handleSubmit);
});