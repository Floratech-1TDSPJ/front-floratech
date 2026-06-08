/* login.js — Floratech
   Autenticação simulada com lista local de usuários */

const usuarios = [
    { email: "joao@floratech.com",      senha: "12345", nome: "João Vitor Cruz de Lima" },
    { email: "matheus@floratech.com",   senha: "12345", nome: "Matheus Ferreira Antônio" },
    { email: "sophia@floratech.com",    senha: "12345", nome: "Sophia Silveira dos Santos" },
    { email: "renato@floratech.com",    senha: "12345", nome: "Renato da Silva Tenorio" },
    { email: "scolamieri@floratech.com",senha: "12345", nome: "Renato Ruiz Ferreira Fonseca Scolamieri" },
    { email: "produtor@floratech.com",  senha: "12345", nome: "Produtor Teste" }
];

document.addEventListener('DOMContentLoaded', function () {

    var botaoEntrar = document.getElementById('btnEntrar');
    if (!botaoEntrar) return;

    botaoEntrar.addEventListener('click', function (e) {
        e.preventDefault();

        var inputEmail = document.getElementById('idEmail');
        var inputSenha = document.getElementById('idSenha');

        var dadosForm = {
            email: inputEmail.value.trim(),
            senha: inputSenha.value
        };

        if (dadosForm.email === '' || dadosForm.senha === '') {
            abrirModal('Por favor, preencha todos os campos!', false);
            return;
        }

        var loginValido = false;
        var nomeUsuario = '';

        for (var i = 0; i < usuarios.length; i++) {
            if (usuarios[i].email === dadosForm.email && usuarios[i].senha === dadosForm.senha) {
                loginValido = true;
                nomeUsuario = usuarios[i].nome;
                break;
            }
        }

        if (loginValido) {
            abrirModal('Login realizado com sucesso! Bem-vindo, ' + nomeUsuario + '!', true);
            iniciarContador();
        } else {
            abrirModal('E-mail ou senha incorretos. Tente novamente.', false);
        }
    });
});

function abrirModal(mensagem, sucesso) {
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

function iniciarContador() {
    var divMsg = document.getElementById('msgModal');
    var contador = 5;

    var intervalo = setInterval(function () {
        contador--;
        divMsg.innerHTML = "<p style='color:#4a6b22;font-weight:700;'>Login realizado com sucesso!</p><p>Redirecionando em " + contador + " segundo(s)...</p>";

        if (contador === 0) {
            clearInterval(intervalo);
            window.location.href = '../../index.html';
        }
    }, 1000);
}
