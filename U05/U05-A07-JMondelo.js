document.addEventListener('DOMContentLoaded', function(){

    var imagen = document.getElementById('imagen');
    var mensaje = document.getElementById('div1');

    imagen.addEventListener('load', function (){
        mensaje.innerHTML = 'La imagen se carga correctamente';
    });

    imagen.addEventListener('error', function (){
        mensaje.innerHTML = 'La imagen no se carga correctamente';
    });

});
