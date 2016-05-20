// Program handling the user interaction //
// TODO : try to have a bit more modularity especially in the keypressing during the game // 


// handles the solo version
var solo = function(){
	count = 0;
	pseudolock = 1;  
	$('.solo').fadeIn(300); 
	$(window).keydown(function(e){
		if(e.keyCode === 0 || e.keyCode === 32){
			$('.toclick').addClass(" active ");
			if (pseudolock === 1){
				pseudolock = 0; 
				count = count +1;
			}
		}
	}); 
	$(window).keyup(function(e){
		if(e.keyCode === 0 || e.keyCode === 32){
			$('.toclick').removeClass(" active ");
			pseudolock = 1; 
		}
	});
	countdown(10,$('.solo'),1000); 
	setTimeout(function(){
		$('.solo').fadeOut(200); 
		setTimeout(function(){
			$('.secondtlt').append('<p class="result">STOP!</p>'); 
			$('.result').delay(200).fadeOut(150); 
			setTimeout(function(){
				$('.secondtlt').append('<p class="result">Congratulation !!! <br> you pressed the spacebar '+count+' times !! <br> <br> Now please do something more useful with your time'); 
			},400);
		},220); 
	},10100); 
}

// handles the versus version
var versus = function(){
	count1 = 0;
	count2 = 0; 
	pseudolock1 = 1;
	pseudolock2 = 1;  
	$('.versus').fadeIn(300); 
	
	//player 2 key "S" animation
	$(window).keydown(function(e){
		if(e.keyCode === 83){
			$('.toclick1').addClass(" active ");
			if (pseudolock1 === 1){
				pseudolock1 = 0; 
				count1 = count1 +1;
			}
		}
	}); 
	$(window).keyup(function(e){
		if(e.keyCode === 83){
			$('.toclick1').removeClass(" active ");
			pseudolock1 = 1; 
		}
	});

	//player 2 key "L" animation 
	$(window).keydown(function(e){
		if(e.keyCode === 76){
			$('.toclick2').addClass(" active ");
			if (pseudolock2 === 1){
				pseudolock2 = 0; 
				count2 = count2 +1;
			}
		}
	}); 
	$(window).keyup(function(e){
		if(e.keyCode === 76){
			$('.toclick2').removeClass(" active ");
			pseudolock2 = 1; 
		}
	});

	// Game Countdown + ending message of the game (this is badly coded)
	countdown(10,$('.versus'),1000); 
	setTimeout(function(){
		$('.versus').fadeOut(200); 
		setTimeout(function(){
			$('.secondtlt').append('<p class="result">STOP!</p>'); 
			$('.result').delay(200).fadeOut(150); 
			setTimeout(function(){
				if(count1 > count2){
					$('.secondtlt').append('<p class="result"> <br>Player 1, you pressed the spacebar '+count1+' times !! <br> YOU WON <br> <br>Player 2 go do something else, nobody likes you'); 
				}
				else if (count1 < count2 ) {
					$('.secondtlt').append('<p class="result"> <br>Player 2, you pressed the spacebar '+count2+' times !! <br> YOU WON <br> <br>Player 1 go do something else, nobody likes you');
				}
				else {
					$('.secondtlt').append('<p class="result"> <br>Player 1 and 2, you pressed the spacebar '+count1+' times !! <br> DRAW <br> <br>Well it was very unlikely to happen, give yourselves a hug');	
				}
				},400);
		},220); 
	},10100); 
}
 
//Displays starting countdown + start
var countdown = function(count,location,time){
	if (count === 0) {
		return; 
	}
	setTimeout(function(){
		countdown(count-1,location,time);  
	}, time+30); 
	location.append('<div class="temp">'+count+'</div>'); 
	$('.temp').delay(time/2-100).fadeOut(time/2+100); 
} 

//manages calls to countdown when starting
var game = function(choice){
	$('.start').fadeOut(0); 
	countdown(3,$('.secondtlt'),600);
	setTimeout(function(){
		$('.secondtlt').append('<div class="temp">Start !</div>'); 
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

// Main menu 
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