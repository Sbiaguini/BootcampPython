// REQUERIMIENTO 1: Cambiar el texto del botón de sesión
function cambiarBotonSesion() {
    // 1. Encontramos el botón por su ID
    const boton = document.getElementById("sesionBtn");
    
    // 2. Revisamos qué texto tiene
    if (boton.innerText === "Iniciar sesión") {
        // 3. Si dice "Iniciar sesión", lo cambiamos a "Cerrar sesión"
        boton.innerText = "Cerrar sesión";
    } else {
        // 4. Si no, lo cambiamos a "Iniciar sesión" (asumiendo que dice Cerrar sesión)
        boton.innerText = "Iniciar sesión";
    }
}

// REQUERIMIENTO 2: Ocultar el botón "Agregar definición"
function ocultarBotonAgregar() {
    // 1. Encontramos el botón por su ID
    const boton = document.getElementById("agregarBtn");
    
    // 2. Le decimos que no se muestre
    boton.style.display = "none";
}


// REQUERIMIENTOS 3 y 4: Alerta de "Me gusta" y Aumentar contador
// Recibimos el título de la definición y el ID del contador
function darLike(titulo, contadorId) {
    
    // REQUERIMIENTO 3: Muestra la ventana de alerta (alarma)
    alert(titulo + " fue likeado (was liked)");

    // REQUERIMIENTO 4: Aumentar el contador
    
    // 1. Encontramos el elemento SPAN donde está el número
    const spanContador = document.getElementById(contadorId);
    
    // 2. Obtenemos el texto (el número), lo convertimos a número entero (parseInt)
    let likesActuales = parseInt(spanContador.innerText);
    
    // 3. Le sumamos 1
    likesActuales++; // Esto es igual a likesActuales = likesActuales + 1;
    
    // 4. Ponemos el nuevo número dentro del SPAN
    spanContador.innerText = likesActuales;
}