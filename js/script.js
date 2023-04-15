let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("Nav").style.top = "0";
    } else {
      document.getElementById("Nav").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }

function abrirCerrarResponsiveNav() {
  if (screen.orientation.type === "portrait-primary" || screen.orientation.type === "portrait-secondary") {
    let Nav = document.getElementById("Nav");
    let IconMobileNav = document.getElementById("iconomobilenav");
    if (Nav.className === "nav") {
      Nav.className += " responsive";
      IconMobileNav.className = "fa-solid fa-x";
    } else {
      Nav.className = "nav";
      IconMobileNav.className = "fa-solid fa-bars";
    }
  }
}

function ocultarNav() {
  document.getElementById("Nav").style.top = "-100px";
  abrirCerrarResponsiveNav();
}

function setiframe(source) {
let iframe = document.getElementById("iframe");
let fullscreenBoton = document.getElementById("boton-fullscreen");

if (window.innerWidth < 950) {
  iframe.style.width = "330px";
  iframe.style.height = "600px";
  document.getElementById("contenedor-full-screen").style.width = "330px";
  
  if (source == 'https://v6p9d9t4.ssl.hwcdn.net/html/7405244/index.html'){
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