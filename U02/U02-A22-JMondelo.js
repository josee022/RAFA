function solucion_asesino() {

    var hab_asesino = document.getElementById("habitacion").value;
    var sosp_asesino = document.getElementById("sospechoso").value;

    var arma = "";

    if (sosp_asesino === "Sr Parker" && hab_asesino === "comedor") {
        arma = "cuchillo";
    } else if (sosp_asesino === "Sra Van Cleve" && hab_asesino === "galeria") {
        arma = "trofeo";
    } else if (sosp_asesino === "Sra Sparr" && hab_asesino === "sala de billar") {
        arma = "palo de billar";
    } else if (sosp_asesino === "Sr Kalehoff" && hab_asesino === "salón de baile") {
        arma = "veneno";
    }

    document.getElementById('div1').innerHTML = sosp_asesino + ' lo hizo en el ' + hab_asesino + ' con el ' + arma ;

    var resuelto = (arma !== "");

    if (resuelto) {
        document.getElementById('div1').innerHTML += ' <br> El misterio está resuelto';
    } else {
        document.getElementById('div1').innerHTML += '<br> El misterio no está resuelto';
    }
}
