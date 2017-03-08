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
	//used code from looped animation example
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        // Load an image and call it 'logo'.
        game.load.image( 'logo', 'assets/earth.png' );
		game.load.image( 'rock', 'assets/asteroid.jpg' );
		game.load.image( 'background', 'assets/space.jpg' );
		game.load.audio( 'music', 'assets/Falling Down.mp3');
    }
    
    var earth;
	var sound;
	var background;
    var rock;
    var rock2;
    var rock3;
    var rock4;
    var rock5;
    var rock6;
    var counter=0;
    var text = 0;
    
function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);       

	 // Create a sprite at the center of the screen using the 'logo' image.
		sound = game.add.audio('music');
		sound.play();
		background = game.add.tileSprite(0,0,800,600, 'background');
        earth = game.add.sprite( game.world.centerX, game.world.centerY, 'logo' );
        rock = game.add.sprite( 1000, game.world.centerY, 'rock');
		rock2 = game.add.sprite( 1000, game.world.randomY, 'rock');
		rock3 = game.add.sprite( 1000, game.world.randomY, 'rock');
		rock4 = game.add.sprite( 1000, game.world.randomY, 'rock');
		rock5 = game.add.sprite( 1000, game.world.randomY, 'rock');
		rock6 = game.add.sprite( 1000, game.world.randomY, 'rock');

	// Anchor the sprite at its center, as opposed to its top-left corner.
        // so it will be left centered.
        earth.anchor.setTo( 0.5, 0.5 );
        // Turn on the arcade physics engine for this sprite.
        game.physics.enable( earth, Phaser.Physics.ARCADE );
		game.physics.enable( rock, Phaser.Physics.ARCADE );
		game.physics.enable( rock2, Phaser.Physics.ARCADE );
		game.physics.enable( rock3, Phaser.Physics.ARCADE );
		game.physics.enable( rock4, Phaser.Physics.ARCADE );
		game.physics.enable( rock5, Phaser.Physics.ARCADE );
		game.physics.enable( rock6, Phaser.Physics.ARCADE );
        // Make it bounce off of the world bounds.
        earth.body.collideWorldBounds = true;
	// Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
        text = game.add.text( game.world.centerX, 15, "Timer: 0", style );
        game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);
		text.anchor.setTo( 0.5, 0.0 );   
	

}
//Taken from phaser example for a simple timer
function updateCounter() {
counter++;
text.setText('Timer: ' + counter);

}
    
    function update() {
        // Accelerate the 'logo' sprite towards the cursor,
        // accelerating at 500 pixels/second and moving no faster than 500 pixels/second
        // in X or Y.
        // This function returns the rotation angle that makes it visually match its
        // new trajectory.
        earth.rotation = game.physics.arcade.accelerateToPointer( earth, this.game.input.activePointer, 500, 500, 500 );

	rock.x -=2;
	if(rock.x < -rock.width)
	{
	rock.x = game.world.width;
	rock.y = game.world.randomY;
	}
	rock2.x -=7;
	
	if(rock2.x < -rock2.width)
	{
	rock2.x = game.world.width;
	rock2.y = game.world.randomY;
	}
	rock3.x -=1;
	
	if(rock3.x < -rock3.width)
	{
	rock3.x = game.world.width;
	rock3.y = game.world.randomY;
	}
	rock4.x -=8;
	
	if(rock4.x < -rock4.width)
	{
	rock4.x = game.world.width;
	rock4.y = game.world.randomY;
	}
	rock5.x -=10;
	
	if(rock5.x < -rock5.width)
	{
	rock5.x = game.world.width;
	rock5.y = game.world.randomY;
	}
	rock6.x -=12;
	
	if(rock6.x < -rock6.width)
	{
	rock6.x = game.world.width;
	rock6.y = game.world.randomY;
	}

	game.physics.arcade.collide(rock, earth, collisionHandler, null, this);
	game.physics.arcade.collide(rock2, earth, collisionHandler, null, this);
	game.physics.arcade.collide(rock3, earth, collisionHandler, null, this);
	game.physics.arcade.collide(rock4, earth, collisionHandler, null, this);
	game.physics.arcade.collide(rock5, earth, collisionHandler, null, this);
	game.physics.arcade.collide(rock6, earth, collisionHandler, null, this);
	
	if(counter >= 60)
	{
		game.paused = true;
		text.setText('You win! Click to restart');
		game.input.onDown.addOnce(restart, this);
	}

}

function collisionHandler () {
	game.paused = true;
	text.setText('Final time: ' + counter + '  Click to restart');
	game.input.onDown.addOnce(restart, this);
	
}
function restart(event){
		earth.x = game.world.centerX;
		earth.y = game.world.centerY;
		counter = 0;
		rock.x = 1000;
		rock2.x = 1000;
		rock3.x = 1000;
		rock4.x = 1000;
		rock5.x = 1000;
		rock6.x = 1000;
		rock.y = game.world.randomY;
		rock2.y = game.world.randomY;
		rock3.y = game.world.randomY;
		rock4.y = game.world.randomY;
		rock5.y = game.world.randomY;
		rock6.y = game.world.randomY;
		text.setText('Timer: 0');
		sound.resume();
		game.paused = false;
		
	}

};
