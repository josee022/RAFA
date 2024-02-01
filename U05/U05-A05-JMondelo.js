var imagen = document.getElementById('imagen');

imagen.addEventListener('mousedown', () => {
    imagen.setAttribute('src', 'imagen2.jpg');
});

imagen.addEventListener('mouseup', () => {
    imagen.setAttribute('src', 'imagen.jpg');
});
