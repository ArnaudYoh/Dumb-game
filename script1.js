//handles the solo version
var solo = function(){
	count = 0; 
	$('.solo').fadeIn(300); 
	$(window).keydown(function(e){
		if(e.keyCode === 0 || e.keyCode === 32){
			$('.toclick').addClass(" active ");
			count = count +1;
		}
	}); 
	$(window).keyup(function(e){
		if(e.keyCode === 0 || e.keyCode === 32){
			$('.toclick').removeClass(" active ");
		}
	}); 
	countdown(10,$('.solo'),1000); 
	setTimeout(function(){
		$('.solo').fadeOut(200); 
		setTimeout(function(){
			$('.secondtlt').append('<p class="result">Congratulation !!! <br> you pressed the spacebar '+count+' times !!'); 
		},230); 
	},10100); 
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
		$('.temp').delay(100).fadeOut(200);
	}, 1900);
	setTimeout(function(){
		if (choice === 1){
			solo(); 
		}
		if (choice === 2){
			versus(); 
		}
	}, 2250);   
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
}

$(document).ready(main); 