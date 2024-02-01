function diaSeleccionado() {

    var dia = document.getElementsByName("dia");
    var ultimoDiaMarcado = null;

    dia.forEach(function (checkbox) {

        if (checkbox.checked) {
            ultimoDiaMarcado = checkbox.value;
        }
    });

    if (ultimoDiaMarcado !== null) {
        document.getElementById("diaPreferente").value = ultimoDiaMarcado;
    }
}
