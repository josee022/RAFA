function emails (){

    var profesores = document.getElementById('asignatura');
    var correos = '';

    switch(profesores.value){

        case 'matematicas':
            correos = 'matematicas@matematicas.com';
            break;

        case 'lengua':
            correos = 'lengua@lengua.com';
            break;

        case 'ingles':
            correos = 'ingles@ingles.com';
            break;
    }
    document.getElementById('formulario').action = 'mailto:' + correos;
};
