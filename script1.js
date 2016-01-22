var solo = function(){

}

//Displays countdown + start
var countdown = function(count,location,time){
	if (count === 0) {
		return; 
	}
	setTimeout(function(){
		countdown(count-1,location,time);  
	}, time+30); 
	location.append('<br class="temp"><br class="temp"><div class="temp">'+count+'</div>'); 
	$('.temp').delay(time/2-100).fadeOut(time/2+100); 
} 

//manages calls to countdown when starting
var game = function(choice){
	$('.start').fadeOut(0); 
	countdown(3,$('.secondtlt'),600);
	setTimeout(function(){
		$('.secondtlt').append('<br class="temp"><br class="temp"><div class="temp">Start !</div>'); 
		$('.temp').delay(100).fadeOut(300);
		// if (choice === 1){
		// 	solo();		
		// }
		// if (choice === 2){
		// 	versus(); 
		// }
	}, 1900);  

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

//Main function getting all inputs/calling the functions
var main = function(){
	var choice = 0; 
	$('.one').click(function(){
		one(); 
		choice = 1; 
	}); 
	$('.two').click(function(){
		two();
		choice = 2; 
	});
	$('.start').click(function(){
		game(choice); 
	});
		/*
	Now the idea is the have a button is clicked
	when player presses the assigned keystroke.
	The Timer (10 sec) is below the div/section containing the 
	*/ 
}

$(document).ready(main); 