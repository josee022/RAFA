document.addEventListener('DOMContentLoaded', function () {

    let contador = localStorage.getItem('contador');

    contador++;
    document.getElementById('contador').innerText = contador;

    localStorage.setItem('contador', contador.toString());
});
