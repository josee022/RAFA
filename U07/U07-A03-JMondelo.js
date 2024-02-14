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
}
