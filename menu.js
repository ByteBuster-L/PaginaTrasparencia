document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    // 1. CORRECCIÓN: Seleccionamos el menú móvil por su clase.
    const menu = document.querySelector(".nav-mobile"); 
    let lastScrollTop = 0;

    if (menuIcon && menu) {
        menuIcon.addEventListener("click", function() {
            menu.classList.toggle("active");
            console.log("Menú móvil clickeado");
        });

        document.addEventListener("click", function(event) {
          // Si el menú está abierto y el clic NO es sobre el menú ni el ícono
          if (
             menu.classList.contains("active") &&
             !menu.contains(event.target) &&
             !menuIcon.contains(event.target) 
          ) {
            menu.classList.remove("active");
          }
        });

        // Cerrar menú al hacer clic en un enlace
        menu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", function() {
                menu.classList.remove("active");
            });
        });
    }

    window.addEventListener("scroll", function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const header = document.querySelector('.header');

        if (header) {
            if (currentScroll > lastScrollTop) {
                header.style.top = "-170px";
            } else {
                header.style.top = "0";
            }
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});