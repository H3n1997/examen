$(function(){
	$('form#fromAlumno').on('submit', altaAlumno);
});
function altaAlumno(e){
	e.preventDefault();
	var alumno=$('input#alumno').val();
	console.log('éntra');
	$.ajax({
		url: 'altas.php',
		type: 'POST',
		dataType: 'JSON',
		data: {alumno: alumno},
	})
	.done(function() {
		console.log("success");
	});
	$('form#fromExa').on('submit', comienzo);
}
function comienzo(e){
	e.preventDefault();
	console.log('entra en esta funcion');
	$.ajax({
		url: 'preguntas.php',
		type: 'GET',
		dataType: 'JSON',
	})
	.done(function(data) {
		console.log("success");
		var conecta="";
		for(x in data){
			conecta=conecta+'<p value='+data[x].id+'>'+data[x].nombre+'</p>'
		}
		$('div.preg').append(cadena);
	});
}