document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.getElementById("menu");
    let lastScrollTop = 0;

    menuIcon.addEventListener("click", function() {
        menu.classList.toggle("active");
    });

    window.addEventListener("scroll", function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scroll hacia abajo
            document.querySelector('.navs').style.top = "-80px"; // Ajustar según la altura del header
        } else {
            // Scroll hacia arriba
            document.querySelector('.navs').style.top = "0";
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para Mobile or negative scrolling
    });
});