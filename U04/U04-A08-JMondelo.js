function metodos() {

    var vector = [];
    for (i = 0; i < 5; i++){
        vector.push(Math.floor(Math.random() * 11));

    }
    document.getElementById('div1').innerHTML = "El vector de 5 numeros es: " + vector;

    var positivos = vector.every(valor => Number.isInteger(valor) && valor > 0);
    document.getElementById('div2').innerHTML = "¿Son enteros positivos?: " + positivos;

    if (positivos) {
        var por_tres = vector.map(valor => valor * 3);

        var multiplicacion_total = por_tres.reduce((acumulador, valor) => acumulador * valor, 1);

        document.getElementById('div3').innerHTML = "Los valores multiplicados por 3 son: " + por_tres;
        document.getElementById('div4').innerHTML = "Todos los valores multiplicados es: " + multiplicacion_total;
    }
}
metodos();
