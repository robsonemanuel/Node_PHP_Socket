<?php
error_reporting(E_ALL);

$nome = "Roberto";
$senha = "blabla";

$port = 3000;
$adress = '127.0.0.1';

$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);


if($socket === false){
   echo "socket_create() failed: reason: " . socket_strerror(socket_last_error()) . "\n";
}

$result = socket_connect($socket,$adress,$port);
if($result === false){
    echo "socket_connect() failed.\nReason: ($result) " . socket_strerror(socket_last_error($socket)) . "\n";
}

//$mysqli = mysqli_connect('localhost', 'root', '', 'usuario');
$sql =  "INSERT INTO pessoas(nome,senha)VALUES ('{$nome}','{$senha}')";
//$res = mysqli_query($mysqli,$sql);

$encdata = json_encode($sql);


socket_write($socket, $encdata, strlen($encdata));

socket_close($socket);

 ?>
