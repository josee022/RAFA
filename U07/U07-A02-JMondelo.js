document.addEventListener("DOMContentLoaded", function () {
    var ciudadInput = document.getElementById("ciudadInput");

    ciudadInput.addEventListener("input", function () {
        var ciudad = ciudadInput.value;
        muestraSugerencia(ciudad);
    });
});

function muestraSugerencia(ciudad) {
    var llamada = new XMLHttpRequest();

    llamada.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("ciudades").innerHTML = this.responseText;
        }
    };

    llamada.open("GET", "U07-A02-JMondelo.php?ciudad=" + ciudad, true);
    llamada.send();
}
