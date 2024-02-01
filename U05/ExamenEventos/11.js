
function getCookie(nombreCookie) {
    var cname = nombreCookie + "=";
    var dc = document.cookie;
    if (dc.length > 0) {
        begin = dc.indexOf(cname);
        if (begin != -1) {
            begin += cname.length;
            end = dc.indexOf(";", begin);
            if (end == -1) end = dc.length;
            return decodeURIComponent(dc.substring(begin, end));
        }
    }
    return null;
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var votar = document.getElementById("votar");
var opciones = document.getElementsByName("cafes");
if (setCookie == "") {
    setCookie("CafeSolo", "0", 1000000);
    setCookie("CafeConLeche", "0", 1000000);
    setCookie("CafeDescafeinado", "0", 1000000)
    setCookie("CafeConHielo", "0", 1000000)
} else if (document.cookie != "CafeSolo=0; CafeConLeche=0; CafeDescafeinado=0; CafeConHielo=0") {
    hacerPorcentaje();
}

function porcentajes(id, valor) {
    let porcentaje = document.getElementById("porcentaje" + id);
    porcentaje.textContent = valor.toFixed(2) + "%";
}


function hacerPorcentaje() {
    let cafeSolo = parseInt(getCookie("CafeSolo"));
    let cafeConLeche = parseInt(getCookie("CafeConLeche"));
    let CafeDescafeinado = parseInt(getCookie("CafeDescafeinado"));
    let cafeConHielo = parseInt(getCookie("CafeConHielo"));
    let total = cafeSolo + cafeConLeche + CafeDescafeinado + cafeConHielo;

    document.getElementById("CafeSolo").value = (cafeSolo / total * 100);
    porcentajes("CafeSolo", (cafeSolo / total * 100));

    document.getElementById("CafeConLeche").value = (cafeConLeche / total * 100);
    porcentajes("CafeConLeche", (cafeConLeche / total * 100));

    document.getElementById("CafeDescafeinado").value = (CafeDescafeinado / total * 100);
    porcentajes("CafeDescafeinado", (CafeDescafeinado / total * 100));

    document.getElementById("CafeConHielo").value = (cafeConHielo / total * 100);
    porcentajes("CafeConHielo", (cafeConHielo / total * 100));

    opciones.forEach(x => {
        x.checked = false;
    });
}
votar.onclick = () => {
    let voto = false;

    opciones.forEach((x, i) => {
        if (opciones[i].checked) {
            voto = true;
            document.cookie = `${opciones[i].value}=${parseInt(getCookie(opciones[i].value)) + 1}`;
            hacerPorcentaje();
        }
    });

    if (!voto) {
        alert("Selecciona un tipo de café antes de votar.");
    }
};

//no ma dao tiempo termina
