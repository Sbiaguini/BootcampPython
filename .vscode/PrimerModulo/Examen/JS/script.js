/* Alerta de donacion */
function mostrarAlertaDonacion() {
    alert("¡Gracias por donar a AdoptaTuÁrbol!!");
}

/* Cambiar  estado del boton */
function cambiarEstadoAdopcion(buttonId) {
    const boton = document.getElementById(buttonId);
    
    if (boton.innerText === "Adoptar") {
        boton.innerText = "Adoptado";
        boton.classList.add("adoptado");
    } 
    else {
        boton.innerText = "Adoptar";
        boton.classList.remove("adoptado");
    }
}

/* Actualizar el filtro */
function actualizarTextoFiltro() {
    const selectElemento = document.getElementById("filtroArboles");
    const valorSeleccionado = selectElemento.value; 
    const h2Texto = document.getElementById("mostrarTexto");
    h2Texto.innerText = "Mostrando: " + valorSeleccionado;
}