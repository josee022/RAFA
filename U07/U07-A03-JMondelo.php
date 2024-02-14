<?php
$votos = file_get_contents('U07-A03-JMondelo.txt');
$resultados = explode("||", $votos);
$input = $_GET['input'];
$txt = fopen("U07-A03-JMondelo.txt", "w");

if($input == "0"){
    $resultados[0] += 1;
}else if($input == "1"){
    $resultados[1] += 1;
}else if($input == "2"){
    $resultados[2] += 1;
}else if($input == "3"){
    $resultados[3] += 1;
}

$cadena = implode("||", $resultados);
fwrite($txt, $cadena);

echo $cadena;
?>
