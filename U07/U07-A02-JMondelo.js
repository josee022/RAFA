function cargarJSON() {
    fetch('U07-A02-JMondelo.json')
        .then(response => response.json())
        .then(data => {
            var listaJSON = '';
            for (var i = 0; i < data.ciudades.length; i++) {
                var nombre = data.ciudades[i];
                listaJSON += nombre.nombre + '<br>';
            }

            document.getElementById('label').innerHTML = '<strong> Sugerencias :</strong> <br>' + listaJSON ;
        })
}
cargarJSON();
