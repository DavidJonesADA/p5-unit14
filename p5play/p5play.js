//global variables


//colors
var white_color = 253;
var red_color = '#963324'

//player
var playerPositionY = 650;
var playerRotation = -45;
var playerScale = 0.35

//asteroid
var asteroidX;
var asteroidY = -400;


//boostBar
var boostbar_length = 75;
var boostbar_width = 10;
var boostbar_positionY = 725;

//player1
var player1

var player1BoostBar;
var player1BoostBarUsing = false;
var player1BoostBarUsageMeter = 75;

var hearts1;
var hearts1Count = 3;

//player2
var player2;

var player2BoostBar;
var player2BoostBarUsing = false
var player2BoostBarUsageMeter = 75;

var hearts2;
var hearts2Count = 3;


var asteroids1;

var blockSpeed1 = 5;
var blockSpeed2 = 0.01;

var blocksExisting = 0
var blocksExisting2 = 0

var numb = 0;

var beginGame;

var userVariables;

var mainScreenButtons;

function preload() {
    rocketShip = loadImage("assets/rocketship.png")
    orangeSquare = loadImage("assets/orange-square.png")
    comet = loadImage("assets/comet.png")
    heart = loadImage("assets/heart.png")

    player1 = createSprite(width, height / 2);
    player1.addImage(rocketShip)
    player2 = createSprite(width, height / 2);
    player2.addImage(rocketShip);


}

function setup() {





    beginGame = false;
    userVariables = false;


    orangeSquare.resize(10, 1200);

    createCanvas(900, 1400);

    mainScreenButtons = new Group()

    starting()


}

function draw() {

    mainScreenButtons[0].mouseActive = true;

    background(28)

    r = Math.floor((Math.random() * 6) + 0);

    //draws all the sprites
    begin()

    if (mainScreenButtons[0].mouseIsOver && mainScreenButtons[0].visible == true && mouseIsPressed) {
        beginGame = true;
        userVariables = true;
        for (var i = 0; i < 3; i++) {
            mainScreenButtons[i].visible = false;
        }
    }


       player1.debug = mouseIsPressed;
    player2.debug = mouseIsPressed;


  drawSprites();
}

function starting() {

    var mainScreenButtonY = 250
    for (var i = 0; i < 3; i++) {
        var button = createSprite(width / 2, mainScreenButtonY, 200, 100);
        mainScreenButtons.add(button);
        mainScreenButtonY += 150



    }




}

function begin() {

    if (beginGame) {
        asteroids1 = new Group();

        asteroids2 = new Group();

        hearts1 = new Group();

        hearts2 = new Group();

        hearts();

        blocks()
        blocks2();

        borderShape = createSprite(450, 375);
        borderShape.addImage(orangeSquare);
        borderShape.height = 900;

        //player1
        player1.position.x = 225;
        player1.position.y = playerPositionY;
        player1.rotation = -45
        player1.scale = 0.35

        player1BoostBar = createSprite(width, height / 2, boostbar_length, boostbar_width)
        player1BoostBar.position.x = 60
        player1BoostBar.position.y = boostbar_positionY;
        player1BoostBar.shapeColor = color(white_color);
        player1.setCollider("rectangle", 0, 0, 75, 75);



        //player2
        player2.rotation = -45;
        player2.scale = 0.35;
        player2.position.x = 675;
        player2.position.y = playerPositionY;

        player2BoostBar = createSprite(width, height / 2, boostbar_length, boostbar_width)
        player2BoostBar.position.x = 840
        player2BoostBar.position.y = boostbar_positionY;
        player2BoostBar.shapeColor = color(white_color);
        player2.setCollider("rectangle", 0, 0, 75, 75);
        beginGame = false;
    }

    if (userVariables) {
        collisionDetection()

        playerMovement()
        boostBar()

        asteroidMovement()
    }

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
        player1.position.y -= 8;
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

    if (asteroids1.overlap(player1)) {
        hearts1Count -= 1;
        hearts1.removeSprites();
        asteroids1.removeSprites();
        blocksExisting = 0;
        blocks();
        hearts();
    }

    if (asteroids2.overlap(player2)) {
        hearts2Count -= 1;
        hearts2.removeSprites();
        asteroids2.removeSprites();
        blocksExisting = 0;
        blocks2();
        hearts();
    }


    player1.collide(borderShape)
    player2.collide(borderShape)


}

