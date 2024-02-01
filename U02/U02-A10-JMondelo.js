var numero = parseInt(prompt("Introduce un numero :"));

function tabla(numero) {
    for (var x = 1; x <= 10; x++) {
        var multiplicacion = numero * x
        document.getElementById("div" + x).innerHTML = numero+ " x " +x+ " : " +multiplicacion;
    }
}
tabla(numero)
