var datosAlumnos = [];

        for (var i = 0; i < 5; i++) {
            var nombre = prompt("Ingrese el nombre del alumno " + (i + 1) + ":");
            var notas = [];

            for (var j = 0; j < 3; j++) {
                var nota = parseFloat(prompt("Ingrese la nota del módulo " + (j + 1) + " para " + nombre + ":"));
                notas.push(nota);
            }

            datosAlumnos.push({ nombre: nombre, notas: notas });
        }

        function mostrarTabla() {
            var tabla = document.createElement("table");
            var datos = ["Nombre", "Módulo 1", "Módulo 2", "Módulo 3"];
            var datos2 = tabla.insertRow();

            for (var i = 0; i < datos.length; i++) {
                var celda = datos2.insertCell(i);
                celda.textContent = datos[i];
            }

            for (var i = 0; i < datosAlumnos.length; i++) {
                var alumno = datosAlumnos[i];
                var fila = tabla.insertRow();

                var celdas = [alumno.nombre].concat(alumno.notas);

                for (var j = 0; j < celdas.length; j++) {
                    var celda = fila.insertCell(j);
                    celda.textContent = celdas[j];
                }
            }

            document.body.appendChild(tabla);
        }
