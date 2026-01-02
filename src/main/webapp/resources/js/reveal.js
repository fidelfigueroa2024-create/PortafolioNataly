/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


/* ==============================
   REVEAL SECTIONS
============================== */
document.addEventListener("DOMContentLoaded", () => {

    const reveals = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        }, { threshold: 0.15 });

        reveals.forEach(el => observer.observe(el));

    } else {
        function revealOnScroll() {
            if (window.innerWidth < 768) return;

            reveals.forEach(el => {
                if (el.getBoundingClientRect().top < window.innerHeight - 120) {
                    el.classList.add("active");
                }
            });
        }

        window.addEventListener("scroll", revealOnScroll);
        window.addEventListener("load", revealOnScroll);
    }
});
