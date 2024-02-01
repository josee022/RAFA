
function digitos() {

    var numero = parseInt(document.getElementById('numero').value); /*value para obtener el valor que el usuario ingresa*/

    if (isNaN(numero) || numero < 0 || numero >= 1000) {
      alert("Debe ingresar un número válido (0 a 999).");
    }

    var digitos = numero.toString().split('');

    document.getElementById('div1').innerHTML = 'Dígitos: ' + digitos.join(', ');
  }
