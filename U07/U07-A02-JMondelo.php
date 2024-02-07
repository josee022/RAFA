<?php
$sugerencias = $_GET["sugerencia"];
$contenido = file_get_contents('U07-A02-JMondelo.json');
$datos = json.decode($contenido, true);
$ciudad = $datos['ciudad'];

