/* faq.js — Floratech
   Accordion: abre/fecha perguntas frequentes */

function toggleFaq(botao) {

    var resposta = botao.nextElementSibling;
    var icone = botao.querySelector('.faq__icone');

    /* Verifica se o item já estava aberto antes de fechar os demais */
    var estaAberto = resposta.classList.contains('faq__resposta--aberta');

    /* Fecha todos os itens do accordion */
    var todasRespostas = document.querySelectorAll('.faq__resposta');
    var todosIcones = document.querySelectorAll('.faq__icone');
    var todosBotoes = document.querySelectorAll('.faq__pergunta');

    for (var i = 0; i < todasRespostas.length; i++) {
        todasRespostas[i].classList.remove('faq__resposta--aberta');
        todosIcones[i].textContent = '+';
        todosBotoes[i].classList.remove('faq__pergunta--ativa');
    }

    /* Se o item estava fechado, abre apenas ele */
    if (!estaAberto) {
        resposta.classList.add('faq__resposta--aberta');
        icone.textContent = '−';
        botao.classList.add('faq__pergunta--ativa');
    }
}
