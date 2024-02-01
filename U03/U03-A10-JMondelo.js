var frase = prompt('Introduce una frase :').trim();
var marca_inicio = prompt('Introduce la marca inicial :');
var marca_final = prompt('Introduce la marca final :');

function string(frase, marca_inicio, marca_final){


    var primer_lugar = frase.indexOf(marca_inicio);
    var segundo_lugar = frase.indexOf(marca_final)
    var frase_extraida = frase.slice(primer_lugar, segundo_lugar);


    alert('Frase completa : ' +frase+ '. Frase extraida : ' +frase_extraida+ marca_final);
}
string(frase, marca_inicio, marca_final)
