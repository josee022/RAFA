document.onmousemove = (e) => {
    mover(e);
};
document.onmouseup = (e) => {
    e.preventDefault();
};

function mover(e) {
    var textito = document.getElementById('texto');

    if (e.buttons) {
        textito.style.setProperty('TEXTO ORIGINAL');
        textito.style.setProperty('top', e.clientY + 'px');
        textito.style.setProperty('left', e.clientX + 'px');
    } else {
        textito.style.setProperty('TEXTO NUEVO');
    }
}
