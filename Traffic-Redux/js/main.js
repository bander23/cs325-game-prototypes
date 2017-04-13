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
	
    //other cars
	var v1;
	var v2;
	var v3;
	var v4;
	var v5;
	var v6;
	var v7;
	var v8;
	var v9;
	var v10;
	
	var r;
	var text;
	var sound;
	var background;
    function create() {
        // Create a sprite at the center of the screen using the 'car' image.
		sound = game.add.audio('music');
		sound.play();
		background = game.add.tileSprite(0,0,800,600, 'background');
        car = game.add.sprite( game.world.centerX, 550, 'car' );
        v1 = game.add.sprite(450, 250, 'car2' );
		v2 = game.add.sprite(350, 200, 'car2' );
		v3 = game.add.sprite(340, 150, 'car2' );
		v4 = game.add.sprite(220, 100, 'car2' );
		v5 = game.add.sprite(200, 50, 'car2' );
		v6 = game.add.sprite(450, 300, 'car2' );
		v7 = game.add.sprite(350, 350, 'car2' );
		v8 = game.add.sprite(340, 400, 'car2' );
		v9 = game.add.sprite(220, 450, 'car2' );
		v10 = game.add.sprite(200, 500, 'car2' );
		game.physics.enable(car, Phaser.Physics.ARCADE);
		game.physics.enable(v1, Phaser.Physics.ARCADE);
		game.physics.enable(v2, Phaser.Physics.ARCADE);
		game.physics.enable(v3, Phaser.Physics.ARCADE);
		game.physics.enable(v4, Phaser.Physics.ARCADE);
		game.physics.enable(v5, Phaser.Physics.ARCADE);
		game.physics.enable(v6, Phaser.Physics.ARCADE);
		game.physics.enable(v7, Phaser.Physics.ARCADE);
		game.physics.enable(v8, Phaser.Physics.ARCADE);
		game.physics.enable(v9, Phaser.Physics.ARCADE);
		game.physics.enable(v10, Phaser.Physics.ARCADE);

		
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
	
		r = game.rnd.integerInRange(1,4);
		if(r == 1)
		{
			car.y -= 50;
		}
		else if(r==2)
		{
			car.x += 50;
			car.y -= 50;
		}
		else if(r==4 && car.y < 500)
		{
			car.y += 50;
		}
		else
		{
			car.x -= 50;
			car.y -= 50;
		}
	}
	
    function update() {
		game.physics.arcade.collide(v1, car, collisionHandler, null, this);
		game.physics.arcade.collide(v2, car, collisionHandler, null, this);
		game.physics.arcade.collide(v3, car, collisionHandler, null, this);
		game.physics.arcade.collide(v4, car, collisionHandler, null, this);
		game.physics.arcade.collide(v5, car, collisionHandler, null, this);
		game.physics.arcade.collide(v6, car, collisionHandler, null, this);
		game.physics.arcade.collide(v7, car, collisionHandler, null, this);
		game.physics.arcade.collide(v8, car, collisionHandler, null, this);
		game.physics.arcade.collide(v9, car, collisionHandler, null, this);
		game.physics.arcade.collide(v10, car, collisionHandler, null, this);
		
		if(v1.x > 800)
		{
			v1.x = 0;
		}
		if(v2.x > 800)
		{
			v2.x = 0;
		}
		if(v3.x > 800)
		{
			v3.x = 0;
		}
		if(v4.x > 800)
		{
			v4.x = 0;
		}
		if(v5.x > 800)
		{
			v5.x = 0;
		}
		if(v6.x > 800)
		{
			v6.x = 0;
		}
		if(v7.x > 800)
		{
			v7.x = 0;
		}
		if(v8.x > 800)
		{
			v8.x = 0;
		}
		if(v9.x > 800)
		{
			v9.x = 0;
		}
		if(v10.x > 800)
		{
			v10.x = 0;
		}
		v1.x += 3;
		v2.x += 5;
		v3.x += 4;
		v4.x += 5;
		v5.x += 2;
		v6.x += 3;
		v7.x += 5;
		v8.x += 4;
		v9.x += 5;
		v10.x += 2;
		if(car.y <= 0)
			{
			text.setText("You win! Congrats! Click to restart");
			game.paused = true;
			game.input.onDown.addOnce(restart, this);
			}
		
    }
	function collisionHandler()	{
			game.paused = true;
			text.setText("You lose! Try again?");
			game.input.onDown.addOnce(restart, this);
	}
	
	function restart() {
		car.x = game.world.centerX;
		car.y = 550;
		
		text.setText("Press the button to proceed across the road.");
		game.paused = false;
	}
};
