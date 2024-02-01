function buenas() {

    const hora = new Date().getHours();

    if (hora >= 5 && hora < 12) {
        saludo = "Buenos días";
    } else if (hora >= 12 && hora < 20) {
        saludo = "Buenas tardes";
    } else {
        saludo = "Buenas noches";
    }

    document.getElementById('div1').innerHTML = saludo;
}
buenas();
