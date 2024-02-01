function frase() {

    var frases = prompt('Introduce una frase : ');
    var palabra = prompt('Introduce una palabra :');

    if (frases.includes(palabra)) {
        var encontrar = frases.indexOf(palabra);
        var longitud = palabra.length;
        var cambio = frases.replace(palabra, 'dwecl')
        alert('Aparece la palabra, su posición es la numero ' + encontrar + ' , su longitud es ' + longitud + ' y la frase con el cambio seria : ' + cambio);
    } else {
        alert('La palabra no se encuentra en la frase')
    }
}
frase();
