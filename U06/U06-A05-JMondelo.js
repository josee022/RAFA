function parrafos(parrafoId) {
    var parrafo = document.getElementById(parrafoId);

    if (parrafo.classList.contains('visible')) {
        parrafo.classList.remove('visible');
        parrafo.classList.add('oculto');
    } else {
        parrafo.classList.remove('oculto');
        parrafo.classList.add('visible');
    }
}
