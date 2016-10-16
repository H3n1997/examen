$(function(){
	$('form#fromAlumno').on('submit', altaAlumno);
});
function altaAlumno(e){
	e.preventDefault();
	var alumno=$('input#alumno').val();
	console.log(alumno);
	$('h1#nA').append('Nombre del Alumno: '+alumno);
	$.ajax({
		url: 'altas.php',
		type: 'POST',
		dataType: 'JSON',
		data: {alumno: alumno},
	})
	.done(function() {
		console.log("success");
	});
	$('form#fromAlumno').addClass('esconde');
	$('form#fromExa').on('submit', comienzo);
}
function comienzo(e){
	e.preventDefault();
	$('form#fromExa input#com').addClass('esconde');
	$('table').addClass('muestra');
	$('div.res table tr td button#a1').on('click', pre1a);
	$('div.res table tr td button#a2').on('click', pre2a);
	$('div.res table tr td button#a3').on('click', pre3a);
	$('div.res table tr td button#a4').on('click', pre4a);
	$('div.res table tr td button#a6').on('click', pre6a);
	$('div.res table tr td button#a7').on('click', pre7a);
	$('div.res table tr td button#a8').on('click', pre8a);
	$('div.res table tr td button#a10').on('click', pre10a);

	$('div.res table tr td button#b2').on('click', pre2b);
	$('div.res table tr td button#b1').on('click', pre1b);
	$('div.res table tr td button#b3').on('click', pre3b);
	$('div.res table tr td button#b4').on('click', pre4b);
	$('div.res table tr td button#b5').on('click', pre5b);
	$('div.res table tr td button#b7').on('click', pre7b);
	$('div.res table tr td button#b8').on('click', pre8b);
	$('div.res table tr td button#b9').on('click', pre9b);

	$('div.res table tr td button#c3').on('click', pre3c);
	$('div.res table tr td button#c2').on('click', pre2c);
	$('div.res table tr td button#c1').on('click', pre1c);
	$('div.res table tr td button#c4').on('click', pre4c);
	$('div.res table tr td button#c5').on('click', pre5c);
	$('div.res table tr td button#c6').on('click', pre6c);
	$('div.res table tr td button#c8').on('click', pre8c);
	$('div.res table tr td button#c9').on('click', pre9c);
	$('div.res table tr td button#c10').on('click', pre10c);

	$('div.res table tr td button#d4').on('click', pre4d);
	$('div.res table tr td button#d3').on('click', pre3d);
	$('div.res table tr td button#d2').on('click', pre2d);
	$('div.res table tr td button#d1').on('click', pre1d);
	$('div.res table tr td button#d5').on('click', pre5d);
	$('div.res table tr td button#d6').on('click', pre6d);
	$('div.res table tr td button#d7').on('click', pre7d);
	$('div.res table tr td button#d9').on('click', pre9d);
	$('div.res table tr td button#d10').on('click', pre10d);

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
	$('div.res table tr#fila1').addClass('esconde');
}
function pre2a(){
	$('div.res table tr#fila2').addClass('esconde');	
}
function pre3a(){
	$('div.res table tr#fila3').addClass('esconde');	
}
function pre4a(){
	$('div.res table tr#fila4').addClass('esconde');	
}
function pre6a(){
	$('div.res table tr#fila6').addClass('esconde');	
}
function pre7a(){
	$('div.res table tr#fila7').addClass('esconde');	
}
function pre8a(){
	$('div.res table tr#fila8').addClass('esconde');	
}
function pre10a(){
	$('div.res table tr#fila10').addClass('esconde');	
}

function pre2b(){
	var puntoB=1;
	console.log(puntoB+'p2');
	$('div.res table tr#fila2').addClass('esconde');
}
function pre1b(){
	$('div.res table tr#fila1').addClass('esconde');
}
function pre3b(){
	$('div.res table tr#fila3').addClass('esconde');
}
function pre4b(){
	$('div.res table tr#fila4').addClass('esconde');
}
function pre5b(){
	$('div.res table tr#fila5').addClass('esconde');
}
function pre7b(){
	$('div.res table tr#fila7').addClass('esconde');
}
function pre8b(){
	$('div.res table tr#fila8').addClass('esconde');
}
function pre9b(){
	$('div.res table tr#fila9').addClass('esconde');
}

function pre3c(){
	var puntoC=1;
	console.log(puntoC+'p3');
	$('div.res table tr#fila3').addClass('esconde');
}
function pre2c(){
	$('div.res table tr#fila2').addClass('esconde');
}
function pre1c(){
	$('div.res table tr#fila1').addClass('esconde');
}
function pre4c(){
	$('div.res table tr#fila4').addClass('esconde');
}
function pre5c(){
	$('div.res table tr#fila5').addClass('esconde');
}
function pre6c(){
	$('div.res table tr#fila6').addClass('esconde');
}
function pre8c(){
	$('div.res table tr#fila8').addClass('esconde');
}
function pre9c(){
	$('div.res table tr#fila9').addClass('esconde');
}
function pre10c(){
	$('div.res table tr#fila10').addClass('esconde');
}

function pre4d(){
	var puntoD=1;
	console.log(puntoD+'p4');
	$('div.res table tr#fila4').addClass('esconde');
}
function pre3d(){
	$('div.res table tr#fila3').addClass('esconde');
}
function pre2d(){
	$('div.res table tr#fila2').addClass('esconde');
}
function pre1d(){
	$('div.res table tr#fila1').addClass('esconde');
}
function pre5d(){
	$('div.res table tr#fila5').addClass('esconde');
}
function pre6d(){
	$('div.res table tr#fila6').addClass('esconde');
}
function pre7d(){
	$('div.res table tr#fila7').addClass('esconde');
}
function pre9d(){
	$('div.res table tr#fila9').addClass('esconde');
}
function pre10d(){
	$('div.res table tr#fila10').addClass('esconde');
}

function pre5a(){
	var puntoAA=1;
	console.log(puntoAA+'p5');
	$('div.res table tr#fila5').addClass('esconde');
}
function pre6b(){
	var puntoBB=1;
	console.log(puntoBB+'p6');
	$('div.res table tr#fila6').addClass('esconde');
}
function pre7c(){
	var puntoCC=1;
	console.log(puntoCC+'p7');
	$('div.res table tr#fila7').addClass('esconde');
}
function pre8d(){
	var puntoDD=1;
	console.log(puntoDD+'p8');
	$('div.res table tr#fila8').addClass('esconde');
}
function pre9a(){
	var puntoAAA=1;
	console.log(puntoAAA+'p9');
	$('div.res table tr#fila9').addClass('esconde');
}
function pre10b(){
	var puntoBBB=1;
	console.log(puntoBBB+'p10');
	$('div.res table tr#fila10').addClass('esconde');
}
