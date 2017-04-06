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
        game.load.image( 'car', 'assets/car.png' );
		game.load.image( 'car2', 'assets/car2.png');
		game.load.image( 'button', 'assets/button.jpg');
		game.load.image( 'background', 'assets/road.jpg' );
		game.load.audio( 'music', 'assets/Not So Empty.mp3');

    }
    
    var car;
	var b;
	
	//my car values
	var m1;
	var m2;
	var m3;
	var m4;
	var m5;
    //other cars
	var v1;
	var v2;
	var v3;
	var v4;
	var v5;
	//car values
	var c1;
	var c2;
	var c3;
	var c4;
	var c5;
	var text;
	var sound;
	var background;
    function create() {
        // Create a sprite at the center of the screen using the 'car' image.
		sound = game.add.audio('music');
		sound.play();
		background = game.add.tileSprite(0,0,800,600, 'background');
        car = game.add.sprite( game.world.centerX, 300, 'car' );
        v1 = game.add.sprite(450, 250, 'car2' );
		v2 = game.add.sprite(350, 200, 'car2' );
		v3 = game.add.sprite(340, 150, 'car2' );
		v4 = game.add.sprite(220, 100, 'car2' );
		v5 = game.add.sprite(200, 50, 'car2' );
		
		c1 = game.rnd.integerInRange( 1-13);
		c2 = game.rnd.integerInRange( 1-13);
		c3 = game.rnd.integerInRange( 1-13);
		c4 = game.rnd.integerInRange( 1-13);
		c5 = game.rnd.integerInRange( 1-13);

		m1 = game.rnd.integerInRange( 1-13);
		m2 = game.rnd.integerInRange( 1-13);
		m3 = game.rnd.integerInRange( 1-13);
		m4 = game.rnd.integerInRange( 1-13);
		m5 = game.rnd.integerInRange( 1-13);
		
		b = game.add.button( 0, 550, 'button', actionOnClick, this, 2,1,0 );
		
        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
		text = game.add.text( game.world.centerX, 15, "Click the button to progress across the road.", style );
        text.anchor.setTo( 0.5, 0.0 );
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
	
	function actionOnClick() {
	if(m1 > 0)
	{	
	if(m1 > c1)
	{
		car.x += 50;
		car.y -= 50;
		m1 = 0;
		c1 = 0;
	}
	else if(m1 < c1)
	{
		car.x += 50;
		car.y += 50;
		m1 = 0;
		c1 = 0;
	}
	else
	{
		if( c1 != 0)
		{
			car.y -= 50;
		}
		//car has passed wave 1
	}
	}
	else if(m2 > 0)
	{
	if(m2 > c2)
	{
		car.x += 50;
		car.y -= 50;
		m2 = 0;
		c2 = 0;
	}
	else if(m2 < c2)
	{
		car.x -= 50;
		car.y += 50;
		m2 = 0;
		c2 = 0;
	}
	else
	{
		if( c2 != 0)
		{
			car.y -= 50;
		}
		//car has passed wave 2
	}
	}
	else if(m3 != 0)
	{
	if(m3 > c3)
	{
		car.x += 50;
		car.y -= 50;
		m3 = 0;
		c3 = 0;
	}
	else if(m3 < c3)
	{
		car.x -= 50;
		car.y += 50;
		m3 = 0;
		c3 = 0;
	}
	else
	{
		if( c3 != 0)
		{
			car.y -= 50;
		}
		//car has passed wave 3
	}
	}
	else if(m4 != 0)
	{
	if(m4 > c4)
	{
		car.x += 50;
		car.y -= 50;
		m4 = 0;
		c4 = 0;
	}
	else if(m4 < c4)
	{
		car.x -= 50;
		car.y += 50;
		m4 = 0;
		c4 = 0;
	}
	else
	{
		if( c4 != 0)
		{
			car.y -= 50;
		}
		//car has passed wave 4
	}
	}
	else if(m5 != 0)
	{
	if(m5 > c5)
	{
		car.x += 50;
		car.y -= 50;
		m5 = 0;
		c5 = 0;
	}
	else if(m5 < c5)
	{
		car.x -= 50;
		car.y += 50;
		m5 = 0;
		c5 = 0;
	}
	else
	{
		if( c5 != 0)
		{
			car.y -= 1000;
		}
		//car has passed wave 5
	}
	}
	}
	
    function update() {
        if(car.x == v1.x && car.y == v1.y)
		{
			game.paused = true;
			text.setText("You lose! Try again?");
			game.input.onDown.addOnce(restart, this);
		}
		if(car.x == v2.x && car.y == v2.y)
		{
			game.paused = true;
			text.setText("You lose! Try again?");
			game.input.onDown.addOnce(restart, this);
		}
		if(car.x == v3.x && car.y == v3.y)
		{
			game.paused = true;
			text.setText("You lose! Try again?");
			game.input.onDown.addOnce(restart, this);
		}
		if(car.x == v4.x && car.y == v4.y)
		{
			game.paused = true;
			text.setText("You lose! Try again?");
			game.input.onDown.addOnce(restart, this);
		}
		if(car.x == v5.x && car.y == v5.y)
		{
			game.paused = true;
			text.setText("You lose! Try again?");
			game.input.onDown.addOnce(restart, this);
		}
		
		if(v1.x > 600)
		{
			v1.x = 200;
		}
		if(v2.x > 600)
		{
			v2.x = 200;
		}
		if(v3.x > 600)
		{
			v3.x = 200;
		}
		if(v4.x > 600)
		{
			v4.x = 200;
		}
		if(v5.x > 600)
		{
			v5.x = 200;
		}
		v1.x += 3;
		v2.x += 5;
		v3.x += 4;
		v4.x += 5;
		v5.x += 2;
		if(car.y <= 0)
			{
			text.setText("You win! Congrats! Click to restart");
			game.paused = true;
			game.input.onDown.addOnce(restart, this);
			}
		
    }
	
	function restart() {
		car.x = game.world.centerX;
		car.y = 300;
		
		c1 = game.rnd.integerInRange( 1-13);
		c2 = game.rnd.integerInRange( 1-13);
		c3 = game.rnd.integerInRange( 1-13);
		c4 = game.rnd.integerInRange( 1-13);
		c5 = game.rnd.integerInRange( 1-13);

		m1 = game.rnd.integerInRange( 1-13);
		m2 = game.rnd.integerInRange( 1-13);
		m3 = game.rnd.integerInRange( 1-13);
		m4 = game.rnd.integerInRange( 1-13);
		m5 = game.rnd.integerInRange( 1-13);
		text.setText("Press the button to proceed across the road.");
		game.paused = false;
	}
};
