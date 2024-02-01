function booleanos() {

    const ejemplos = [
        { nombre: "booleano", valor: false },
        { nombre: "numero", valor: 0 },
        { nombre: "string", valor: "" },
        { nombre: "null", valor: null },
        { nombre: "indefinido", valor: undefined },
        { nombre: "booleano", valor: true },
        { nombre: "numero", valor: 1 },
        { nombre: "string", valor: "jose" },
        { nombre: "objeto", valor: { objeto: "mondelo" } },
        { nombre: "array", valor: [1, 2, 3] },
    ];

    let resultados = "";

    for (let x = 0; x < ejemplos.length; x++) {
        const ejemplo = ejemplos[x];
        const resultado = ejemplo.valor ? "true" : "false";
        const salto = '<br>'
        resultados += ejemplo.nombre+' : '+ejemplo.valor+' = '+resultado+salto;
    }

    document.getElementById("div1").innerHTML = resultados;
}

booleanos();
