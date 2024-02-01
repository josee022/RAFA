function multiplica() {

    var valor = parseInt(document.getElementById('mult').value);

    if (isNaN(valor) || valor < 1) {
        alert('Introduce un valor válido.');
    }

    var comienzo = 5;
    var resultado = comienzo;

    for (var i = 1; i < valor; i++) {
        comienzo *= 3;
        resultado += ',' + comienzo;
    }

    document.getElementById('div1').innerHTML = resultado;
}
multiplica();
