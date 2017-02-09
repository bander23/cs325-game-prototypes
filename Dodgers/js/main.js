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
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        // Load an image and call it 'logo'.
        game.load.image( 'logo', 'assets/earth.png' );
	game.load.image( 'rock', 'assets/asteroid.jpg' );
    }
    
    var earth;
    var rock;
    var counter=0;
    var text = 0;    
function create() {
        // Create a sprite at the center of the screen using the 'logo' image.
        earth = game.add.sprite( game.world.centerX, game.world.centerY, 'logo' );
        rock = game.add.sprite( game.world.leftX, game.world.centerY, 'rock');
	// Anchor the sprite at its center, as opposed to its top-left corner.
        // so it will be left centered.
        earth.anchor.setTo( 0.5, 0.5 );
        
        // Turn on the arcade physics engine for this sprite.
        game.physics.enable( earth, Phaser.Physics.ARCADE );
        // Make it bounce off of the world bounds.
        earth.body.collideWorldBounds = true;
        var maxAsteroids = 30;
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
}
}
};
