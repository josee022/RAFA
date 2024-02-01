document.addEventListener('mousedown', x  => {
    let accion = "";

    switch(x.button){
        case 0 :
            accion = 'Has pulsado el boton izquierdo';
            break;

        case 1 :
            accion = 'Has pulsado la rueda central';
            break;

        case 2 :
            accion = 'Has pulsado el boton derecho';
            break;
    }
    document.getElementById('div1').innerHTML = accion ;
}) ;
