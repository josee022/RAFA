function hora() {

    const expresion_regular = /^(\d{2}:\d{2}:\d{2}|\d{2}:\d{2})$/;

    const hora = prompt('Ingrese una hora (hh:mm:ss o hh:mm):');

    if (expresion_regular.test(hora)) {
        const [horas, minutos, segundos] = hora.split(':');
        if (
            horas > 23 || minutos > 59 || segundos > 59
        ) {
            alert('Formato correcto, aunque algun valor está fuera de su rango');
        } else {
            alert('Formato correcto');
        }
    } else {
        alert('Formato incorrecto');
    }
}
hora();
