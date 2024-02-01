// Esto crea el array con los impares del 1 al 21
var numeros_impares = [];
for (var i = 1; i <= 21; i += 2) {
    numeros_impares.push(i);
}

// Aqui calculamos la suma de los números impares, el reduce te deja un numero solo por eso el ultimo valor es 0 ya que el 0 será el valor inicial del total que es el acumulador.
var suma = numeros_impares.reduce(function (total, numero) {
    return total + numero;
}, 0);

// Aqui mostramos en orden inverso el array creado anteriormente
var inverso = numeros_impares.slice().reverse();

// Aqui le damos un numero y busca si esta en el array
var usuario = parseInt(prompt('Ingrese un numero :'));
var valor_en_array = numeros_impares.indexOf(usuario);

// Aqui borramos el numero si está en el array, sino se mantiene (el -1 es porque si no está, el indexof da de valor -1)
if (valor_en_array !== -1) {
    numeros_impares.splice(valor_en_array, 1);
}
var comprobacion = (valor_en_array !== -1 ? 'Si, operacion con éxito' : 'No, operacion sin éxito');

// Aqui ordenamos los impares ascendentes y descendentes
var ascendente = numeros_impares.slice();
var descendente = numeros_impares.slice().reverse();


// Para no hacer tantos document lo meto en una variable y utilizo la variable que es mas facil
var soluciones = document.getElementById('div1');
soluciones.innerHTML += 'La suma de los numeros impares es : ' + suma + '<br><br>';
soluciones.innerHTML += 'Los impares en order inverso son : ' + inverso + '<br><br>';
soluciones.innerHTML += '¿El valor introducido se encuentra en nuestros impares?: ' + comprobacion + '<br><br>';
soluciones.innerHTML += 'Array después de la busqueda (si se encontraba se eliminará, sino permanecerá) : ' + numeros_impares + '<br><br>';
soluciones.innerHTML += 'Array ordenado ascendentemente luego de la búsqueda: ' + ascendente + '<br><br>';
soluciones.innerHTML += 'Array ordenado descendentemente luega de la búsqueda: ' + descendente + '<br><br>';
