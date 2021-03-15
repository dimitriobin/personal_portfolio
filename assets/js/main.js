const menuBtn = document.querySelector('.menu-btn');
const btnMessage = document.querySelector('.menu-btn span');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        showMenu = true;
        btnMessage.innerHTML = 'Fermer le menu';
    } else {
        menuBtn.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        showMenu = false;
        btnMessage.innerHTML = 'Ouvrir le menu';
    }
}