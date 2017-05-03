var gameOptions = {
    gameWidth: 750,
    gameHeight: 1334,
    cardSheetWidth: 334,
    cardSheetHeight: 440,
    cardScale: 0.8
}
window.onload = function() {
    "use strict";
    var game = new Phaser.Game( gameOptions.gameWidth, gameOptions.gameHeight, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    function preload() {
		for(var i = 0; i < 10; i++){
            game.load.spritesheet("cards" + i, "cards" + i + ".png", gameOptions.cardSheetWidth, gameOptions.cardSheetHeight);
        }
		//game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //game.scale.pageAlignHorizontally = true;
        //game.scale.pageAlignVertically = true;
		game.load.audio( 'music', 'What I Need.mp3');

    }
    
	var leftKey;
	var rightKey;
	var text;
	var text2;
	var deck;
	var cardsInGame;	
    var style;
	var sound;
    
    function create() {
	    game.stage.backgroundColor = "#4488AA";
		sound = game.add.audio('music');
		sound.play();
	    deck = Phaser.ArrayUtils.numberArray(0, 51);
        Phaser.ArrayUtils.shuffle(deck);
		cardsInGame = [makeCard(0), makeCard(1)];
        var tween = game.add.tween(cardsInGame[0]).to({
            x: 0+200
        }, 500, Phaser.Easing.Cubic.Out, true);
		style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
		text = game.add.text( 0, 15, "Hit Left If you think you have the lowest card.", style );
		text2 = game.add.text( 0, 40, "Hit Right if you think you have the higher.", style );
		leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    }
    
    function update() {
        if(leftKey.isDown)
		{
			var tween = game.add.tween(cardsInGame[1]).to({
            x: game.width/ 2 + 200
        }, 0, Phaser.Easing.Cubic.Out, true);
		if(cardsInGame[1] > cardsInGame[0]){
			text.setText("You win!");
		}
		else{
			text.setText("You lose try again?");
		}
		game.input.onDown.addOnce(restart, this);
		}
		if(rightKey.isDown)
		{
			var tween = game.add.tween(cardsInGame[1]).to({
            x: game.width / 2 + 200
        }, 0, Phaser.Easing.Cubic.Out, true);
		if(cardsInGame[1] < cardsInGame[0]){
			text.setText("You lose try again?");
		}
		else{
			text.setText("You win!");
		}
		game.input.onDown.addOnce(restart, this);
		}
    }
	function makeCard(cardIndex) {
        var card = game.add.sprite(gameOptions.cardSheetWidth * gameOptions.cardScale / -2, game.height / 2, "cards0");
        card.anchor.set(0.5);
        card.scale.set(gameOptions.cardScale);
        card.loadTexture("cards" + getCardTexture(deck[cardIndex]));
        card.frame = getCardFrame(deck[cardIndex]);
        return card;
    }
    function getCardTexture(cardValue){
        return Math.floor((cardValue % 13) / 3) + 5 * Math.floor(cardValue / 26);
    }
    function getCardFrame(cardValue){
        return (cardValue % 13) % 3 + 3 * (Math.floor(cardValue / 13) % 2);
    }
	function restart() {
		game.world.removeAll();
		text = game.add.text( 0, 15, "Hit Left If you think you have the lowest card.", style );
		text2 = game.add.text( 0, 40, "Hit Right if you think you have the higher.", style );
		Phaser.ArrayUtils.shuffle(deck);
		cardsInGame = [makeCard(0), makeCard(1)];
        var tween = game.add.tween(cardsInGame[0]).to({
            x: 0+200
        }, 500, Phaser.Easing.Cubic.Out, true);
		game.paused = false;
	}
};
