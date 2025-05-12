const imagenes = [
    "images/carruselFotos/42_1img.png",
    "images/carruselFotos/42_2img.png",
    "images/carruselFotos/42_3img.png",
    "images/carruselFotos/42_4img.png",
    "images/carruselFotos/PP_1img.png",
    "images/carruselFotos/PP_2img.png",
    "images/carruselFotos/PP_3img.png"
];

let indice = 0;

document.addEventListener("DOMContentLoaded", function () {
    const img = document.getElementById("img");
    const btnSiguiente = document.getElementById("btn-siguiente");
    const btnAnterior = document.getElementById("btn-anterior");

    if (img && btnSiguiente && btnAnterior) {
        function actualizar() {
            img.src = imagenes[indice];
        }

        btnSiguiente.onclick = function () {
            indice = (indice + 1) % imagenes.length;
            actualizar();
        };

        btnAnterior.onclick = function () {
            indice = (indice - 1 + imagenes.length) % imagenes.length;
            actualizar();
        };

        actualizar();
    } else {
        console.error("No se han detectado los elementos correctamente en el DOM.");
    }
});