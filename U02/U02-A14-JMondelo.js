function traducir_palabra() {

    var palabra = prompt('Introduce una palabra:');

    var traduccion;
    switch (palabra.toLowerCase()) {
        case 'casa':
            traduccion = 'house';
            break;
        case 'mesa':
            traduccion = 'table';
            break;
        case 'perro':
            traduccion = 'dog';
            break;
        case 'gato':
            traduccion = 'cat';
            break;
        default:
            traduccion = 'La palabra es incorrecta.';
            break;
    }

    document.getElementById('div1').innerHTML = traduccion;
}
traducir_palabra();
