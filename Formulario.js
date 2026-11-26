
// OBTENER EL FORMULARIO

const formulario = document.getElementById("formularioContacto");

const listaMensajes = document.getElementById("listaMensajes");

const confirmacion = document.getElementById("confirmacion");

// RECUPERAR LOS MENSAJES GUARDADOS

let mensajes = JSON.parse(localStorage.getItem("mensajesCookstries")) || [];

// GUARDAR MENSAJES

function guardarMensajes() {
    localStorage.setItem("mensajesCookstries", JSON.stringify(mensajes));
}

// MOSTRAR LOS MENSAJES

function mostrarMensajes() {

    listaMensajes.innerHTML = "";

    if (mensajes.length === 0) {
        listaMensajes.textContent = "Todavía no hay mensajes recibidos.";
        return;
    }

    mensajes.forEach((mensaje, indice) => {

        const tarjeta = document.createElement("div");
        tarjeta.className = "mensaje-tarjeta";

        const titulo = document.createElement("h4");
        titulo.textContent = mensaje.nombre;

        const correo = document.createElement("p");
        correo.textContent = "Correo: " + mensaje.correo;

        const asunto = document.createElement("p");
        asunto.textContent = "Asunto: " + mensaje.asunto;

        const contenido = document.createElement("p");
        contenido.textContent = "Mensaje: " + mensaje.mensaje;

        const fecha = document.createElement("p");
        fecha.textContent = "Fecha: " + mensaje.fecha;

        const eliminar = document.createElement("button");
        eliminar.textContent = "Eliminar mensaje";

        eliminar.addEventListener("click", function () {
            mensajes.splice(indice, 1);
            guardarMensajes();
            mostrarMensajes();
        });

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(correo);
        tarjeta.appendChild(asunto);
        tarjeta.appendChild(contenido);
        tarjeta.appendChild(fecha);
        tarjeta.appendChild(eliminar);

        listaMensajes.appendChild(tarjeta);

    });
}

// EVENTO PARA ENVIAR EL FORMULARIO

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nuevoMensaje = {

        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        asunto: document.getElementById("asunto").value,
        mensaje: document.getElementById("mensaje").value,
        fecha: new Date().toLocaleString()

    };

    mensajes.push(nuevoMensaje);

    guardarMensajes();

    mostrarMensajes();

    formulario.reset();

    confirmacion.textContent = "¡Tu mensaje se ha guardado correctamente! ✦";

});

// MOSTRAR LOS MENSAJES AL ABRIR LA PÁGINA

mostrarMensajes();
