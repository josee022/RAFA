function calcularmultiplos() {

    var num1 = parseInt(prompt("Introduce el primer valor:"));
    var num2 = parseInt(prompt("Introduce el segundo valor:"));

    if (isNaN(num1) || isNaN(num2)) {
      alert("Datos no validos");
    }

    var valormenor = Math.min(num1, num2);
    var valormayor = Math.max(num1, num2);

    var multiplos = '';

    for (var i = valormenor; i <= valormayor; i++) {
        if (i % 8 === 0) {
            if (multiplos !== '') {
              multiplos += ', ';
            }
            multiplos += i;
          }
        }

    if (multiplos !== '') {
      alert("Múltiplos de 8 entre " + valormenor + " y " + valormayor + " : " + multiplos);
    } else {
      alert("No se encontraron múltiplos de 8 entre " + valormenor + " y " + valormayor);
    }
  }
