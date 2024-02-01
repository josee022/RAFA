function calcular_precio() {

    var total = parseFloat(document.getElementById('total').value);

    if (isNaN(total) || total < 0) {
        alert("Por favor, ingrese un total válido.");
    }

    var iva = total * 0.15;

    var envio = total < 100 ? 10 : 0;

    var total = total + iva + envio;

    document.getElementById('div1').innerText = 'El total de la compra sería de : ' + total + ' € ';
}
