var numero = parseFloat(prompt('Introduce el numero :'));

function sumar_digitos(numero) {

    var cadena = numero.toString();
    var suma = [];
    var contador = 0;

    for (var i of cadena) {
        if (!isNaN(i)) {
            suma.push(i);
            contador += parseInt(i);
        }
    }
    document.getElementById('div1').innerHTML = contador;

    var confirmar = confirm('¿Quieres sumar solo la parte entera?');

    if (confirmar) {
        var truncar = Math.trunc(numero);
        var cadena = truncar.toString();
        var suma = [];
        var contador = 0;

        for (var i of cadena) {
            if (!isNaN(i)) {
                suma.push(i);
                contador += parseInt(i);
            }
        }
        document.getElementById('div1').innerHTML = contador;
    } else {
        document.getElementById('div2').innerHTML = 'Gracias por su visita.'
    }

}
sumar_digitos(numero)
