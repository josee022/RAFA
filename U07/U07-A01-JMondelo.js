function cargarJSON() {
    fetch('U07-A01-JMondelo.json')
        .then(response => response.json())
        .then(jsonData => {
            var listaJSON = '<ul>';

            for (var i = 0; i < jsonData.Departamento.trabajador.length; i++) {
                var trabajador = jsonData.Departamento.trabajador[i];
                listaJSON += '<li>' + trabajador.nombre + ' ' + trabajador.apellidos ;
            }

            document.getElementById('json').innerHTML = listaJSON;
        })
}
cargarJSON();
