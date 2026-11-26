
// ========================================
// MI ESTUDIO GENERATIVO
// CONEJITO GEOMÉTRICO CON CUPCAKE
// ========================================


// 1. OBTENER EL CANVAS

const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

const ancho = canvas.width;
const alto = canvas.height;


// 2. DEFINIR LAS PALETAS

const paletas = {

    azul: {
        fondo1: "#18234f",
        fondo2: "#28758c",
        conejo: "#dceaff",
        orejas: "#8cb6dc",
        interior: "#f4b5d0",
        cupcake: "#b9d9ed",
        crema: "#f5d8e8",
        detalle: "#ffffff",
        ojos: "#28314f"
    },

    rosado: {
        fondo1: "#f7b9d2",
        fondo2: "#e78caf",
        conejo: "#fff0f5",
        orejas: "#f5b5ce",
        interior: "#e88cac",
        cupcake: "#f3a9c4",
        crema: "#fff4df",
        detalle: "#ffffff",
        ojos: "#60364e"
    },

    grises: {
        fondo1: "#555b69",
        fondo2: "#b9bdc5",
        conejo: "#f5f5f5",
        orejas: "#c7cbd2",
        interior: "#9299a5",
        cupcake: "#b9bec8",
        crema: "#ffffff",
        detalle: "#ffffff",
        ojos: "#343944"
    }

};


// PALETA INICIAL

let paletaActual = paletas.azul;


// 3. FUNCIÓN PARA DIBUJAR CÍRCULOS

