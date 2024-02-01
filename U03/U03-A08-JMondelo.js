var radio = parseFloat(prompt("Ingresa el valor del radio del círculo en cm:"));
var base = parseFloat(prompt("Ingresa el valor de la base del triángulo en cm:"));
var altura = parseFloat(prompt("Ingresa el valor de la altura del triángulo en cm:"));


function area_circulo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

function area_triangulo(base, altura) {
    return (base * altura) / 2;
}

function calcular_areas() {

    if (isNaN(radio) || isNaN(base) || isNaN(altura) || radio <= 0 || base <= 0 || altura <= 0) {
        alert("Ingresa valores válidos para radio, base y altura.");
    }

    var circulo = area_circulo(radio).toFixed(2);
    var triangulo = area_triangulo(base, altura).toFixed(2);

    document.getElementById('div1').innerHTML = 'El área del circulo sería : ' + circulo + ', mientras que el área del triangulo sería : ' + triangulo;
}
area_circulo(radio);
area_triangulo(base, altura);
calcular_areas(radio, base, altura);
