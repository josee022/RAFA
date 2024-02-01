document.addEventListener('DOMContentLoaded', function () {

    const filas = 8;
    const columnas = 8;
    let tablero;

    function inicializarTablero() {
        // creo un nuevo array con la longitud del número de filas
        tablero = Array.from({ length: filas }, () =>
            // pa cada fila creo un nuevo array con la longitud de las columnas
            Array.from({ length: columnas }, () =>
            // le doy los valores a cadad casilla
            ({ valor: 0, revelada: false, bomba: false }))
        );
    }

    function colocarBombas() {
        // 8 bombas en el tablero
        const bombas = 8;
        // bucle para recorrer el bloque hasta que ponga todas las bombas
        for (let i = 0; i < bombas; i++) {
            let fila_aleatoria, columna_aleatoria;
            // pone bombas aleatorias en posicion de fila y columna aleatoria, si hay bomba hace otrave el bucle
            // y pone la bomba a true cuando la pone en una posicion
            do {
                fila_aleatoria = Math.floor(Math.random() * filas);
                columna_aleatoria = Math.floor(Math.random() * columnas);
            } while (tablero[fila_aleatoria][columna_aleatoria].bomba);
            tablero[fila_aleatoria][columna_aleatoria].bomba = true;
            // da valores a las casillas que rodean a el lugar de la bomba
            for (let fila = fila_aleatoria - 1; fila <= fila_aleatoria + 1; fila++) {
                for (let columna = columna_aleatoria - 1; columna <= columna_aleatoria + 1; columna++) {
                    // veo que esta dentro del tablero y no se sale, y se le añade 1 al valor
                    if (fila >= 0 && fila < filas && columna >= 0 && columna < columnas && !tablero[fila][columna].bomba) {
                        tablero[fila][columna].valor += 1;
                    }
                }
            }
        }
    }

    function imprimirTablero() {
        // obtengo el elemento del tablero por su id
        const elementoTablero = document.getElementById('tablero');
        // limpia el contenido actual del tablero
        elementoTablero.innerHTML = '';
        // recorre cada fila
        for (let fila = 0; fila < filas; fila++) {
            // recorre cada columna
            for (let columna = 0; columna < columnas; columna++) {
                // creo los elementos div que representaran mi tablero
                const casilla = document.createElement('div');
                // le doy el contenido de la casilla, en este caso todavía vacio
                casilla.textContent = '';
                // añado la clase casilla a mis casillas
                casilla.classList.add('casilla');
                // establezco  los atributos de datos de las filas y columnas para identificar la posición de la casilla
                casilla.dataset.fila = fila;
                casilla.dataset.columna = columna;
                // meto la casilla al tablero
                elementoTablero.appendChild(casilla);
                // meto un evento de clic a la casilla y llamo a la función click con los valores actuales de fila y columna
                casilla.addEventListener('click', function () {
                    click(fila, columna);
                });
            }
        }
    }

    function click(fila, columna) {
        // obtengo la casilla que hace click
        const casilla = tablero[fila][columna];

        // ve si es bomba
        if (casilla.bomba) {
            // si es bomba muestra el mensaje
            mostrarMensajeDerrota('💣 ¡Boom! Juego terminado 💣');
            revelarBombas();
            reiniciarJuego();
        } else if (!casilla.revelada) {
            // se ve la casilla y depende de su dato se abre o aparece solo esa casilla
            revelarCasilla(fila, columna);

            // si es 0 se abre las que le rodean
            if (casilla.valor === 0) {
                abrirCerosRodeados(fila, columna);
            }

            // verifica si gano abriendo todo menos las bombas
            verificarGanador();
        }
    }

    function revelarCasilla(fila, columna) {
        // cojemos la casilla actual, se le da true al ser revelada y comprobamos el valor que tiene la casilla
        const casilla = tablero[fila][columna];
        casilla.revelada = true;
        const casillaDOM = document.querySelector(`[data-fila="${fila}"][data-columna="${columna}"]`);
        casillaDOM.textContent = casilla.bomba ? '💣' : casilla.valor === 0 ? '' : casilla.valor;
        casillaDOM.classList.add('revelada');
        // si es una bomba la casilla se pinta roja
        if (casilla.bomba) {
            casillaDOM.classList.add('bomba-mostrada');
        }
    }

    function abrirCerosRodeados(fila, columna) {
        // cojo las casillas que rodea a la casilla que señalo como antes
        for (let i = fila - 1; i <= fila + 1; i++) {
            for (let j = columna - 1; j <= columna + 1; j++) {
                // miro el valor para seguir abriendo las casillas qeu rodea a la que hacemos click
                if (i >= 0 && i < filas && j >= 0 && j < columnas) {
                    click(i, j);
                }
            }
        }
    }

    function mostrarMensajeDerrota(mensaje) {
        // cojo el mensaje y lo meto en una constante, y despues creo la clase mostrando que lo que hace es imprimir el mensaje, en este caso de derrota
        const mensajeJuego = document.getElementById('mensajeDerrota');
        mensajeJuego.textContent = mensaje; // cojo el contenido del elemento
        mensajeJuego.classList.add('mostrando');
        // quita el mensaje a los 5 segundos
        setTimeout(function () {
            mensajeJuego.classList.remove('mostrando');
        }, 5000);
    }

    function mostrarMensajeVictoria(mensaje) {
        // cojo el mensaje y lo meto en una constante, y despues creo la clase mostrando que lo que hace es imprimir el mensaje, en este caso de victoria
        const mensajeJuego = document.getElementById('mensajeVictoria');
        mensajeJuego.textContent = mensaje; // cojo el contenido del elemento
        mensajeJuego.classList.add('mostrando');
        // quita el mensaje a los 5 segundos
        setTimeout(function () {
            mensajeJuego.classList.remove('mostrando');
        }, 5000);
    }

    function verificarGanador() {
        let todasReveladasMenosBombas = true;
        // lo que hago es recorrer todas las posiciones
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                const casilla = tablero[i][j];
                // veo si lo que queda son casillas sin revelar y con bombas, ya que revelar y bomba empiezan con valor false, si son true es que se han descubierto
                if (!casilla.revelada && !casilla.bomba) {
                    todasReveladasMenosBombas = false;
                    break;
                }
            }
        }
        // si se abre todas las casillas menos las bombas usamos esas funciones para imprimir la victoria y reiniciar el juego
        if (todasReveladasMenosBombas) {
            mostrarMensajeVictoria('🥳 ¡Enhorabuena! Has ganado 🥳');
            reiniciarJuego();
        }
    }

    function reiniciarJuego() {
        // cuando se llama a esta funcion se reinicia el juego por eso lo que hacemos es llamar a las funciones esas
        setTimeout(function () {
            inicializarTablero();
            colocarBombas();
            imprimirTablero();
            // a los 5 segundos se reinicia
        }, 5000);
    }

    function revelarBombas() {
        // recorro todas las posiciones con este bucle de las filas y columnas
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                //posicion de la casilla
                const casilla = tablero[i][j];
                //si es bomba utilizo el revelar para mostrar todas las bombas al perder
                if (casilla.bomba) {
                    revelarCasilla(i, j);
                }
            }
        }
    }

    function tableroConsola() {
        // para ver el tablero con sus valores en la consola, bucle recorriendo todas las filas y columnas
        for (let i = 0; i < filas; i++) {
            let consolaTablero = '';
            for (let j = 0; j < columnas; j++) {
                // posicion de las casillas, y  se le asigna la bomba o su valor que tenga para verlo en la consola
                const casilla = tablero[i][j];
                consolaTablero += casilla.bomba ? '💣' : casilla.valor === 0 ? '0' : casilla.valor;
            }
            console.log(consolaTablero);
        }
    }

    // llamo a las funciones que necesito para ejecutar el juego, las otras funciones del codigo son para utilizarlas dentro de esas y no tengo que llamarlas
    inicializarTablero();
    colocarBombas();
    imprimirTablero();
    tableroConsola();
});
