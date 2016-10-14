<?php
include 'conecta.php';
$query='select * from preguntas';
$pre=mysql_query($query);
$preguntas=array();
$con=0;
while ($camp=mysql_fetch_array($pre)) {
	$preguntas[$con]=array('id'=>$cam['id'],'pregunta'=>$cam['nombre']);
	$con=$con+1;
}
echo_json_encode($pre);
?>