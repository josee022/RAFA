<?php

$ciudades = ["Casares", "Barcelona", "Alcorcón", "Malaga", "Fuengirola", "Marbella", "Río de Janeiro", "Gijón", "Oviedo", "Mérida", "Estepona", "París", "Londres", "Berlín", "Moscú", "Atenas"];

$ciudad = strtolower($_GET['ciudad']);
$sugerencias = [];

foreach ($ciudades as $nombre) {
    if (stristr(strtolower($nombre), $ciudad)) {
        $sugerencias[] = $nombre;
    }
}

$response = empty($sugerencias) ? "ninguna sugerencia" : implode(', ', $sugerencias);
echo $response;
?>
