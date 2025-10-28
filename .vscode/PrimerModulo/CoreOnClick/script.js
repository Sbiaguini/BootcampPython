//  Cambiar el texto del botón de sesión
function cambiarBotonSesion() {
    const boton = document.getElementById("sesionBtn");
    if (boton.innerText === "Iniciar sesión") {
        boton.innerText = "Cerrar sesión";
    } else {
        boton.innerText = "Iniciar sesión";
    }
}

//  Ocultar boton
function ocultarBotonAgregar() {
    const boton = document.getElementById("agregarBtn");
    boton.style.display = "none";
}

function darLike(titulo, contadorId) {
    
// Mostrar ventana de alerta
    alert(titulo + " fue likeado (was liked)");

// Aumentar el contador
    
    const spanContador = document.getElementById(contadorId);
    let likesActuales = parseInt(spanContador.innerText);
    likesActuales++;
    spanContador.innerText = likesActuales;
}