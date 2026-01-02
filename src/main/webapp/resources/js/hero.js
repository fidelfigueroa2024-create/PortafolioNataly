/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


/* ==============================
   HERO – TYPING EFFECT
============================== */
(() => {
    const text = "Hola, soy Nataly 👋";
    const speed = 90;
    let i = 0;

    function typeEffect() {
        const el = document.getElementById("typing-text");
        if (!el) return;

        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, speed);
        }
    }

    window.addEventListener("load", typeEffect);
})();
