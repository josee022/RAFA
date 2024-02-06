function cargarJSON() {
    fetch('U07-A01-JMondelo.json')
        .then(response => response.json())
        .then(data => {
            var listaJSON = '';
            for (var i = 0; i < data.Departamento.trabajador.length; i++) {
                var trabajador = data.Departamento.trabajador[i];
                listaJSON += trabajador.nombre + ' ' + trabajador.apellidos + '<br>';
            }

            document.getElementById('json').innerHTML = listaJSON;
        })
}
cargarJSON();
