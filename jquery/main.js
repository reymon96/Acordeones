//Se ejecuta cuando la página ha terminado de cargar
$(function(){

	$("h1").css({
		"background-color" : "red",
		"color" : "white"
	});

	$("#btn-hide").click(function () {
		$("h3").hide();
	});

	$("#btn-show").click(function () {
		$("h3").show();
	});

});