function boostBar() {

    //player1
    player1BoostBar.width = player1BoostBarUsageMeter

    if (player1BoostBarUsageMeter < 75) {
        player1BoostBarUsageMeter += 0.2;
    }


    if (player1BoostBarUsageMeter <= 0) {
        player1BoostBarUsing = true;
        player1BoostBar.shapeColor = color(red_color)

    }

    if (player1BoostBarUsageMeter >= 75) {
        player1BoostBarUsing = false;
        player1BoostBar.shapeColor = color(white_color)
    }

    //player2

    player2BoostBar.width = player2BoostBarUsageMeter


    if (player2BoostBarUsageMeter < 75) {
        player2BoostBarUsageMeter += 0.2
    }


    if (player2BoostBarUsageMeter <= 0) {
        player2BoostBarUsing = true;
        player2BoostBar.shapeColor = color(red_color)

    }
    if (player2BoostBarUsageMeter >= 75) {
        player2BoostBarUsing = false;
        player2BoostBar.shapeColor = color(white_color)
    }
}

function blocks() {


    asteroidY = -850;
    var b = 6;
    asteroidX = 40;


    if (blocksExisting === 0) {
        for (var j = 0; j < 3; j++) {
            var check = 0;
            r = Math.floor((Math.random() * 6) + 0);
            numb = r;
            for (var i = 0; i < 6; i++) {
                var c = createSprite(asteroidX, asteroidY + (random(-25, 25)));
                if (check == numb) {
                    c.remove();
                    check++
                } else {
                    check++
                }
                c.addImage(comet);
                c.scale = 0.25;
                asteroids1.add(c);
                asteroidX += 60;
            }
            asteroidX = 40;
            asteroidY += 350;


        }
    }
}

function blocks2() {

    var b = 6;
    asteroidY = -850;
    asteroidX = 500;


    if (blocksExisting2 === 0) {
        for (var j = 0; j < 3; j++) {
            var check = 0;
            r = Math.floor((Math.random() * 6) + 0);
            numb = r;
            for (var i = 0; i < 6; i++) {
                var c = createSprite(asteroidX, asteroidY + (random(-25, 25)));
                if (check == numb) {
                    c.remove()
                    check++
                } else {
                    check++
                }
                c.addImage(comet);
                c.scale = 0.25;
                asteroids2.add(c);
                asteroidX += 60;
            }
            asteroidX = 500;
            asteroidY += 350;


        }
    }
}

function asteroidMovement(c) {
    //asteroid 1

    for (var i = 0; i < asteroids1.length; i++) {
        asteroids1[i].position.y += 5;
        if (asteroids1[i].position.y > 950) {

            asteroids1[i].remove(c);
            if (asteroids1.length === 12) {
                blocksExisting = 0
                blocks()
            }


        }
    }



    for (var i = 0; i < asteroids2.length; i++) {
        asteroids2[i].position.y += 5;
        if (asteroids2[i].position.y > 950) {

            asteroids2[i].remove(c);
            if (asteroids2.length === 12) {
                blocksExisting2 = 0
                blocks2()
            }

        }

    }
}


function hearts() {
    for (var i = 0; i < hearts1Count; i++) {
        var h = createSprite(((i + 375 + i * 20)));
        h.addImage(heart);
        h.scale = 0.09;
        h.position.y = 710;
        hearts1.add(h);
    }

    if (hearts1Count <= 0) {
        //        endScreen()
    }


    for (var i = 0; i < hearts2Count; i++) {
        var h = createSprite(((i + 485 + i * 20)));
        h.addImage(heart);
        h.scale = 0.09;
        h.position.y = 710;
        hearts2.add(h);

    }

    if (hearts2Count <= 0) {
        //        endScreen();
    }
}

function endScreen() {
    background(150)
    textAlign(CENTER);
    text('GAME OVER', width / 2, height / 2)
    text("SCORE = " + score, width / 2, height / 2 + 20)
    text('click to play again', width / 2, height / 2 + 40);
}
