<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>examen</title>
	<link rel="stylesheet" href="estilo.css">
</head>
<body>
	<h1 id="nA"></h1>
	<div class="alumno">
		<form id="fromAlumno">
			<input type="text" placeholder="Nombre del alumno" required id="alumno">
			<input type="submit" id="al" value="Dar Alta">
		</form>
	</div>
	<div class="dibuja">
		<form id="fromExa">
			<input type="submit" id="com" value="comienza">
		</form>
		<div class="preg">
			<?php
			include 'conecta.php';                                    
			$query='select * from preguntas';
			$muestra=mysql_query($query);
			echo '<h2>Preguntas de Historia</h2>';
			echo '<table>';
			while ($fila=mysql_fetch_array($muestra)) {
				echo '<tr>'; 
    			echo '<td>' . $fila['id'] . '</td><td>' . $fila['pregunta'] . '</td>'; 
    			echo '</tr>';
			}
			echo '</table>';
			mysql_free_result($muestra);
			?>
		</div>
		<div class="res">
			<?php
			include 'conecta.php';                                    
			$query='select * from respuesta';
			$muestra=mysql_query($query);
			$contador=0;
			echo '<h2>respuestas</h2>';
			echo '<table class="re">';
			while ($fila=mysql_fetch_array($muestra)) {
				$contador=$contador+1;
				echo '<tr id=fila'.$contador.'>'; 
    			echo '<td>' . $fila['id'] . '</td><td id="columna">' . $fila['a'].'  ' .'<button id=a'.$contador.'>X</button>' . '</td><td id="columna">' . $fila['b'].'  ' .'<button id=b'.$contador.'>X</button>' . '</td><td id="columna">' . $fila['c'].'  ' .'<button id=c'.$contador.'>X</button>' . '</td><td id="columna">' . $fila['d'].'  ' .'<button id=d'.$contador.'>X</button>' . '</td>'; 
    			echo '</tr>';
			}
			echo '</table>';
			mysql_free_result($muestra);
			?>
		</div>
	</div>
	<script type="text/javascript" src="jquery.js"></script>
	<script type="text/javascript" src="proceso.js"></script>
</body>
</html>