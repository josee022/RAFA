function vector(){
    var aleatorios = [];

    for (i = 0; i < 10; i++){
        aleatorios.push(Math.floor(Math.random() * 1001));
    }

    aleatorios.sort(function (a,b) {
        return a - b;
    });

    var menor = aleatorios[0];
    var mayor = aleatorios[aleatorios.length - 1];
    var copia_aleatorios = aleatorios.slice(1, -1);

    alert('El vector es : ' + aleatorios);
    alert('El numero menor es : ' + menor);
    alert('El numero mayor es : ' + mayor);
    alert('El vector sin el menor y el mayor es : ' + copia_aleatorios);

}
vector();
