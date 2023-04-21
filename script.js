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

const form = document.querySelector('form');

function validateForm(event) {
  const email = document.querySelector('#email');
  const errorMessage = document.querySelector('#er-msg');
  if (email.value != email.value.toLowerCase()) {
    event.preventDefault();
    errorMessage.innerHTML = "Please use only lowercase";
  }
}
form.addEventListener('submit', validateForm);
