function indices(indice) {
    var array = [
        [1, 'manzana'],
        [3, 'platano'],
        [2, 'pera'],
        [4, 'uva']
    ];

    var copia_array = array.slice();

    copia_array.sort(function (a, b) {
        return a[indice] - b[indice];
    });

    console.log('El array es:');
    console.table(array);

    console.log('El array con indice ' + indice + ' es: ');
    console.table(copia_array);
}

indices(0);
