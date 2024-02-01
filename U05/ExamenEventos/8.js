let formulario = document.getElementById('formulario');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let dni = document.getElementById('dni');
let edad = document.getElementById('edad');
let lugarNac = document.getElementById('lugarNac');
let guardar = document.getElementById('guardar');
const letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K'];

formulario.addEventListener('change', validarDatos);
dni.addEventListener('input', validarDni);
nombre.addEventListener('input', validarNombre);
apellido.addEventListener('input', validarApellido);
edad.addEventListener('input', validarEdad);
lugarNac.addEventListener('input', validarlugarNac);

function validarDni() {
    if (dni.validity.valueMissing) {
        dni.setCustomValidity('El campo DNI no puede estar vacio.');
    } else if (dni.validity.patternMismatch) {
        dni.setCustomValidity('El patron del DNI no es el correcto.');
    } else if (!letraDni(dni.value)) {
        dni.setCustomValidity('Esa no es la letra de tu DNI.');
    } else {
        dni.setCustomValidity('');
    }

    if (dni.checkValidity()) {
        return true;
    } else {
        return false;
    }
}
function letraDni(dni) {
    let letrita = dni.split('-');
    if (letrita.length >= 2) {
        let numeroDni = letrita[0].replaceAll('.', '');
        let resto = numeroDni % 23;
        return letrita[1].toUpperCase() == letra[resto];
    } else {
        return false;
    }
}

function validarNombre() {
    if (nombre.validity.valueMissing) {
        nombre.setCustomValidity('El campo Nombre no puede estar vacio.');
    } else if (nombre.validity.patternMismatch) {
        nombre.setCustomValidity('El patron del Nombre no es el correcto.');
    } else {
        nombre.setCustomValidity('');
    }

    if (nombre.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

function validarApellido() {
    if (apellido.validity.valueMissing) {
        apellido.setCustomValidity('El campo Apellido no puede estar vacio.');
    } else if (apellido.validity.patternMismatch) {
        apellido.setCustomValidity('El patron del Apellido no es el correcto.');
    } else {
        apellido.setCustomValidity('');
    }

    if (apellido.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

function validarEdad() {
    if (edad.validity.valueMissing) {
        edad.setCustomValidity('El campo Edad no puede estar vacio.');
    } else if (edad.validity.patternMismatch) {
        edad.setCustomValidity('El patron del Edad no es el correcto.');
    } else {
        edad.setCustomValidity('');
    }

    if (edad.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

function validarlugarNac() {
    if (lugarNac.validity.valueMissing) {
        lugarNac.setCustomValidity('El campo Lugar de Nacimiento no puede estar vacio.');
    } else if (lugarNac.validity.patternMismatch) {
        lugarNac.setCustomValidity('El patron del Lugar de Nacimiento no es el correcto.');
    } else {
        lugarNac.setCustomValidity('');
    }

    if (lugarNac.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

function validarDatos(e) {

    if (!validarDni(dni) &&
    !validarNombre(nombre) &&
    !validarApellido(apellido) &&
    !validarEdad(edad) &&
    !validarlugarNac(lugarNac)) {
        e.preventDefault();
    }
}

function mostrarDni() {
    var dniInput = document.getElementById('dni');
    dniInput.type = 'text';
}

function ocultarDni() {
    var dniInput = document.getElementById('dni');
    dniInput.type = 'password';
}
