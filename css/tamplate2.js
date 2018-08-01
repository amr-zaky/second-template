$(document).ready(function(){

	$(".appear").click(function(){
		$(".containe").delay(200).toggle(3000);
		$(".containe").animate({
		left:'20px'
	},2000);
	});

});