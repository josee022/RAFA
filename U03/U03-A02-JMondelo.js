var año = parseInt(prompt('Introduce tu año de nacimiento : '));
var mes = parseInt(prompt('Introduce tu mes de nacimiento : '));
var dia = parseInt(prompt('Introduce tu dia de nacimiento : '));
var actual = new Date();

function edad (año, mes, dia, actual){

    var fecha_nac = new Date(año, mes - 1, dia);

    var diferencia = actual - fecha_nac;

    document.getElementById('div1').innerHTML = 'Tu edad es : ' +Math.trunc(diferencia/31557600000) ; //milisegundos que tiene un año '31557600000'
}
edad(año, mes, dia, actual)
