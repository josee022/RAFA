document.addEventListener("input", function () {
    let ciudades = document.getElementById('ciudad').value;
    let objeto = new XMLHttpRequest();
    objeto.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let sugerencias = JSON.parse(this.responseText);
            let mostrar = document.getElementById('sugerencias');
            mostrar.innerHTML = `sugerencias : ${sugerencias.join(
            if (input === "") {
                mostrar.innerHTML = "sugerencias :";
            }
        }
    };
    objeto.open("GET", `U07-A02-JMondelo.php?sugerencia=${input}`, true);
    objeto.send();
});
