function Vehiculo(marca, modelo, color, añoFabricacion) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.añoFabricacion = añoFabricacion;
}

var vehiculos = [
    new Vehiculo("Audi", "A3", "Azul", 2022),
    new Vehiculo("Mercedes", "AMG", "Rojo", 2021),
    new Vehiculo("Golf", "Gti", "Negro", 2023),
    new Vehiculo("Nissan", "Ateca", "Blanco", 2020),
    new Vehiculo("Bmw", "Q3", "Gris", 2019)
];

function crearTabla() {

    var tabla = document.createElement("table");
    var datos = ["Marca", "Modelo", "Color", "Año de Fabricación"];
    var datos2 = tabla.insertRow();

    for (var i = 0; i < datos.length; i++) {
        var celda = datos2.insertCell(i);
        celda.textContent = datos[i];
    }

    for (var i = 0; i < vehiculos.length; i++) {
        var vehiculo = vehiculos[i];
        var fila = tabla.insertRow();

        var celdas = [vehiculo.marca, vehiculo.modelo, vehiculo.color, vehiculo.añoFabricacion];

        for (var j = 0; j < celdas.length; j++) {
            var celda = fila.insertCell(j);
            celda.textContent = celdas[j];
        }
    }

    document.body.appendChild(tabla);
}
