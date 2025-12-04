// modo escuro
const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

// verifica se o botao existe
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // salva preferencia no localstorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // carrega preferencia salva
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }
}

// validacao do formulario
const form = document.querySelector('.form');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // impede envio padrao

        const nomeInput = document.getElementById('nome');
        const emailInput = document.getElementById('email');
        const mensagemInput = document.getElementById('mensagem');

        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const mensagem = mensagemInput.value.trim();

        // validacao simples
        if (nome === '') {
            alert('Por favor, preencha o campo Nome.');
            nomeInput.focus();
            return;
        }

        if (email === '' || !email.includes('@')) {
            alert('Por favor, insira um e-mail válido (deve conter @).');
            emailInput.focus();
            return;
        }

        if (mensagem === '') {
            alert('Por favor, escreva uma mensagem.');
            mensagemInput.focus();
            return;
        }

        // sucesso
        alert('Mensagem enviada com sucesso! (Simulação)');
        form.reset();
    });
}
