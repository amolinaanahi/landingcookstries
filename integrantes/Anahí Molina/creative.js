// CREATIVE CODE STUDIO
// Programación del Canvas

// 1. OBTENER EL CANVAS

const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

const ancho = canvas.width;
const alto = canvas.height;


// 2. DEFINIR PALETAS

const paletas = {

    Azul: [
        "#173555",
        "#194c70",
        "#286090",
        "#5878a7",
        "#4d74a4"
    ],

    Rosado: [
        "#461b2e",
        "#a34474",
        "#c878b5",
        "#ff66b8",
        "#eba3d1"
    ],

    Grises: [
        "#ccd3d7",
        "#818789",
        "#858e91",
        "#c7cbcb",
        "#d1fae5"
    ]
};

// Paleta inicial
let paletaActual = paletas.Azul;


// 3. FUNCIÓN PARA NÚMEROS ALEATORIOS

function aleatorio(minimo, maximo) {

    return Math.random() * (maximo - minimo) + minimo;

}


// 4. DIBUJAR EL FONDO

function dibujarFondo() {

    const degradado = ctx.createLinearGradient(
        0, 0, ancho, alto
    );

    degradado.addColorStop(0, paletaActual[0]);
    degradado.addColorStop(1, paletaActual[1]);

    ctx.fillStyle = degradado;

    ctx.fillRect(0, 0, ancho, alto);
}


// 5. DIBUJAR UN CÍRCULO

function dibujarCirculo(x, y, radio, color) {

    ctx.beginPath();

    ctx.arc(
        x,
        y,
        radio,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = color;

    ctx.fill();
}


// 6. DIBUJAR UN RECTÁNGULO

function dibujarRectangulo(x, y, tamaño, color) {

    ctx.fillStyle = color;

    ctx.fillRect(
        x,
        y,
        tamaño,
        tamaño
    );
}


// 7. DIBUJAR FORMAS ALEATORIAS

function dibujarFormas() {

    for (let i = 0; i < 24; i++) {

        let x = aleatorio(0, ancho);
        let y = aleatorio(0, alto);

        let tamaño = aleatorio(15, 95);

        let color = paletaActual[
            2 + (i % 3)
        ];

        // Alternamos círculos y cuadrados

        if (i % 2 === 0) {

            dibujarCirculo(
                x,
                y,
                tamaño / 2,
                color
            );

        } else {

            dibujarRectangulo(
                x,
                y,
                tamaño,
                color
            );
        }
    }
}


// 8. DIBUJAR TEXTO

function dibujarTexto() {

    ctx.fillStyle = "#e4e8ee";

    ctx.textAlign = "center";

    ctx.font = "bold 58px Arial";

    ctx.fillText(
        "CREATIVE",
        ancho / 2,
        alto / 2 - 15
    );

    ctx.fillText(
        "CODE",
        ancho / 2,
        alto / 2 + 55
    );

    ctx.font = "18px Arial";

    ctx.fillText(
        "ART + LOGIC + DESIGN",
        ancho / 2,
        alto - 45
    );
}

// 8. DIBUJAR TEXTO

function dibujarConejito() {

    // OREJA IZQUIERDA

    dibujarCirculo(245, 115, 29, paletaActual[4]);
    dibujarCirculo(245, 112, 15, paletaActual[3]);

    // OREJA DERECHA

    dibujarCirculo(345, 115, 29, paletaActual[4]);
    dibujarCirculo(345, 112, 15, paletaActual[3]);

    // CUERPO

    dibujarCirculo(295, 395, 100, paletaActual[4]);

    dibujarCirculo(295, 410, 58, paletaActual[3]);

    // PATITAS

    dibujarCirculo(235, 475, 35, paletaActual[4]);
    dibujarCirculo(355, 475, 35, paletaActual[4]);

    // CABEZA

    dibujarCirculo(295, 250, 100, paletaActual[4]);

    // MEJILLAS

    dibujarCirculo(225, 275, 15, paletaActual[3]);
    dibujarCirculo(365, 275, 15, paletaActual[3]);

    // OJOS

    dibujarCirculo(263, 235, 7, "#59434D");
    dibujarCirculo(327, 235, 7, "#59434D");

    // NARIZ

    dibujarCirculo(295, 267, 8, paletaActual[3]);

    // BOCA

    ctx.beginPath();
    ctx.moveTo(295, 275);
    ctx.lineTo(295, 290);
    ctx.strokeStyle = "#59434D";
    ctx.lineWidth = 3;
    ctx.stroke();

    // CUPCAKE - BASE

    ctx.beginPath();

    ctx.moveTo(410, 350);
    ctx.lineTo(550, 350);
    ctx.lineTo(530, 445);
    ctx.lineTo(430, 445);

    ctx.closePath();

    ctx.fillStyle = paletaActual[2];
    ctx.fill();

    // RAYAS DEL CUPCAKE

    for (let i = 0; i < 4; i++) {

        let x = 430 + i * 30;

        ctx.beginPath();
        ctx.moveTo(x, 360);
        ctx.lineTo(x + 10, 435);

        ctx.strokeStyle = paletaActual[4];
        ctx.lineWidth = 4;
        ctx.stroke();

    }

    // CREMA DEL CUPCAKE

    dibujarCirculo(430, 335, 35, paletaActual[3]);
    dibujarCirculo(465, 305, 42, paletaActual[3]);
    dibujarCirculo(505, 335, 35, paletaActual[3]);
    dibujarCirculo(470, 280, 28, paletaActual[3]);

    // CEREZA

    dibujarCirculo(470, 248, 13, paletaActual[4]);

    // BRAZOS

    ctx.beginPath();
    ctx.moveTo(230, 365);
    ctx.lineTo(390, 350);

    ctx.strokeStyle = paletaActual[4];
    ctx.lineWidth = 25;
    ctx.lineCap = "round";
    ctx.stroke();

    // TÍTULO

    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.font = "bold 30px Georgia";

    ctx.fillText(
        "MY LITTLE BUNNY",
        ancho / 2,
        65
    );

    ctx.font = "italic 17px Georgia";

    ctx.fillText(
        "Sweet cupcake dreams",
        ancho / 2,
        95
    );

}


// 9. FUNCIÓN PRINCIPAL

function generarComposicion() {

    // Limpiamos el dibujo anterior

    ctx.clearRect(0, 0, ancho, alto);

    dibujarFondo();

    dibujarFormas();

    dibujarTexto();
}


// 10. BOTONES DE COLORES

document.getElementById("Azul")
    .addEventListener("click", function() {

        paletaActual = paletas.Azul;

        generarComposicion();

    });


document.getElementById("Rosado")
    .addEventListener("click", function() {

        paletaActual = paletas.Rosado;

        generarComposicion();

    });


document.getElementById("Grises")
    .addEventListener("click", function() {

        paletaActual = paletas.Grises;

        generarComposicion();

    });


// 11. BOTÓN GENERAR

document.getElementById("generar")
    .addEventListener("click", function() {

        generarComposicion();

    });


// 12. GUARDAR PNG

document.getElementById("guardar")
    .addEventListener("click", function() {

        const enlace = document.createElement("a");

        enlace.download = "mi-arte-canvas.png";

        enlace.href = canvas.toDataURL("image/png");

        enlace.click();

    });


// 13. DIBUJAR AL ABRIR LA PÁGINA

generarComposicion();
