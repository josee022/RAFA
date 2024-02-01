var resultado = "";

function resultados() {
    document.getElementById("numero").value = resultado;
}

function añadir(valor) {
    resultado += valor;
    resultados();
}

function operador(op) {
    resultado += op;
    resultados();
}

function solucion() {
    try {
        resultado = eval(resultado);
        resultados();
    } catch (error) {
        resultado = "Error";
        resultados();
    }
}

function operadores_trigonometricos(op) {
    if (resultado !== "") {
        if (op === "log") {
            resultado = Math.log10(parseFloat(resultado));
        } else if (op === "pi") {
            resultado = Math.PI;
        } else if (op === "tan") {
            resultado = Math.tan(parseFloat(resultado));
        } else if (op === "sin") {
            resultado = Math.sin(parseFloat(resultado));
        } else if (op === "cos") {
            resultado = Math.cos(parseFloat(resultado));
        }
        resultados();
    }
}

function cuadrado() {
    if (resultado !== "") {
        resultado = Math.sqrt(parseFloat(resultado));
        resultados();
    }
}

function potencia(exponente) {
    if (resultado !== "") {
        resultado = Math.pow(parseFloat(resultado), exponente);
        resultados();
    }
}

function borrar() {
    resultado = "";
    resultados();
}

function punto(caracter) {
    resultado += caracter;
    resultados();
}
