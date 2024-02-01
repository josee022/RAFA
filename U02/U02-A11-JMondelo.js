var dni = parseInt(prompt('Introduce los numeros de su DNI :'));
var letra = prompt('Introduce su letra de DNI :').toUpperCase();

function aceptar_dni(dni, letra) {

    var lista_letras = 'TRWAGMYFPDXBNJZSQVHLCKE';

    if (isNaN(dni) || dni < 0 || dni > 99999999) {
        document.getElementById('div1').innerHTML = 'El número proporcionado no es válido';

    } else {
        var resto = dni % 23;
        var calcular_letra = lista_letras[resto];

        if (calcular_letra === letra) {
            document.getElementById('div1').innerHTML = 'Su letra es correcta';
        } else {
            document.getElementById('div1').innerHTML = 'Su letra es incorrecta';
        }
    }
}
aceptar_dni(dni, letra);
