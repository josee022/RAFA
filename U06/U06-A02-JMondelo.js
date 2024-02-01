function agregarNodo() {
    var texto = prompt("Ingresa un texto para el nuevo nodo:");

    var nuevoNodo = document.createElement("div");

    nuevoNodo.textContent = texto;

    document.getElementById("nodo").appendChild(nuevoNodo);
}

function eliminarNodo() {
    var nodoBorrar = document.getElementById("nodo");

    if (nodoBorrar.childNodes.length > 0) {
        nodoBorrar.removeChild(nodoBorrar.lastChild);
    } else {
        alert("No hay nodos para eliminar.");
    }
}
