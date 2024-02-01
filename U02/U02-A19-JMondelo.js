var contraseña = 'josee022';

function contraseñaa(contraseña){
    var contraseña_resuelta = prompt('Introduce tu contraseña :');

    if (contraseña == contraseña_resuelta){
        document.getElementById('div1').innerHTML = 'Bienvenido';
    } else {
        location.reload(); /* location.reload() sirve para recargar de nuevo la pagina*/
    }
}
contraseñaa(contraseña)
