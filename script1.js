//Displays countdown + start
var countdown = function(count){
	if (count === 0) {
		return; 
	}
	setTimeout(function(){
		countdown(count-1);  
	}, 600); 
	$('.secondtlt').append('<br class="temp"><br class="temp"><div class="temp">'+count+'</div>'); 
	$('.temp').delay(300).fadeOut(200); 
} 

//manages calls to countdown when starting
var game = function(){
	$('.start').fadeOut(0); 
	countdown(3);
	$('.secondtlt').append('<br class="temp"><br class="temp"><div class="temp">Start !</div>'); 
	$('.temp').delay(100).fadeOut(300); 
}

//Set up of start button + title solo mode
var one = function(){
	$('.players').fadeOut(300); 
	setTimeout(function() {
		$('.title').append("<div class='secondtlt'> Solo Mode</div>"); 
		$('.start').fadeIn(200); 
	}, 500); 
}

//Set up of start button + title versus mode
var two = function(){
	$('.players').fadeOut(300);
	setTimeout(function() {
		$('.title').append("<div class='secondtlt'> Versus Mode</div>"); 
		$('.start').fadeIn(200); 
	}, 500); 
}

//beginnig function
var main = function(){
	var choice = 0; 
	$('.start').fadeOut(0);
	$('.one').click(function(){
		one(); 
		choice = 1; 
	}); 
	$('.two').click(function(){
		two();
		choice = 2; 
	});
	$('.start').click(function(){
		game(); 
	}); 
}

$(document).ready(main); 