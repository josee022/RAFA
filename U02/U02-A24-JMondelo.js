function fibonacci() {

    var numero = parseInt(document.getElementById('fib').value);

    if (isNaN(numero) || numero < 1) {
        alert('Introduce un valor válido.');
    }

    var lista = [1, 1];

    for (var i = 2; i < numero; i++) {
        var introduce = lista[i - 1] + lista[i - 2];
        lista.push(introduce);
    }

    document.getElementById('div1').innerHTML = lista.join(', ');
}

fibonacci();
