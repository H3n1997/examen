<?php
include 'conecta.php';
$alumno=$_POST['alumno'];
$query="insert into alumno(nombre)values('$alumno')";
mysql_query($query);
?>