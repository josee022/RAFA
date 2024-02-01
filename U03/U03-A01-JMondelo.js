var dia_actual = new Date();

var dia_fin = new Date(dia_actual.getFullYear(), 11, 31);

function calcula_fechas(dia_actual, dia_fin) {

  var milisegundos = dia_fin - dia_actual;

  var milisegundos_dia = 86400000; // son los milisegundos totales de un dia completo, 24 horas = 86400000 milisegundos.

  var dias = Math.trunc(milisegundos / milisegundos_dia);

  document.getElementById('div1').innerHTML = 'Días : ' + dias + ' días<br><br> Milisegundos : ' + milisegundos + ' milisegundos ';
}
calcula_fechas(dia_actual, dia_fin)
