function metodos() {

    var aleatorios = [];
    for (i = 0; i < 10; i++){
        aleatorios.push(Math.floor(Math.random() * 11));

    }
    document.getElementById('div1').innerHTML = "Numeros aleatorios: " + aleatorios;


    var menos8 = aleatorios.filter(numero => numero < 8);
    document.getElementById('div2').innerHTML = "Valores menores a 8: " + menos8;


    var impar = aleatorios.map(numero => (numero % 2 !== 0) ? "impar" : numero);
    document.getElementById('div3').innerHTML = "Numeros impares: " + impar;
}

metodos();
