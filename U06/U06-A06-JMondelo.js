function activarDesactivarBotones(activar) {
    var elementos = [
        document.getElementById('boton1'),
        document.getElementById('boton2'),
        document.getElementById('boton3'),
        document.getElementById('boton4'),
        document.getElementById('boton5')
    ];

    elementos.forEach(function (elemento) {
        elemento.disabled = !activar;
    });
}
