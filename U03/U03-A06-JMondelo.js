function horario() {
    var zona = parseInt(prompt('Indica la zona horaria mediante su numero :'));

    var zonas_horarias = {
        '-12': 'Línea internacional de fecha del oeste',
        '-11': 'Isla Midway, Samoa',
        '-10': 'Hawai',
        '-9': 'Alaska',
        '-8': 'Hora del pacífico (USA y Canadá)',
        '-7': 'Hora de las montañas rocosas (USA y Canadá)',
        '-6': 'América central',
        '-5': 'Hora central (USA y Canadá)',
        '-4': 'Hora del Atlántico (Canadá)',
        '-3': 'Buenos Aires, Asunción, Brasilia, Montevideo',
        '-2': 'Atlántico central',
        '-1': 'Azores',
        '0': 'Hora del meridiano de Greenwich, Londres, Dublín',
        '1': 'París, Madrid, Barcelona, Roma',
        '2': 'El Cairo',
        '3': 'Nairobi',
        '4': 'Bakú',
        '5': 'Ekaterimburgo',
        '6': 'Astana',
        '7': 'Bangkok',
        '8': 'Ulán Bator',
        '9': 'Tokio',
        '10': 'Sidney',
        '11': 'Islas Salomón',
        '12': 'Wellington'
    };

    if (zona.toString() in zonas_horarias) {
        var hora_actual_zona = new Date();
        hora_actual_zona.setHours(hora_actual_zona.getHours() + zona);
        document.getElementById('div1').innerHTML = 'La hora actual en la zona ' + zonas_horarias[zona.toString()] + ' es: ' + hora_actual_zona.toLocaleTimeString();
    } else {
        document.getElementById('div1').innerHTML = 'Zona horaria no válida o no implementada.';
    }
}
horario();
