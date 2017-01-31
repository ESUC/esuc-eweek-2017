$(document).ready(function(){
		createPlane();
		setInterval(createPlane, 10000);
})

function createPlane(){
	console.log("Creating place");
	console.log('TOP: ' + top);
	$('.plane-container').css({'position': 'absolute','top': '40%'});
}