let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav").style.top = "0";
    } else {
      document.getElementById("nav").style.top = "-200vh";
    }
    prevScrollpos = currentScrollPos;
  }

function abrirCerrarResponsiveNav() {
  if (screen.orientation.type === "portrait-primary" || screen.orientation.type === "portrait-secondary") {
    let nav = document.getElementById("nav");
    let iIconoMenu = document.getElementById("icono-menu");
    if (nav.className === "nav") {
      nav.className += " responsive";
      iIconoMenu.className = "fa-solid fa-x";
    } else {
      nav.className = "nav";
      iIconoMenu.className = "fa-solid fa-bars";
    }
  }
}

function ocultarnav() {
  document.getElementById("nav").style.top = "-200vh";
  abrirCerrarResponsiveNav();
}

function setiframe(source) {
let iframe = document.getElementById("iframe");
let fullscreenBoton = document.getElementById("boton-fullscreen");

if (window.innerWidth < 950) {
  iframe.style.width = "330px";
  iframe.style.height = "600px";
  document.getElementById("contenedor-full-screen").style.width = "330px";
  
  if (source == 'https://v6p9d9t4.ssl.hwcdn.net/html/7978846/index.html'){
  iframe.setAttribute("src", "Juegos/nomobile.html");
}
  else{
  iframe.setAttribute("src", source);
}

} else {
  iframe.style.width = "855px";
  iframe.style.height = "480px";
  iframe.setAttribute("src", source);
  document.getElementById("contenedor-full-screen").style = "";
}

iframe.style.display = "inline-block";
fullscreenBoton.style.display = "inline-block";
}

function fullscreen(){
let iframe = document.getElementById("iframe");
iframe.requestFullscreen();
}