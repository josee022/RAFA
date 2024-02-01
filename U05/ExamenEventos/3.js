function mover(e) {
    var anuel = document.getElementById('anuel');

    if (e.buttons) {
        anuel.style.setProperty('background-image', 'url(anuel1.jpg)');
        anuel.style.setProperty('top', e.clientY + 'px');
        anuel.style.setProperty('left', e.clientX + 'px');
    }
}

document.onmousemove = (e) => {
    mover(e);
};
document.onmouseup = (e) => {
    e.preventDefault();
};
