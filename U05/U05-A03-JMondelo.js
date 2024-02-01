document.addEventListener('contextmenu', function (evento) {
    //evento.stopPropagation();
    evento.preventDefault();
    //alert('El boton derecho del raton se a deshabilitado');
    document.getElementById('div1').innerHTML = 'El boton derecho se a deshabilitado';
});
