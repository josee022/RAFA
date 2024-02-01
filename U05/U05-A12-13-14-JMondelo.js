let cukis = decodeURIComponent(document.cookie);
let elFormulario = document.forms[0];
let guardoDatos = document.getElementById("datosGuardados");
let labels = ["DNI: ", "Nombre: ", "Nacimiento: ", "Email: ", "Página web: "];
let ids = ["dni", "nombre", "nacimiento", "email", "web"];
let inputs = [dni, nombre, nacimiento, email, web];
let letrasDNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

elFormulario.addEventListener("change", function () {
    if (dni.value !== '' && !elFormulario.elements["dni"].checkValidity()) {
        dni.value = '';
        dni.setCustomValidity("Dni no válido.");
    } else if (!validarLetraDni(dni.value)) {
        dni.value = '';
        alert("Letra no válida.");
    } else if (nombre.value !== '' && !elFormulario.elements["nombre"].checkValidity()) {
        nombre.value = '';
        alert("Nombre no válido.");
    } else if (nacimiento.value !== '' && !elFormulario.elements["nacimiento"].checkValidity()) {
        nacimiento.value = '';
        alert("Fecha no válida.");
    } else if (email.value !== '' && !elFormulario.elements["email"].checkValidity()) {
        email.value = '';
        alert("Email no válido.");
    } else if (web.value !== '' && !elFormulario.elements["web"].checkValidity()) {
        web.value = '';
        alert("Página web no válida.");
    } else if (contraseña.value !== '' && !elFormulario.elements["contraseña"].checkValidity()) {
        contraseña.value = '';
        alert("Formato de la contraseña no válido.");
    } else if (contraseña2.value !== '' && contraseña.value !== contraseña2.value) {
        contraseña2.value = '';
        alert("Las contraseñas no coinciden, prueba de nuevo.");
    }
});

document.getElementById("guardar").addEventListener("click", function () {
    if (dni.value !== '' && nombre.value !== '' && nacimiento.value !== '' && email.value !== '' && web.value !== '' && contraseña.value !== '' && contraseña2.value !== '') {
        document.cookie = `dni=${dni.value}`;
        document.cookie = `nombre=${nombre.value}`;
        document.cookie = `nacimiento=${nacimiento.value}`;
        document.cookie = `email=${email.value}`;
        document.cookie = `web=${web.value}`;
        cukis = decodeURIComponent(document.cookie);
    } else {
        alert("Formulario incompleto, rellena todos sus datos.");
    }
});

document.getElementById("ver").addEventListener("click", function () {
    if (revisoCukis()) {
        for (let i = 0; i < 5; i++) {
            if (i == 0) {
                guardoDatos.innerHTML = `${labels[i]}${getCookie(ids[i])}<br>`;
            } else {
                guardoDatos.innerHTML += `${labels[i]}${getCookie(ids[i])}<br>`;
            }
        }
    }
});

function getCookie(name) {
    let cname = name + "=";
    let dc = document.cookie;
    if (dc.length > 0) {
        let begin = dc.indexOf(cname);
        if (begin != -1) {
            begin += cname.length;
            let end = dc.indexOf(";", begin);
            if (end == -1) end = dc.length;
            return decodeURIComponent(dc.substring(begin, end));
        }
    }
    return null;
}

function revisoCukis() {
    if (document.cookie.length > 0) {
        return true;
    }
    alert("Lo siento, no tenemos cookies almacenadas.");
    return false;
}

function validarLetraDni(dni) {
    let dniCompleto = '';

    for (let i = 0; i < dni.length; i++) {
        if (!isNaN(parseInt(dni[i]))) {
            dniCompleto += dni[i];
        }
    }

    let letraCorrecta = letrasDNI[parseInt(dniCompleto) % 23];
    return letraCorrecta === dni[dni.length - 1];
}
