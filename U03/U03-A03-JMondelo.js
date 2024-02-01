
function mifecha() {
    var año = parseInt(prompt('Introduce tu año de nacimiento : '));
    var mes = parseInt(prompt('Introduce tu mes de nacimiento : '));
    var dia = parseInt(prompt('Introduce tu día de nacimiento : '));
    var fecha_nac = new Date(año, mes - 1, dia);
    var actual = new Date();

    var diferencia = actual - fecha_nac;

    var milisegundos_año = 1000 * 60 * 60 * 24 * 365; // Corregido el cálculo de milisegundos en un año
    var meses_año = 1000 * 60 * 60 * 24 * 30.41; // Corregido el cálculo de milisegundos en un mes
    var dias_año = 1000 * 60 * 60 * 24;

    var mis_años = Math.floor(diferencia / milisegundos_año);
    var mis_meses = Math.floor((diferencia % milisegundos_año) / meses_año);
    var mis_dias = Math.floor((diferencia % meses_año) / dias_año);

    document.getElementById('div1').innerHTML = 'A día de hoy tengo: ' + mis_años + ' años, ' + mis_meses + ' meses y ' + mis_dias + ' días.';
}

