let cuadrao = document.getElementById('cuadrao');

document.addEventListener('keydown', (event) => {
    let key = event.key;
    // se utilizan juntas getcomputerstyle y getpropertyvalue para seleccionar el valor de una propiedad en concreto mas facil
    let posicioncuadrao = parseInt(window.getComputedStyle(cuadrao).getPropertyValue('left'), 10);
    let posicioncuadrao2 = parseInt(window.getComputedStyle(cuadrao).getPropertyValue('top'), 10);

    if (key === 'ArrowUp' || key === 'w' || key === '8') {
        cuadrao.style.top = posicioncuadrao2 - 10 + 'px';
    } else if (key === 'ArrowDown' || key === 's' || key === '2') {
        cuadrao.style.top = posicioncuadrao2 + 10 + 'px';
    } else if (key === 'ArrowLeft' || key === 'a' || key === '4') {
        cuadrao.style.left = posicioncuadrao - 10 + 'px';
    } else if (key === 'ArrowRight' || key === 'd' || key === '6') {
        cuadrao.style.left = posicioncuadrao + 10 + 'px';
    }
});
