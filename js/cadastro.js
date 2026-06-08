/* cadastro.js — Floratech
   Validação e envio do formulário de cadastro */

document.addEventListener('DOMContentLoaded', function () {

    var form = document.getElementById('formCadastro');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        realizarCadastro();
    });

    var btnCadastrar = document.getElementById('btnCadastrar');
    if (btnCadastrar) {
        btnCadastrar.addEventListener('click', function (e) {
            e.preventDefault();
            realizarCadastro();
        });
    }
});

function realizarCadastro() {
    var nome = document.getElementById('idNome').value.trim();
    var email = document.getElementById('idEmail').value.trim();
    var senha = document.getElementById('idSenha').value;
    var confirmar = document.getElementById('idConfirmarSenha').value;

    if (nome.length < 3) {
        abrirModalCadastro('O nome deve ter pelo menos 3 caracteres.', false);
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        abrirModalCadastro('Informe um e-mail válido.', false);
        return;
    }

    if (senha.length < 5) {
        abrirModalCadastro('A senha deve ter pelo menos 5 caracteres.', false);
        return;
    }

    if (senha !== confirmar) {
        abrirModalCadastro('As senhas não coincidem. Verifique e tente novamente.', false);
        return;
    }

    /* Cadastro simulado com sucesso */
    abrirModalCadastro('Cadastro realizado com sucesso! Bem-vindo à Floratech, ' + nome + '!', true);

    /* Limpa os campos após sucesso */
    document.getElementById('formCadastro').reset();
}

function abrirModalCadastro(mensagem, sucesso) {
    var modal = document.getElementById('meuModal');
    var divMsg = document.getElementById('msgModal');

    if (sucesso) {
        divMsg.innerHTML = "<p style='color:#4a6b22;font-weight:700;'>" + mensagem + "</p>";
    } else {
        divMsg.innerHTML = "<p style='color:#c0392b;font-weight:700;'>" + mensagem + "</p>";
    }

    modal.showModal();

    var btnFechar = document.getElementById('btnFecharModal');
    btnFechar.onclick = function () { modal.close(); };
}
