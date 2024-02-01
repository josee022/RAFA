document.addEventListener('DOMContentLoaded', function () {
    var raiz = document.documentElement;

    mostrarDOM(raiz, 0);

    function mostrarDOM(nodo, profundidad) {
        var nodosActuales = `<${nodo.nodeName}>`;

        document.getElementById('dom').textContent += nodosActuales;

        for (var i = 0; i < nodo.children.length; i++) {
            mostrarDOM(nodo.children[i], profundidad + 1);
        }
    }

    function elementosDom(){
        
    }
});
