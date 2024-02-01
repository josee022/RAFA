function matricula() {

    const expresion_regular =  /^\d{4}\s[A-Z]{3}$/;

    const matricula = prompt('Ingrese la matricula (0000 AAA):');

    if (expresion_regular.test(matricula)){
        alert('Formato correcto')
    } else {
        alert('Formato incorrecto')
    }

}
matricula();
