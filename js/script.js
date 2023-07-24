// jshint esversion: 6

const nav = document.getElementById("nav");
const iIconoMenu = document.getElementById("icono-menu");
let prevScrollpos = window.scrollY;

window.onscroll = function() {
  let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav").style.top = "0";
    } 
    else if (currentScrollPos > 100){
    nav.className = "nav";
    iIconoMenu.className = "fa-solid fa-bars";
      document.getElementById("nav").style.top = "-200vh";
    }
    prevScrollpos = currentScrollPos;
  };

function abrirCerrarResponsiveNav() {
  if (screen.width <= 950) {
    if (nav.className === "nav") {
      nav.className += " responsive";
      iIconoMenu.className = "fa-solid fa-x";
    } else {
      nav.className = "nav";
      iIconoMenu.className = "fa-solid fa-bars";
    }
  }
}

function ocultarNav() {
  nav.className = "nav";
  iIconoMenu.className = "fa-solid fa-bars";
  document.getElementById("nav").style.top = "-200vh";
}