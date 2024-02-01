function string(){

    var usuario = prompt('Introduce una cadena : ');

    var mayuscula = usuario.toUpperCase();
    var minuscula = usuario.toLowerCase();

    if (mayuscula == usuario){
        alert('Esta en mayusculas')
    } else if (minuscula == usuario){
        alert('Esta en minuscula')
    } else {
        alert('Es una mezcla')
    }
}
string();
