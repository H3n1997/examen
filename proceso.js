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
	$('div.res table tr td button#a1').on('click', pre1a);
	$('div.res table tr td button#b2').on('click', pre2b);
	$('div.res table tr td button#c3').on('click', pre3c);
	$('div.res table tr td button#d4').on('click', pre4d);
	$('div.res table tr td button#a5').on('click', pre5a);
	$('div.res table tr td button#b6').on('click', pre6b);
	$('div.res table tr td button#c7').on('click', pre7c);
	$('div.res table tr td button#d8').on('click', pre8d);
	$('div.res table tr td button#a9').on('click', pre9a);
	$('div.res table tr td button#b10').on('click', pre10b);
}
function pre1a(){
	var puntoA=1;
	console.log(puntoA+'p1');
}
function pre2b(){
	var puntoB=1;
	console.log(puntoB+'p2');
}
function pre3c(){
	var puntoC=1;
	console.log(puntoC+'p3');
}
function pre4d(){
	var puntoD=1;
	console.log(puntoD+'p4');
}
function pre5a(){
	var puntoAA=1;
	console.log(puntoAA+'p5');
}
function pre6b(){
	var puntoBB=1;
	console.log(puntoBB+'p6');
}
function pre7c(){
	var puntoCC=1;
	console.log(puntoCC+'p7');
}
function pre8d(){
	var puntoDD=1;
	console.log(puntoDD+'p8');
}
function pre9a(){
	var puntoAAA=1;
	console.log(puntoAAA+'p9');
}
function pre10b(){
	var puntoBBB=1;
	console.log(puntoBBB+'p10');
}
