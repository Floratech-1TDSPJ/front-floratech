/* menu.js — Floratech
   Controla o menu hambúrguer no mobile */

document.addEventListener('DOMContentLoaded', function () {

    const hamburger = document.getElementById('btnHamburger');
    const nav = document.getElementById('menuNav');

    if (!hamburger || !nav) return;

    /* Alterna a visibilidade do menu e a animação do ícone */
    hamburger.addEventListener('click', function () {
        const aberto = nav.classList.toggle('nav-aberta');
        hamburger.classList.toggle('aberto', aberto);
        hamburger.setAttribute('aria-expanded', aberto);
    });

    /* Fecha o menu ao clicar em qualquer link (mobile) */
    const links = nav.querySelectorAll('a');
    links.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('nav-aberta');
            hamburger.classList.remove('aberto');
            hamburger.setAttribute('aria-expanded', false);
        });
    });

    /* Fecha o menu ao redimensionar para tablet/desktop */
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) {
            nav.classList.remove('nav-aberta');
            hamburger.classList.remove('aberto');
            hamburger.setAttribute('aria-expanded', false);
        }
    });
});
