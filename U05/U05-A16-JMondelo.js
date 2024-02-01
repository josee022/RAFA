function iniciar(){

    document.getElementById("votar").addEventListener('click', votar);

    mostrarResultados();

  }

  window.onload = iniciar; //cargo la pagina


  function getCookie(cname) { //funcion de los apuntes
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


  function mostrarResultados() { // basicamente le doi valor a los datos y hago el porcentaje
      let total = getCookie("total") ? parseInt(getCookie("total")): 0;
      let ios = getCookie("ios") ? parseInt(getCookie("ios")): 0;
      let android = getCookie("android") ? parseInt(getCookie("android")): 0;
      let windows = getCookie("windows") ? parseInt(getCookie("windows")): 0;
      let otro = getCookie("otro") ? parseInt(getCookie("otro")): 0;
      let resultado = "";

      resultado = ((ios*100)/total).toFixed(2);
      document.getElementById("ios2").value = resultado;


      resultado = ((android*100)/total).toFixed(2);
      document.getElementById("android2").value = resultado;


      resultado = ((windows*100)/total).toFixed(2);
      document.getElementById("windows2").value = resultado;


      resultado = ((otro*100)/total).toFixed(2);
      document.getElementById("otro2").value = resultado;


  }

  function votar() {
      let input = document.querySelector('input[type="radio"]:checked'); // asin cojo el input radio seleccionao en la encuesta que no sabia como cojerlo
      if(!input) { // si e nulo po salta el alert
        return alert("Por favor seleccione un sistema operativo");
      }
      let id = input.id; //cojo el id del input que este seleccionao en ese momento
      let total = getCookie("total") ? getCookie("total") : 0;
      let votos = getCookie(id) ? getCookie(id) : 0;
      document.cookie = "total = "+ (parseInt(total)+1);
      document.cookie = id + " = "+ (parseInt(votos)+1);
      document.location.reload(); //pa recargar l pagina y que salga los votos nuevos
  }
