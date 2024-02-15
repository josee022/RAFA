<<<<<<< HEAD
function votar(value) {
    let objeto = new XMLHttpRequest();
    objeto.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('resultado').innerHTML = this.responseText;
        }
    }
    objeto.open("GET", "U07-A03-JMondelo.php?voto=" + value, true);
    objeto.send();
=======
var votos = document.getElementById("votar");
var radio = document.getElementsByName("equipo");
votos.onclick = ()=>{
    radio.forEach((bucle, i) => {
      if (radio[i].checked){
        fetch('U07-A03-JMondelo.php?input=' + radio[i].value)
                .then(function(response) {
                    return response.text();
                })
        }
    })
>>>>>>> a337195a2886dba1b4da1168075571d33fc9c13d
}
