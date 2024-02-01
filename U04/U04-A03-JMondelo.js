Array.prototype.vector_metodo = function () {
    this.sort(function(a, b){
        return a - b;
    });
    var copia_aleatorios = this.slice(1, -1);
    return copia_aleatorios
}

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
    var copia_aleatorios2 = aleatorios.vector_metodo();

    alert('El vector es : ' + aleatorios);
    alert('El numero menor es : ' + menor);
    alert('El numero mayor es : ' + mayor);
    alert('El vector sin el menor y el mayor es : ' + copia_aleatorios2);

}
vector();
