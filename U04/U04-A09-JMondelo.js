function vehiculo(marca, modelo, color, año) {
    this.marca_ = marca;
    this.modelo_ = modelo;
    this.color_ = color;
    this.año_ = año;
}


var vehiculo1 = new vehiculo('audi', 'a3', 'negro', '2020');
var vehiculo2 = new vehiculo('golft', 'gti', 'blanco', '2021');


vehiculo1.cilindrada = '2000cc';
vehiculo2.cilindrada = '1800cc';


document.getElementById('div1').innerHTML = 'La marca del primer vehículo es: ' + vehiculo1.marca_;
document.getElementById('div2').innerHTML = 'El color del segundo vehículo es: ' + vehiculo2['color_'];


vehiculo.prototype.mostrarDatos = function () {
    return '<br>La marca del vehiculo es: ' + this.marca_ +
        '<br> El modelo es: ' + this.modelo_ +
        '<br> El color es: ' + this.color_ +
        '<br> El año de fabricacion es: ' + this.año_ +
        '<br> La cilindrada es: ' + this.cilindrada;
};


document.getElementById('div3').innerHTML = '<br><b>Este es el vehiculo 1</b>' + vehiculo1.mostrarDatos();
document.getElementById('div4').innerHTML = '<br><b>Este es el vehiculo 2</b>' + vehiculo2.mostrarDatos();


vehiculo.prototype.acelerar = function (velocidad) {
    var solucion = 'El coche ha acelerado a ' + velocidad + ' km/h';
    document.getElementById('div5').innerHTML = '<br>'+solucion;
};


vehiculo.prototype.arrancar = function () {
    var marcador = this;
    function arrancarInterno() {
        var solucion = 'El coche de marca ' + marcador.marca_ + ', modelo ' + marcador.modelo_ + ', color ' + marcador.color_ + ' ha arrancado.';
        document.getElementById('div6').innerHTML = '<br>'+solucion;
    }
    arrancarInterno();
};


vehiculo.prototype.frenar = function () {
    var solucion = 'El coche de marca ' + this.marca_ + ', modelo ' + this.modelo_ + ', color ' + this.color_ + ' ha parado.';
    document.getElementById('div7').innerHTML = '<br>'+solucion;
};


vehiculo1.acelerar(120);
vehiculo1.arrancar();
vehiculo1.frenar();


vehiculo2.acelerar(120);
vehiculo2.arrancar();
vehiculo2.frenar();
