/* ==============================
 UX GLOBAL
 ============================== */
document.addEventListener("DOMContentLoaded", () => {

    /* Fade entre páginas */
    document.querySelectorAll("a").forEach(link => {
        if (link.href && link.origin === location.origin && !link.hasAttribute("data-no-fade")) {
            link.addEventListener("click", e => {
                e.preventDefault();
                const href = link.href;

                document.body.style.transition = "opacity 0.4s ease";
                document.body.style.opacity = 0;

                setTimeout(() => {
                    window.location.href = href;
                }, 400);
            });
        }
    });

});


/* ==============================
 VIDEO SOBRE MÍ
 ============================== */
function playVideo() {
    const wrapper = document.querySelector('.video-wrapper');
    const video = document.getElementById('sobreMiVideo');

    video.play();
    video.setAttribute('controls', 'controls');
    wrapper.classList.add('playing');
}
