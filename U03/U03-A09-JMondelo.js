var frase = prompt("Introduzca una frase :").trim();

function frases(frase) {

    var palabras = frase.split(' ');
    var numero_palabras = palabras.length;
    var primera_palabra = palabras[0];
    var ultima_palabra = palabras[palabras.length - 1];

    alert('La primera palabra : ' +primera_palabra+ '. La ultima palabra : ' +ultima_palabra+ '. Numero de palabras : ' +numero_palabras);
}

frases(frase);
