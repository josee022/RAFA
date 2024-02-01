function quitar_numeros() {

    var frase = prompt('Introduce una frase:');

    var cadena_sin = '';

    for (var i = 0; i < frase.length; i++) {
      var es_letra = frase[i];
      if (!isNaN(es_letra)) {
        continue; /*continue funciona para omitir si es un numero */
      }
      cadena_sin += es_letra; /* aqui llega al no ser un numero y lo añade */
    }

    document.getElementById('div1').innerHTML = cadena_sin;
  }
  quitar_numeros();