function circulo(x, y, radio, color) {

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


// 4. FUNCIÓN PARA DIBUJAR ELIPSES

function elipse(x, y, rx, ry, color) {

    ctx.beginPath();

    ctx.ellipse(
        x,
        y,
        rx,
        ry,
        0,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = color;

    ctx.fill();

}


// 5. FUNCIÓN PARA DIBUJAR TRIÁNGULOS

function triangulo(x1, y1, x2, y2, x3, y3, color) {

    ctx.beginPath();

    ctx.moveTo(x1, y1);

    ctx.lineTo(x2, y2);

    ctx.lineTo(x3, y3);

    ctx.closePath();

    ctx.fillStyle = color;

    ctx.fill();

}


// 6. DIBUJAR EL FONDO

function dibujarFondo() {

    const degradado = ctx.createLinearGradient(
        0, 0, ancho, alto
    );

    degradado.addColorStop(
        0,
        paletaActual.fondo1
    );

    degradado.addColorStop(
        1,
        paletaActual.fondo2
    );

    ctx.fillStyle = degradado;

    ctx.fillRect(
        0,
        0,
        ancho,
        alto
    );

}


// 7. DIBUJAR DECORACIONES

function dibujarDecoracion() {

    for (let i = 0; i < 20; i++) {

        let x = Math.random() * ancho;

        let y = Math.random() * alto;

        let tamaño = Math.random() * 9 + 4;

        // Evitar que las decoraciones tapen al conejo

        if (
            x > 170 &&
            x < 540 &&
            y > 100 &&
            y < 490
        ) {

            continue;

        }

        if (i % 2 === 0) {

            circulo(
                x,
                y,
                tamaño,
                paletaActual.detalle
            );

        } else {

            ctx.fillStyle = paletaActual.interior;

            ctx.fillRect(
                x,
                y,
                tamaño,
                tamaño
            );

        }

    }

}


// 8. DIBUJAR EL CONEJITO

function dibujarConejito() {

    const p = paletaActual;


    // OREJAS

    triangulo(
        220, 210,
        225, 55,
        290, 195,
        p.conejo
    );

    triangulo(
        300, 190,
        365, 55,
        370, 220,
        p.conejo
    );


    // INTERIOR DE LAS OREJAS

    triangulo(
        239, 174,
        231, 87,
        273, 174,
        p.interior
    );

    triangulo(
        318, 174,
        357, 88,
        349, 180,
        p.interior
    );


    // CUERPO

    elipse(
        300, 390,
        112, 130,
        p.conejo
    );


    // PATITAS

    elipse(
        244, 480,
        48, 24,
        p.conejo
    );

    elipse(
        355, 480,
        48, 24,
        p.conejo
    );


    // CABEZA

    circulo(
        300, 245,
        105,
        p.conejo
    );


    // MEJILLAS

    circulo(
        230, 280,
        23,
        p.interior
    );

    circulo(
        370, 280,
        23,
        p.interior
    );


    // OJOS

    circulo(
        270, 240,
        8,
        p.ojos
    );

    circulo(
        330, 240,
        8,
        p.ojos
    );


    // BRILLO DE LOS OJOS

    circulo(
        273, 237,
        2.5,
        "#ffffff"
    );

    circulo(
        333, 237,
        2.5,
        "#ffffff"
    );


    // NARIZ

    triangulo(
        292, 265,
        308, 265,
        300, 275,
        p.interior
    );


    // BOCA

    ctx.strokeStyle = p.ojos;

    ctx.lineWidth = 3;

    ctx.beginPath();

    ctx.moveTo(300, 275);

    ctx.lineTo(300, 284);

    ctx.lineTo(289, 289);

    ctx.moveTo(300, 284);

    ctx.lineTo(311, 289);

    ctx.stroke();


    // BRAZOS

    ctx.strokeStyle = p.conejo;

    ctx.lineWidth = 25;

    ctx.lineCap = "round";

    ctx.beginPath();

    ctx.moveTo(235, 360);

    ctx.lineTo(340, 390);

    ctx.stroke();

    ctx.beginPath();

    ctx.moveTo(365, 360);

    ctx.lineTo(430, 390);

    ctx.stroke();


    // CUPCAKE: BASE

    ctx.beginPath();

    ctx.moveTo(395, 355);

    ctx.lineTo(490, 355);

    ctx.lineTo(475, 445);

    ctx.lineTo(410, 445);

    ctx.closePath();

    ctx.fillStyle = p.cupcake;

    ctx.fill();


    // DETALLES DE LA BASE

    ctx.strokeStyle = p.interior;

    ctx.lineWidth = 4;

    ctx.beginPath();

    ctx.moveTo(420, 365);

    ctx.lineTo(425, 430);

    ctx.moveTo(445, 365);

    ctx.lineTo(445, 438);

    ctx.moveTo(465, 365);

    ctx.lineTo(460, 430);

    ctx.stroke();


    // CREMA DEL CUPCAKE

    circulo(410, 350, 27, p.crema);

    circulo(435, 330, 34, p.crema);

    circulo(463, 350, 27, p.crema);

    circulo(445, 355, 38, p.crema);


    // CEREZA

    circulo(
        445, 285,
        13,
        p.interior
    );


    // TALLO

    ctx.strokeStyle = p.ojos;

    ctx.lineWidth = 3;

    ctx.beginPath();

    ctx.moveTo(445, 273);

    ctx.lineTo(452, 260);

    ctx.stroke();


    // MANITAS

    circulo(
        397, 376,
        17,
        p.conejo
    );

    circulo(
        480, 376,
        17,
        p.conejo
    );


    // DECORACIONES DEL CUPCAKE

    circulo(420, 345, 4, p.interior);

    circulo(455, 340, 4, p.interior);

    circulo(438, 365, 4, p.interior);


    // TEXTO

    ctx.textAlign = "center";

    ctx.fillStyle = p.detalle;

    ctx.font = "bold 27px Arial";

    ctx.fillText(
        "LITTLE SWEET BUNNY",
        ancho / 2,
        550
    );

}


// 9. FUNCIÓN PRINCIPAL

function generarComposicion() {

    ctx.clearRect(
        0,
        0,
        ancho,
        alto
    );

    dibujarFondo();

    dibujarDecoracion();

    dibujarConejito();

}


// 10. BOTÓN AZUL

document.getElementById("neon")
.addEventListener("click", function() {

    paletaActual = paletas.azul;

    generarComposicion();

});


// 11. BOTÓN ROSADO

document.getElementById("atardecer")
.addEventListener("click", function() {

    paletaActual = paletas.rosado;

    generarComposicion();

});


// 12. BOTÓN GRISES

document.getElementById("oceano")
.addEventListener("click", function() {

    paletaActual = paletas.grises;

    generarComposicion();

});


// 13. BOTÓN GENERAR

document.getElementById("generar")
.addEventListener("click", function() {

    generarComposicion();

});


// 14. GUARDAR IMAGEN PNG

document.getElementById("guardar")
.addEventListener("click", function() {

    const enlace = document.createElement("a");

    enlace.download = "little-sweet-bunny.png";

    enlace.href = canvas.toDataURL("image/png");

    enlace.click();

});


// 15. DIBUJAR AUTOMÁTICAMENTE

generarComposicion();
