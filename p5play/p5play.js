//global variables


//colors
var white_color = 253;
var red_color = '#963324'

//player
var player_length = 40;
var player_width = 20;
var player_positionY = 650;

//boostBar
var boostbar_length = 75;
var boostbar_width = 10;
var boostbar_positionY = 725;

//player1
var player1

var player1BoostBar;
var player1BoostBarUsing = false;
var player1BoostBarUsageMeter = 75;

//player2
var player2;

var player2BoostBar;
var player2BoostBarUsing = false
var player2BoostBarUsageMeter = 75;

let a

var asteroids1;

var blockSpeed1 = 0.1;
var blockSpeed2 = 0.1;

var blocksExisting = 0

var r = 0

var BRICK_W = 40;
var BRICK_H = 20;
var BRICK_MARGIN = 4;



function preload() {
    rocketShip = loadImage("assets/rocketship.png")
    orangeSquare = loadImage("assets/orange-square.png")
}

function setup() {


    orangeSquare.resize(10, 1200);

    createCanvas(900, 750);


    asteroids1 = new Group();

    asteroids2 = new Group();

    blocks()

    borderShape = createSprite(450, 375);
    borderShape.addImage(orangeSquare);
    borderShape.height = 900;

    //player1
    player1 = createSprite(width, height / 2);
    player1.addImage(rocketShip)
    player1.position.x = 225;
    player1.position.y = player_positionY;
    player1.rotation = -45
    player1.scale = 0.35

    player1BoostBar = createSprite(width, height / 2, boostbar_length, boostbar_width)
    player1BoostBar.position.x = 60
    player1BoostBar.position.y = boostbar_positionY;
    player1BoostBar.shapeColor = color(white_color);



    //player2
    player2 = createSprite(width, height / 2);
    player2.addImage(rocketShip);
    player2.rotation = -45;
    player2.scale = 0.35;
    player2.position.x = 675;
    player2.position.y = player_positionY;

    player2BoostBar = createSprite(width, height / 2, boostbar_length, boostbar_width)
    player2BoostBar.position.x = 840
    player2BoostBar.position.y = boostbar_positionY;
    player2BoostBar.shapeColor = color(white_color);

}

function draw(c) {

    r = Math.floor((Math.random() * 6) + 0);



    player1.collide(borderShape)
    player2.collide(borderShape)

    collisionDetection()
    background(28)
    playerMovement()
    boostBar()

    asteroidMovement()
    drawSprites(); //draws all the sprites
    blocksExisting++
}

function playerMovement() {

    //player 1

    if (keyIsDown(65)) {
        player1.position.x -= 5;
    }

    if (keyIsDown(68)) {
        player1.position.x += 5;
    }

    if (keyIsDown(87) && !player1BoostBarUsing) {
        blockSpeed1 += 0.01
        player1BoostBarUsageMeter -= 2

    }

    if (player1.position.y < 650) {
        player1.position.y += 5;
    }

    //player 2

    if (keyIsDown(37)) {
        player2.position.x -= 5;
    }

    if (keyIsDown(39)) {
        player2.position.x += 5;
    }

    if (keyIsDown(38) && !player2BoostBarUsing) {
        player2.position.y -= 8;
        player2BoostBarUsageMeter -= 2

    }

    if (player2.position.y < 650) {
        player2.position.y += 5;
    }




}

function collisionDetection() {
    if (player1.position.x <= 40) {
        player1.position.x = 40
    }

    if (player2.position.x >= width - 20) {
        player2.position.x = width - 20
    }
}

function boostBar() {

    //player1
    player1BoostBar.width = player1BoostBarUsageMeter

    if (player1BoostBarUsageMeter < 75) {
        player1BoostBarUsageMeter += 1
    }


    if (player1BoostBarUsageMeter <= 0) {
        player1BoostBarUsing = true;
        player1BoostBar.shapeColor = color(red_color)

    }

    if (player1BoostBarUsageMeter === 75) {
        player1BoostBarUsing = false;
        player1BoostBar.shapeColor = color(white_color)
    }

    //player2

    player2BoostBar.width = player2BoostBarUsageMeter


    if (player2BoostBarUsageMeter < 75) {
        player2BoostBarUsageMeter += 1
    }


    if (player2BoostBarUsageMeter <= 0) {
        player2BoostBarUsing = true;
        player2BoostBar.shapeColor = color(red_color)

    }
    if (player2BoostBarUsageMeter === 75) {
        player2BoostBarUsing = false;
        player2BoostBar.shapeColor = color(white_color)
    }
}

function blocks() {

    if (blocksExisting === 0) {
        for (var i = 0; i < 6; i++) {
            var c = createSprite((i + 25 + i * 75), 0, 25, 25);
            c.shapeColor = color(random(200, 255));
            asteroids1.add(c);
        }
    }

    if (blocksExisting === 0) {
        for (var i = 0; i < 6; i++) {
            var c = createSprite((i + 485 + i * 75), 0, 25, 25);
            c.shapeColor = color(random(200, 255));
            asteroids2.add(c);
        }
    }
}

function asteroidMovement(c) {
    //asteroid 1

    for (var i = 0; i < asteroids1.length; i++) {
        asteroids1[i].position.y += asteroids1[i].width * blockSpeed1;
        if (asteroids1[i].position.y > 900) {
            asteroids1[i].position.y = 0;

            asteroids1.removeSprites()
            asteroids2.removeSprites()
            blocksExisting = 0
            blocks()
            blockSpeed = 0

        }
        if (asteroids1.length === 6) {
            asteroids1[i].position.y = 0;
        }
    }

    if (asteroids1.length == 6) {
        asteroids1[r].remove(c);
        console.log(r)
    }

    //asteroid 2

    for (var i = 0; i < asteroids2.length; i++) {
        asteroids2[i].position.y += asteroids2[i].width * blockSpeed2;

        if (asteroids2.length === 6) {
            asteroids2[i].position.y = 0;
        }
    }

    if (asteroids2.length === 6) {
        asteroids2[r].remove(c)
        console.log(r)
    }
}
