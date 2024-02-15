<?php
$ciudadesJson = file_get_contents('U07-A02-JMondelo.json');
$ciudades = json_decode($ciudadesJson, true);

$input = $_GET['input'];
$sugerencias = [];

foreach ($ciudades as $ciudad) {
    if (strpos(strtolower($ciudad), strtolower($input)) === 0) {
        $sugerencias[] = $ciudad;
    }
}

echo json_encode($sugerencias);
?>
