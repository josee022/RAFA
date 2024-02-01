


function nota() {

    var nota = parseInt(prompt('Introduce su nota:'));
    var texto = (nota < 5 && nota >= 0) ? "suspenso":
                (nota >= 5 && nota < 7) ? "aprobado":
                (nota >= 7 && nota < 9) ? "notable":
                (nota >= 9 && nota <= 10) ? "sobresaliente":
                "dato incorrecto"


    document.getElementById('div1').innerHTML = ("<p> Nota :" + texto + "</p>")

}
