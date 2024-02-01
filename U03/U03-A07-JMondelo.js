function numeros_aleatorios() {

    var solucion = [];

    for (var i = 0; i < 10; i++) {
        var numero = Math.floor(Math.random() * 21);
        solucion.push(numero);
    }
    document.getElementById('div1').innerHTML = "Números aleatorios: " + solucion.join(", ");
}
numeros_aleatorios();
