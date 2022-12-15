function AbrirCerrarResponsiveNav() {
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