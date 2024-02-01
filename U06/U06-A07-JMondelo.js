document.addEventListener('DOMContentLoaded', function () {
    var raiz = document.documentElement;

    mostrarDOM(raiz, 0); //el 0 es la profundidad del nodo

    function mostrarDOM(nodo, profundidad) {  // cojo el nodo y la profundidad de él

        var nodosActuales = `<${nodo.nodeName}>`;

        document.getElementById('dom').textContent += nodosActuales;

        for (var i = 0; i < nodo.children.length; i++) {
            mostrarDOM(nodo.children[i], profundidad + 1);
        }
    }
});
