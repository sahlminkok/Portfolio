const mobile = document.querySelector('#menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cancel = document.querySelector('#cancel');

function display() {
  mobileMenu.classList.remove('hidden');
}

mobile.addEventListener('click', display);

function hide() {
  mobileMenu.classList.add('hidden');
}

cancel.addEventListener('click', hide);
