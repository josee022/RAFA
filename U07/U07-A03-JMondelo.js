function enviarVoto(voto) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Actualizar la página con los resultados
            document.getElementById("resultados").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "U07-A03-JMondelo.php?voto=" + voto, true);
    xhr.send();
}
