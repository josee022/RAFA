function semana (){

    let expresionRegular = /^(lunes|martes|miercoles|jueves|viernes|sabado|domingo)\s(0?[1-9]|[12]\d|3[01])$/;

    let solucion = prompt('Introduce un dia de la semana con su respectivo dia : ');

    if (expresionRegular.test(solucion)){
        alert('Expresion valida');
    } else {
        alert('Expresion no valida')
    }

}
semana();
