
var game = new Phaser.Game(640, 360, Phaser.AUTO, 'gameDiv', {preload: preload, create: create, update: update});

var player;

function preload() {
    game.load.image('snake', 'snake.png');
    game.load.image('gnome', 'gnome.png');
    game.load.image('cat', 'cat.png');
    game.load.image('crocodile', 'crocodile.png');
    game.load.image('prince', 'prince.png');
    game.load.image('unicorn', 'unicorn.png');
    game.load.image('monster', 'monster.png');
}

function create() {
    game.stage.backgroundColor = getRandomColor();
    this.sprites = game.add.group();
    var style = {font: "32px Arial", fill: "#ffffff", align: "center"}
    var ySpacing = game.world.width / 8;
    
    var q1 = game.add.text(ySpacing*1, game.world.height-48, 'Q1', style)
    q1.inputEnabled = true;
    q1.events.onInputDown.add(problem1, this);
    q1.anchor.setTo(0.5);
    
    var q2 = game.add.text(ySpacing*2, game.world.height-48, 'Q2', style)
    q2.inputEnabled = true;
    q2.events.onInputDown.add(problem2, this);
    q2.anchor.setTo(0.5);

    var q3 = game.add.text(ySpacing*3, game.world.height-48, 'Q3', style)
    q3.inputEnabled = true;
    q3.events.onInputDown.add(problem3, this);
    q3.anchor.setTo(0.5);
    
    var q4 = game.add.text(ySpacing*4, game.world.height-48, 'Q4', style)
    q4.inputEnabled = true;
    q4.events.onInputDown.add(problem4, this);
    q4.anchor.setTo(0.5);
    
    var q5 = game.add.text(ySpacing*5, game.world.height-48, 'Q5', style)
    q5.inputEnabled = true;
    q5.events.onInputDown.add(problem5, this);
    q5.anchor.setTo(0.5);
    
    var q6 = game.add.text(ySpacing*6, game.world.height-48, 'Q6', style)
    q6.inputEnabled = true;
    q6.events.onInputDown.add(problem6, this);
    q6.anchor.setTo(0.5);
    
    var clearScreen = game.add.text(ySpacing*7, game.world.height-48, 'clear', style)
    clearScreen.inputEnabled = true;
    clearScreen.events.onInputDown.add(function () { this.sprites.removeAll(true);}, this);
    clearScreen.anchor.setTo(0.5);
}

function update() {
    
}

function problem1() {
    player = game.add.sprite(game.world.randomX, game.rnd.integerInRange(20, game.world.height-100), 'snake');
    player.anchor.setTo(0.5, 0.5);
    
    player.inputEnabled = true;
    player.events.onInputOver.add(flip);
    this.sprites.add(player);
}

function problem2() {
    player = game.add.sprite(game.world.randomX, game.rnd.integerInRange(20, game.world.height-100), 'crocodile');
    player.anchor.setTo(0.5, 0.5);
    
    player.inputEnabled = true;
    player.events.onInputDown.add(grow);
    this.sprites.add(player);
}

function problem3() {
    player = game.add.sprite(game.world.randomX, game.rnd.integerInRange(20, game.world.height-100), 'cat');
    player.anchor.setTo(0.5, 0.5);
    
    player.inputEnabled = true;
    player.events.onInputOut.add(spin);
    this.sprites.add(player);
}

function problem4() {
    player = game.add.sprite(game.world.randomX, game.rnd.integerInRange(20, game.world.height-100), 'prince');
    player.anchor.setTo(0.5, 0.5);
    
    player.inputEnabled = true;
    player.events.onInputDown.add(shrink);
    player.events.onInputUp.add(grow);
    this.sprites.add(player);
}

function problem5() {
    player = game.add.sprite(game.world.randomX, game.rnd.integerInRange(20, game.world.height-100), 'unicorn');
    player.anchor.setTo(0.5, 0.5);
    
    player.inputEnabled = true;
    player.events.onInputOver.add(spin);
    player.events.onInputOut.add(flip);
    this.sprites.add(player);
}

function problem6() {
    player = game.add.sprite(game.world.randomX, game.rnd.integerInRange(20, game.world.height-100), 'monster');
    player.anchor.setTo(0.5, 0.5);
    
    player.inputEnabled = true;
    player.events.onInputOver.add(grow);
    player.events.onInputOut.add(shrink);
    player.events.onInputDown.add(flip);
    player.events.onInputUp.add(spin);
    this.sprites.add(player);
}


function grow(sprite) {
    game.add.tween(sprite.scale).to({x:2, y:2}, 200).start();
}

function flip(sprite) {
    var yScale = -1
    if(sprite.scale.y < 0) {
        yScale=1;
    }
    game.add.tween(sprite.scale).to({y:yScale}, 200).start();
}

function spin(sprite) {
    game.add.tween(sprite).to({angle:360}, 200).start();
}

function shrink(sprite) {
    game.add.tween(sprite.scale).to({x:0.5, y:0.5}, 200).start();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
