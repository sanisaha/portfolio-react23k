const menubar = document.querySelector('.menubar');
const backToTop = document.querySelector('.backToTop');
const menu = document.querySelector('#mobileMenu');

window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 100) {
        menubar.style.backgroundColor = 'black';
        backToTop.style.display = 'none'}
    else if (scroll > 100) {
        menubar.style.backgroundColor = 'green';
        backToTop.style.display = 'block'}}

function showMenu () {
    if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
}