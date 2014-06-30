$(document).on('ready', function() {

	$(document).on('click', function(eventArgs){
		var targ = $(eventArgs.target);
		console.log(eventArgs.target);
		if(targ.text()==='something cool'){
			console.log ('That\'s so cool...');
		}	

	});
  
});

//Delegated event handler for all buttons 
//Originals:
// $('button').on('click', function(){});
// Delegated
// $(document).on('click', 'button', function(){
	//log the text value of the currently clocked element 
// 	console.log( $(this.text() );
// 	});
//present the event handler ethof and then pass it to thr listener
 var onButtonClick = function(eventArgs) {
 	console.log(eventArgs);
 }

 //Attach the listener and pass th reference th the fucntion 
 $('button').on('click', onButtonClick);
// });