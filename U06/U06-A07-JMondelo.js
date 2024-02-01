function DOM() {
    let dom = document.getElementById('dom');
    dom.textContent = valorDOM(document.documentElement);
}

function valorDOM(elemento) {
    let imprime = `${etiquetasDOM(elemento)}\n${Array.from(elemento.children).map(valorDOM).join('')}`;
    return imprime;
}

function etiquetasDOM(elemento) {
    let valor = elemento.nodeName.toLowerCase();
    let etiqueta = atributoDOM(elemento);
    return `<${valor}${etiqueta}>`;
}

function atributoDOM(elemento) {
    let atributo = elemento.attributes;
    return Array.from(atributo).map(attr => ` ${attr.name}="${attr.value}"`).join('');
}

window.onload = DOM;
