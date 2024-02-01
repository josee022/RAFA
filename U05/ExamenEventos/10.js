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
        dni.setCustomValidity('Debes introducir un DNI.');
    } else if (dni.validity.patternMismatch) {
        dni.setCustomValidity('DNI no válido.');
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
        nombre.setCustomValidity('Debes introducir un nombre.');
    } else if (nombre.validity.patternMismatch) {
        nombre.setCustomValidity('Nombre no válido.');
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
        apellido.setCustomValidity('Debes introducir un apellido.');
    } else if (apellido.validity.patternMismatch) {
        apellido.setCustomValidity('Apellido no válido.');
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
        edad.setCustomValidity('Debes introducir un edad.');
    } else if (edad.validity.patternMismatch) {
        edad.setCustomValidity('Edad no válida.');
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
        lugarNac.setCustomValidity('Debes introducir un lugar correcto.');
    } else if (lugarNac.validity.patternMismatch) {
        lugarNac.setCustomValidity('Lugar no válido.');
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

formulario.addEventListener('submit', function (e) {
    setCookie('nombre', nombre.value, 1000000);
    setCookie('apellido', apellido.value, 1000000);
    setCookie('dni', dni.value, 1000000);
    setCookie('edad', edad.value, 1000000);
    setCookie('sexo', document.getElementById('sexo').value, 1000000);
    setCookie('lugarNac', lugarNac.value, 1000000);
    alert("Datos almacenados en cookies.");
 });

 function setCookie(cname, cvalue, exdays){
    var d = new Date();
    d.setTime(d.getTime() +  (exdays*24*60*60*1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//esto es lo de mostrar las cookies
let ver = document.getElementById('verCookies');
ver.addEventListener('click', mostrarCookie);
function mostrarCookie() {
    document.getElementById('lasCookies').innerHTML = document.cookie;
}
