let menu = document.querySelector("#menu");
let mobileMenu = document.querySelector(".mobile-menu");
let cancel = document.querySelector("#cancel");

function display () {
  mobileMenu.classList.remove('hidden');
}

function hide () {
  mobileMenu.classList.add('hidden');
}
