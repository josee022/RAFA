
function literales() {

    var literal = parseInt(prompt('Introduce el numero :'));

    switch (literal) {
        case 1:
            document.getElementById('div1').innerHTML = 'uno';
            break;
        case 2:
            document.getElementById('div1').innerHTML = 'dos';
            break;
        case 3:
            document.getElementById('div1').innerHTML = 'tres';
            break;
        case 4:
            document.getElementById('div1').innerHTML = 'cuatro';
            break;
        case 5:
            document.getElementById('div1').innerHTML = 'cinco';
            break;
        default:
            document.getElementById('div1').innerHTML = 'No es un numero entre 1-5';
    }
}
literales()
