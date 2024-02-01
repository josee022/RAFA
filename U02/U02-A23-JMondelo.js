var caracteres = parseInt(prompt('Introduce la cantidad de * :'));

function piramide(caracteres) {

    var solucion = '';

    for (var i = 1; i <= caracteres; i += 2) {
      var espacios = (caracteres - i) / 2;
      var asteriscos = i;
      var linea = '&nbsp&nbsp;'.repeat(espacios) + '*'.repeat(asteriscos) + '<br>';
      solucion += linea;
    }

    for (var i = caracteres - 2; i >= 1; i -= 2) {
      var espacios = (caracteres - i) / 2;
      var asteriscos = i;
      var linea = '&nbsp&nbsp;'.repeat(espacios) + '*'.repeat(asteriscos) + '<br>';
      solucion += linea;
    }

    document.write(solucion);
  }

  piramide(caracteres);
