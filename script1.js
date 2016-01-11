var one = function(){
	$('.players').fadeOut(300); 
	setTimeout(function() {
		$('.title').append("<div class='secondtlt'> Solo Mode</div>"); 
		$('.start').fadeIn(200); 
	}, 500); 
}

var two = function(){
	$('.players').fadeOut(300);
	setTimeout(function() {
		$('.title').append("<div class='secondtlt'> Versus Mode</div>"); 
		$('.start').fadeIn(200); 
	}, 500); 
}


var main = function(){
	$('.start').fadeOut(0);
	$('.one').click(one); 
	$('.two').click(two); 
}

$(document).ready(main); 