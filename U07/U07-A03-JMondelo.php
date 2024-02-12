<?php
$file_path = "U07-A03-JMondelo.txt";

// Verificar si se recibió el voto por GET
if (isset($_GET['voto'])) {
    $voto = $_GET['voto'];

    // Abrir el archivo y obtener los votos actuales
    $content = file_get_contents($file_path);
    $votos = explode("||", $content);

    // Actualizar los votos según la opción seleccionada
    switch ($voto) {
        case 'opcion1':
            $votos[0]++;
            break;
        case 'opcion2':
            $votos[1]++;
            break;
        case 'opcion3':
            $votos[2]++;
            break;
        case 'opcion4':
            $votos[3]++;
            break;
    }

    // Crear la cadena para escribir en el archivo
    $cadena = implode("||", $votos);

    // Abrir el archivo en modo escritura y escribir los votos actualizados
    file_put_contents($file_path, $cadena);

    // Calcular el % del voto de cada opción
    $total_votos = array_sum($votos);
    $porcentajes = array_map(function ($v) use ($total_votos) {
        return round(($v / $total_votos) * 100, 2);
    }, $votos);

    // Mostrar los resultados
    echo "<h2>Resultados</h2>";
    echo "<p>Opción 1: {$votos[0]} votos ({$porcentajes[0]}%)</p>";
    echo "<p>Opción 2: {$votos[1]} votos ({$porcentajes[1]}%)</p>";
    echo "<p>Opción 3: {$votos[2]} votos ({$porcentajes[2]}%)</p>";
    echo "<p>Opción 4: {$votos[3]} votos ({$porcentajes[3]}%)</p>";
} else {
    echo "Error: No se recibió el voto.";
}
?>
