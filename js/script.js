let prevScrollpos = window.pageYOffset;

function AbrirCerrarResponsiveNav() {
    let Nav = document.getElementById("Nav");
    let IconMobileNav = document.getElementById("iconomobilenav");
    if (Nav.className === "nav") {
      Nav.className += " responsive";
      IconMobileNav.className = "fa-solid fa-x";
      document.body.style.overflow = "hidden";
    } else {
      Nav.className = "nav";
      IconMobileNav.className = "fa-solid fa-bars";
      document.body.style.overflow = "auto";

    }
}

function CerrarResponsiveNav(){
  let Nav = document.getElementById("Nav");
  let IconMobileNav = document.getElementById("iconomobilenav");
  Nav.className = "nav";
  IconMobileNav.className = "fa-solid fa-bars";
}

function setiframe(ancho, altura, source){
let iframe = document.getElementById("iframe");
let fullscreenBoton = document.getElementById("boton-fullscreen");
iframe.setAttribute("src", source);
iframe.style.display = "inline-block";
iframe.style.width = ancho;
iframe.style.height = altura;
fullscreenBoton.style.display = "inline-block";
}

function fullscreen(){
let iframe = document.getElementById("iframe");
iframe.requestFullscreen();
}

window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("Nav").style.top = "0";
  } else {
    document.getElementById("Nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}