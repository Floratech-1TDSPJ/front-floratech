/* contato.js — Floratech
   Validação do formulário de contato */

function limparErros() {
    var erros = document.querySelectorAll('.contato__erro');
    for (var i = 0; i < erros.length; i++) {
        erros[i].textContent = '';
    }
    var inputs = document.querySelectorAll('.contato__input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove('contato__input--erro');
    }
}

function mostrarErro(campoId, erroId, mensagem) {
    var campo = document.getElementById(campoId);
    var erro = document.getElementById(erroId);
    if (campo) campo.classList.add('contato__input--erro');
    if (erro) erro.textContent = mensagem;
}

function validarEmail(email) {
    var partes = email.split('@');
    if (partes.length !== 2) return false;
    if (partes[1].indexOf('.') === -1) return false;
    return true;
}

function enviarFormulario() {
    limparErros();

    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var assunto = document.getElementById('assunto').value;
    var mensagem = document.getElementById('mensagem').value.trim();
    var termos = document.getElementById('termos').checked;
    var temErro = false;

    if (nome === '') {
        mostrarErro('nome', 'erro-nome', 'Por favor, informe seu nome completo.');
        temErro = true;
    } else if (nome.length < 3) {
        mostrarErro('nome', 'erro-nome', 'O nome precisa ter pelo menos 3 caracteres.');
        temErro = true;
    }

    if (email === '') {
        mostrarErro('email', 'erro-email', 'Por favor, informe seu e-mail.');
        temErro = true;
    } else if (!validarEmail(email)) {
        mostrarErro('email', 'erro-email', 'Informe um e-mail válido. Ex: nome@email.com');
        temErro = true;
    }

    if (assunto === '') {
        mostrarErro('assunto', 'erro-assunto', 'Por favor, selecione um assunto.');
        temErro = true;
    }

    if (mensagem === '') {
        mostrarErro('mensagem', 'erro-mensagem', 'Por favor, escreva sua mensagem.');
        temErro = true;
    } else if (mensagem.length < 10) {
        mostrarErro('mensagem', 'erro-mensagem', 'A mensagem precisa ter pelo menos 10 caracteres.');
        temErro = true;
    }

    if (!termos) {
        var erroTermos = document.getElementById('erro-termos');
        if (erroTermos) erroTermos.textContent = 'Você precisa aceitar os termos para enviar.';
        temErro = true;
    }

    if (temErro) return;

    /* Exibe a mensagem de sucesso e limpa os campos */
    var sucesso = document.getElementById('mensagem-sucesso');
    if (sucesso) sucesso.style.display = 'block';

    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('assunto').value = '';
    document.getElementById('mensagem').value = '';
    document.getElementById('termos').checked = false;
}

