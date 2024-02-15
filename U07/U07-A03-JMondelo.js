function votar(value) {
    let objeto = new XMLHttpRequest();
    objeto.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('resultado').innerHTML = this.responseText;
        }
    }
    objeto.open("GET", "U07-A03-JMondelo.php?voto=" + value, true);
    objeto.send();
}
