function reloj() {

    const actual = new Date();
    let hora = actual.getHours();
    let horas = hora % 12 || 12;
    const minutos = actual.getMinutes();
    const segundos = actual.getSeconds();

    const horas2 = horas < 10 ? '0' + horas : horas;
    const minutos2 = minutos < 10 ? '0' + minutos : minutos;
    const segundos2 = segundos < 10 ? '0' + segundos : segundos;

    const dia_noche = hora >= 12 ? 'PM' : 'AM';

    document.getElementById('div1').innerHTML = horas2 + ':' + minutos2 + ':' + segundos2 + ':' + dia_noche;
}

setInterval(reloj, 1000);
reloj();
