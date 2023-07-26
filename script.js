const menuActive = document.querySelector('.menu-activ');
console.log(menuActive);
const burger = document.querySelector('.burger');
const menuClose = document.querySelector('.menu-close');

function toggleMenu() {
    menuActive.classList.toggle('hidden1');
}

burger.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);