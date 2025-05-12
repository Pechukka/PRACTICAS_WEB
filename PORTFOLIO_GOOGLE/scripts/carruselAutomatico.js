const imagenes = [
    "images/carruselFotos/Up_1.png",
    "images/carruselFotos/Up_2.png",
    "images/carruselFotos/Up_3.png",
    "images/carruselFotos/Up_4.png",
    "images/carruselFotos/Up_5.png",
    "images/carruselFotos/Up_6.png",
    "images/carruselFotos/Up_7.png"
];

let indice = 0;
let intervalo;
let carruselActivo = true;

function actualizar(img) {
    img.src = imagenes[indice];
}

function avanzarImagen(img) {
    indice = (indice + 1) % imagenes.length;
    actualizar(img);
}

function iniciarCarrusel(img) {
    detenerCarrusel();
    intervalo = setInterval(function () {
        avanzarImagen(img);
    }, 3000);
}

function detenerCarrusel() {
    clearInterval(intervalo);
}

document.addEventListener("DOMContentLoaded", function () {
    const img = document.getElementById("imgCarrusel");
    const btnControl = document.getElementById("controlCarrusel");

    if (img && btnControl) {
        iniciarCarrusel(img);

        btnControl.onclick = function () {
            if (carruselActivo) {
                detenerCarrusel();
                btnControl.textContent = "REANUDAR";
            } else {
                iniciarCarrusel(img);
                btnControl.textContent = "PAUSAR";
            }
            carruselActivo = !carruselActivo;
        };
    } else {
        console.error("No se han detectado los elementos correctamente en el DOM.");
    }
});