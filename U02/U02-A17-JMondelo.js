function suma(){

    var primero = parseInt(document.getElementById('op1').value);
    var segundo = parseInt(document.getElementById('op2').value);
    var sumar = primero + segundo;

    if (!isNaN(primero) && !isNaN(segundo)){
        document.getElementById('div1').innerHTML = sumar ;
    }
}

function resta(){

    var primero = parseInt(document.getElementById('op1').value);
    var segundo = parseInt(document.getElementById('op2').value);
    var restar = primero - segundo;

    if (!isNaN(primero) && !isNaN(segundo)){
        document.getElementById('div1').innerHTML = restar ;
    }
}

function multiplicacion(){

    var primero = parseInt(document.getElementById('op1').value);
    var segundo = parseInt(document.getElementById('op2').value);
    var multiplicar = primero * segundo;

    if (!isNaN(primero) && !isNaN(segundo)){
        document.getElementById('div1').innerHTML = multiplicar ;
    }
}

function division(){

    var primero = parseInt(document.getElementById('op1').value);
    var segundo = parseInt(document.getElementById('op2').value);
    var dividir = primero / segundo;

    if (!isNaN(primero) && !isNaN(segundo)){
        document.getElementById('div1').innerHTML = dividir ;
    }
}

function modulo(){

    var primero = parseInt(document.getElementById('op1').value);
    var segundo = parseInt(document.getElementById('op2').value);
    var modular = primero % segundo;

    if (!isNaN(primero) && !isNaN(segundo)){
        document.getElementById('div1').innerHTML = modular ;
    }
}

function salir(){

    var confirmar = confirm('¿Estas seguro de salir?');

    if (confirmar) {
        window.close();
    } else {
        location.reload();
    }
}
