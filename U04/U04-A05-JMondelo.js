// Pide que introduzca las palabras
var palabra1 = prompt('Introduce la palabra: ');
var palabra2 = prompt('Introduce la palabra: ');
var palabra3 = prompt('Introduce la palabra: ');

// Las meto todas en un array
var array_palabras = [palabra1, palabra2, palabra3];
var palabrasX = array_palabras.join(',');

// Para colocar las palabras al revés
var alreves = array_palabras.slice().reverse();

// La primera palabra que el usuario mete
var primera = array_palabras[0];

// La ultima palabra que el usuario mete
var ultima = array_palabras[array_palabras.length -  1];

// El numero de palabras
var numero_palabras = array_palabras.length;

// Ordenadas de la a-z
var a_z = array_palabras.slice().sort();

// Ordena de la z-a
var z_a = array_palabras.slice().sort().reverse();


// Para no hacer tantos document lo meto en una variable y utilizo la variable que es mas facil
var soluciones = document.getElementById('div1');
soluciones.innerHTML += 'La lista de palabras es : ' + palabrasX + '<br><br>';
soluciones.innerHTML += 'La lista de palabras al reves es : ' + alreves + '<br><br>';
soluciones.innerHTML += 'La primera palabras es : ' + primera + '<br><br>';
soluciones.innerHTML += 'La ultima palabras es : ' + ultima + '<br><br>';
soluciones.innerHTML += 'El numero de palabras es : ' + numero_palabras + '<br><br>';
soluciones.innerHTML += 'La palabras ordenadas de la a-z son : ' + a_z + '<br><br>';
soluciones.innerHTML += 'La palabras ordenadas de la z-a son : ' + z_a + '<br><br>';
