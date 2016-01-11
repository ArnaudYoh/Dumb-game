var countdown = function(number){
	if (number === 0) {
		$('.secondtlt').append('<br class="temp"><br class="temp"><div class="temp">Start !</div>'); 
		$('.temp').delay(100).fadeOut(300); 
		return; 
	}
	setTimeout(function(){
		countdown(number-1);  
	}, 600); 
	$('.secondtlt').append('<br class="temp"><br class="temp"><div class="temp">'+number+'</div>'); 
	$('.temp').delay(300).fadeOut(200); 
} 

var game = function(number){
	$('.start').fadeOut(0); 
	countdown(3); 
}

var one = function(){
	$('.players').fadeOut(300); 
	setTimeout(function() {
		$('.title').append("<div class='secondtlt'> Solo Mode</div>"); 
		$('.start').fadeIn(200); 
	}, 500); 
	$('.start').click(function(){
		game(1)
	}); 
}

var two = function(){
	$('.players').fadeOut(300);
	setTimeout(function() {
		$('.title').append("<div class='secondtlt'> Versus Mode</div>"); 
		$('.start').fadeIn(200); 
	}, 500); 
	$('.start').click(function(){
		game(2)
	});
}


var main = function(){
	$('.start').fadeOut(0);
	$('.one').click(one); 
	$('.two').click(two); 
}

$(document).ready(main); 