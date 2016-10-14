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
	$('table').addClass('muestra');
}