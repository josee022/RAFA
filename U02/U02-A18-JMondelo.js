var valores = [true, 5, false, "hola", "adios", 2];

function array(valores) {

    var numero = [];
    var suma = 0;
    var strings = [];
    var booleanos = [];

    for (var x of valores) {
        if (!isNaN(x) && x != true && x != false) {
            numero.push(x);
        }
    }
    for (var i of numero){
        suma += i;
    }
    document.getElementById('div1').innerHTML = 'La suma de ' + numero + ' es : ' + suma;


    for (var y of valores) {
        if (y == true || y == false) {
            booleanos.push(y);
        }
    }
    var resultado = booleanos[0] && booleanos[1];
    var resultado1 = booleanos[0] || booleanos[1];
    document.getElementById('div2').innerHTML = 'Al utilizar && entre los booleanos el resultado es : ' + resultado + ', y al utilizar || el resultado es : ' + resultado1;


    for (var z of valores) {
        if (typeof (z) === 'string') {
            strings.push(z);
        }
    }
    if (strings[0].length > strings[1]){
        document.getElementById('div3').innerHTML = 'La cadena mas larga es : ' + strings[0];
    } else {
        document.getElementById('div3').innerHTML = 'La cadena mas larga es : ' + strings[1];
    }
}
array(valores)
