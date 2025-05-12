// Alterna entre modo claro y oscuro
function toggleModoOscuro() {
    const body = document.body;
    const modoOscuroActivo = body.classList.toggle("modo-oscuro");
    document.cookie = `modoOscuro=${modoOscuroActivo};path=/;max-age=${30 * 24 * 60 * 60}`;
}

// Se ejecuta cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    const modoOscuroGuardado = document.cookie.includes("modoOscuro=true");
    if (modoOscuroGuardado) {
        document.body.classList.add("modo-oscuro");
    }
    document.getElementById("modoOscuroBtn").addEventListener("click", toggleModoOscuro);
});

// Se ejecuta cuando la página termina de cargar
window.onload = () => {
    let savedMode = localStorage.getItem('ModoOscuroActivado');
    if (savedMode == 'true') {
        toggleDarkMode();
    }
};