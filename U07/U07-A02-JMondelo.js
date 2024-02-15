document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ciudad').addEventListener('input', function() {
        var ciudad = this.value;
        if (ciudad.length > 0) {
            fetch('U07-A02-JMondelo.php?input=' + ciudad)
                .then(function(response) {
                    if (!response.ok) {
                        throw new Error('Error en la respuesta de la solicitud.');
                    }
                    return response.json();
                })
                .then(function(data) {
                    mostrarSugerencias(data);
                })
                .catch(function(error) {
                    console.error('Error en la solicitud:', error);
                });
        } else {
            document.getElementById('sugerencias').innerHTML = '';
        }
    });

    function mostrarSugerencias(sugerencias) {
        var sugerenciasList = document.getElementById('sugerencias');
        sugerenciasList.innerHTML = '';
        sugerencias.forEach(function(ciudad) {
            var li = document.createElement('li');
            li.textContent = ciudad;
            sugerenciasList.appendChild(li);
        });
    }
});
