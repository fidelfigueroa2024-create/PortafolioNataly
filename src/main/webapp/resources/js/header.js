document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar-custom");
    if (!navbar)
        return;

    const hero = document.getElementById("hero");
    const toggler = document.querySelector(".navbar-toggler");
    const menu = document.getElementById("navbarNav"); // ID del collapse

    let lastScrollTop = 0;
    let menuOpen = false;

    /* ==============================
     MOBILE MENU (BOOTSTRAP)
     ============================== */
    if (menu && toggler) {
        // Detecta cuando se abre el menú
        menu.addEventListener("shown.bs.collapse", () => {
            menuOpen = true;
        });
        // Detecta cuando se cierra
        menu.addEventListener("hidden.bs.collapse", () => {
            menuOpen = false;
        });

        // Cierra el menú al hacer click en un link
        
        
        menu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                if (window.innerWidth <= 991 && menu.classList.contains("show")) {
                    setTimeout(() => {
                        toggler.click();
                    }, 200); // ⏱️ deja navegar primero
                }
            });
        });

    }

    /* ==============================
     SCROLL HANDLER
     ============================== */
    function handleHeaderScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Sombra
        navbar.classList.toggle("scrolled", scrollTop > 30);

        // Hide / show navbar solo desktop
        if (!menuOpen && window.innerWidth > 991) {
            if (scrollTop > lastScrollTop && scrollTop > 120) {
                navbar.classList.add("hide");
            } else {
                navbar.classList.remove("hide");
            }
        }

        lastScrollTop = Math.max(scrollTop, 0);

        // Transparente solo sobre hero (desktop)
        if (hero && window.innerWidth > 991) {
            const heroHeight = hero.offsetHeight;
            navbar.classList.toggle("transparent", scrollTop < heroHeight - 100);
        } else {
            navbar.classList.remove("transparent");
        }
    }

    window.addEventListener("scroll", handleHeaderScroll);
    window.addEventListener("load", handleHeaderScroll);

    /* ==============================
     LINK ACTIVO
     ============================== */
    document.querySelectorAll(".navbar-custom .nav-link").forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    /* ==============================
     INDICADOR (DESKTOP)
     ============================== */
    const indicator = document.querySelector(".nav-indicator");
    const navLinks = document.querySelectorAll(".navbar-custom .nav-link");

    if (indicator && window.innerWidth > 991) {
        function moveIndicator(el) {
            const rect = el.getBoundingClientRect();
            const parentRect = el.parentElement.parentElement.getBoundingClientRect();
            indicator.style.width = `${rect.width}px`;
            indicator.style.transform = `translateX(${rect.left - parentRect.left}px)`;
        }

        navLinks.forEach(link => {
            if (link.classList.contains("active"))
                moveIndicator(link);
            link.addEventListener("mouseenter", () => moveIndicator(link));
        });
    }

});