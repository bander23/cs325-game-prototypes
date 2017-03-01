"use strict";

function make_main_game_state( game )
{
    function preload() {
        // Load an image and call it 'logo'.
        game.load.image( 'logo', 'assets/phone.png' );
		game.load.audio( 'ring', 'assets/Ringer.mp3');
    }
    
    var phone;
	var style;
	var text;
	var sound;
	var time = 0;
    var counter = 0;
	var count = 0;
    function create() {
        // Create a sprite at the center of the screen using the 'logo' image.
        phone = game.add.button( game.world.centerX, game.world.centerY, 'logo', actionOnClick, this, 2,1,0 );
        // Anchor the sprite at its center, as opposed to its top-left corner.
        // so it will be truly centered.
        phone.anchor.setTo( 0.5, 0.5 );
        sound = game.add.audio('ring');
        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
        text = game.add.text( game.world.centerX, 15, "Counter: 0", style );
        text.anchor.setTo( 0.5, 0.0 );
		phone.onInputOver.add(over,this);
		phone.onInputOut.add(out,this);
		phone.onInputUp.add(up,this);
		sound.play();
		game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);
		
    }
	//Taken from phaser example for a simple timer
	function updateCounter() {
	count++;
	}	
	
	function up() {
    console.log('button up', arguments);
	}

	function over() {
    console.log('button over');
	}

	function out() {
    console.log('button out');
	}

	function actionOnClick () {
	counter++;
    text.setText('Counter: ' + counter);
	phone.inputEnabled = false;
	}
    
    function update() {
        time++;
		if(time > 40)
		{
		time=0;
		phone.x = game.world.randomX;
		phone.y = game.world.randomY;
		phone.inputEnabled = true;
		}
		if(count > 60)
		{
			game.paused = true;
			text.setText('Final Score: ' + counter + '  Click to restart');
			game.input.onDown.addOnce(restart, this);
		}
        
    }
    function restart(event){
		phone.x = game.world.centerX;
		phone.y = game.world.centerY;
		count = 0;
		counter = 0;
		time = 0;
		text.setText('Counter: 0');
		sound.play();
		game.paused = false;
		
	}
    return { "preload": preload, "create": create, "update": update };
}


window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/v2.6.2/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game' );
    
    game.state.add( "main", make_main_game_state( game ) );
    
    game.state.start( "main" );
};