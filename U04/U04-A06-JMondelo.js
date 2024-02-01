function obtener() {
    var multi = [];
    for (var x = 0; x < 5; x++) {
        var alumno = prompt('Introduce el nombre del alumno: ');
        var notas = [];
        for (var y = 0; y < 3; y++) {
            var nota = parseFloat(prompt('Introduce la nota del primer modulo: '));
            if (nota >= 0 && nota <= 10) {
                notas.push(nota);
            } else {
                alert("La nota no es válida");
            }
        }
        multi.push({ alumnos: alumno, notas: notas });
    }
    imprimir_tabla(multi);
}
obtener();


function imprimir_tabla(solucion) {
    var tabla = `<table border="5" align="center">
                    <tr>
                        <th>ALUMNO</th>
                        <th>DISEÑO</th>
                        <th>SERVIDOR</th>
                        <th>CLIENTE</th>
                    </tr>`;

    for (var i = 0; i < solucion.length; i++) {
        tabla += `<tr>
                    <td>${solucion[i].alumnos}</td>
                    <td>${solucion[i].notas[0]}</td>
                    <td>${solucion[i].notas[1]}</td>
                    <td>${solucion[i].notas[2]}</td>
                </tr>`;
    }

    tabla += `</table>`;

    document.getElementById('div1').innerHTML = tabla;
}
