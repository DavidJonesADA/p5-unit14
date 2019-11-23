//global variables


//colors
var white_color = 253;
var black_color = 20;
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

var asteroidSpeed1;


var player1BoostBar;
var player1BoostBarUsing = false;
var player1BoostBarUsageMeter = 75;

var player1Score = 10;

var hearts1;
var hearts1Count = 3;

var earth1

//player2
var player2;

var asteroidSpeed2;

var player2BoostBar;
var player2BoostBarUsing = false
var player2BoostBarUsageMeter = 75;

var player2Score = 10;

var hearts2;
var hearts2Count = 3;

var earth2;

var asteroids1;



var blocksExisting = 0
var blocksExisting2 = 0

var numb = 0;

var beginGame;

var userVariables;

var mainScreenButtons;


var difficultyButtons;

var selectedSprite;

var soundPlayed1 = false;
var soundPlayed2 = false;
var soundPlayed3 = false;
var soundPlayed4 = false;

var menuHover;

var difficultyScreen = false;

var selection1 = false;
var selection2 = false;
var selection3 = false;

var difficultyMultiplier = 1;


var song;
var songs = ['MenuMusic.wav', 'PlayingMusic1.mp3', 'PlayingMusic2.mp3', 'PlayingMusic3.mp3'];
var currentSong = 0;

function preload() {
    rocketShip = loadImage("assets/rocketship.png")
    orangeSquare = loadImage("assets/orange-square.png")
    comet = loadImage("assets/comet.png")
    heart = loadImage("assets/heart.png")
    earth = loadImage("assets/earth.png")
    navigator = loadImage("assets/navigation.png");


    explosionAnimation = loadAnimation("assets/explosion/fire1.png", "assets/explosion/fire2.png")

    menuMusic = loadSound('assets/music/' + songs[0])
    song1 = loadSound('assets/music/' + songs[1]);
    song2 = loadSound('assets/music/' + songs[2]);
    song3 = loadSound('assets/music/' + songs[3]);
    menuHover = loadSound("assets/MenuHover.wav")


    player1 = createSprite(width, height / 2);
    player1.addImage(rocketShip);
    player2 = createSprite(width, height / 2);
    player2.addImage(rocketShip);
    player1.visible = false;
    player2.visible = false;



}

function setup() {


    music = [song1, song2, song3]


    beginGame = false;
    userVariables = false;


    orangeSquare.resize(10, 1200);

    createCanvas(900, 760);

    mainScreenButtons = new Group()
    difficultyButtons = new Group()

    starting()


}

function draw() {




    background(28)

    cursor('assets/navigation.png');

    textFont("Tomorrow");



    textSize(32);






    r = Math.floor((Math.random() * 6) + 0);

    //draws all the sprites
    begin()









    drawSprites();
    menuScreen();


}

function starting() {


    menuMusic.loop();
    menuMusic.setVolume(0.1)
    var mainScreenButtonY = 250
    for (var i = 0; i < 3; i++) {
        var button = createSprite(width / 2, mainScreenButtonY, 200, 100);
        button.mouseActive = true;
        mainScreenButtons.add(button);
        mainScreenButtonY += 150



    }


}

function menuScreen() {



    if (mainScreenButtons[0].visible == true) {


        textAlign(CENTER);
        fill(white_color)
        text("Main Menu", width / 2, 100);
        fill(black_color)
        text("Change \n Difficulty", width / 2, 390);
        text("How To \n Play", width / 2, 540);
        text("Play Game", width / 2, 260)


        //--------------------------------------------------------------------- Play Game

        if (mainScreenButtons[0].mouseIsOver) {
            text("Play Game", width / 2, 260)

            if (!soundPlayed1) {
                menuHover.play();
                soundPlayed1 = true;

            }


            mainScreenButtons[0].shapeColor = color(230);
            mainScreenButtons[0].width = 210;

            if (mouseIsPressed) {
                beginGame = true;
                userVariables = true;
                menuMusic.stop()
                for (var i = 0; i < 3; i++) {
                    mainScreenButtons[i].visible = false;

                }
            }



        } else {

            if (soundPlayed1) {
                soundPlayed1 = false;
            }

            mainScreenButtons[0].shapeColor = color('white')
            mainScreenButtons[0].width = 200;


        }

        //--------------------------------------------------------------------- Change Difficulty

        if (mainScreenButtons[1].mouseIsOver) {

            if (!soundPlayed2) {
                menuHover.play();
                soundPlayed2 = true;

            }

            mainScreenButtons[1].shapeColor = color(230);
            mainScreenButtons[1].width = 210;

            if (mouseIsPressed) {
                difficultyScreenSetup()
                difficultyScreen = true;
                for (var i = 0; i < 3; i++) {
                    mainScreenButtons[i].visible = false;
                }
            }
        } else {

            if (soundPlayed2) {
                soundPlayed2 = false;
            }


            mainScreenButtons[1].shapeColor = color('white')
            mainScreenButtons[1].width = 200;

        }


        //--------------------------------------------------------------------- How To Play

        if (mainScreenButtons[2].mouseIsOver) {


            if (!soundPlayed3) {
                menuHover.play();
                soundPlayed3 = true

            }

            mainScreenButtons[2].shapeColor = color(230);
            mainScreenButtons[2].width = 210;

            if (mouseIsPressed) {
                beginGame = true;
                userVariables = true;
                for (var i = 0; i < 3; i++) {
                    mainScreenButtons[i].visible = false;
                }
            }


        } else {

            if (soundPlayed3) {
                soundPlayed3 = false;
            }

            mainScreenButtons[2].shapeColor = color('white');
            mainScreenButtons[2].width = 200;

        }

        //---------------------------------------------------------------------

    }



    if (difficultyScreen) {


        textAlign(CENTER)
        fill(white_color)
        text("Difficulty Menu", width / 2, 100);
        fill(black_color)
        text("Easy", width / 2, 260);
        text("Normal", width / 2, 410);
        text("Hard", width / 2, 560)
        text("Back", 120, 710)







        //--------------------------------------------------------------------- Easy Difficulty

        if (difficultyButtons[0].mouseIsOver) {

            if (!soundPlayed1) {
                menuHover.play();
                soundPlayed1 = true;

            }


            if (!selection1) {
                difficultyButtons[0].shapeColor = color(230);
                difficultyButtons[0].width = 210;
            }


            if (mouseIsPressed) {
                difficultyMultiplier = 0.5;
                selection1 = true;
                selection2 = false;
                selection3 = false;
            }
        } else {

            if (soundPlayed1) {
                soundPlayed1 = false;
            }

            if (!selection1) {
                difficultyButtons[0].shapeColor = color('white')
                difficultyButtons[0].width = 200;
            } else {


                difficultyButtons[0].shapeColor = color(red_color)
            }


        }

        //--------------------------------------------------------------------- Normal Difficulty

        if (difficultyButtons[1].mouseIsOver) {

            if (!soundPlayed2) {
                menuHover.play();
                soundPlayed2 = true;

            }


            if (!selection2) {
                difficultyButtons[1].shapeColor = color(230);
                difficultyButtons[1].width = 210;
            }


            if (mouseIsPressed) {
                difficultyMultiplier = 1;
                selection2 = true;
                selection3 = false;
                selection1 = false;
            }
        } else {

            if (soundPlayed2) {
                soundPlayed2 = false;
            }

            if (!selection2) {
                difficultyButtons[1].shapeColor = color('white')
                difficultyButtons[1].width = 200;
            } else {

                difficultyButtons[1].shapeColor = color(red_color)
            }


        }

        //--------------------------------------------------------------------- Hard Difficulty

        if (difficultyButtons[2].mouseIsOver) {

            if (!soundPlayed3) {
                menuHover.play();
                soundPlayed3 = true;

            }

            if (!selection3) {
                difficultyButtons[2].shapeColor = color(230);
                difficultyButtons[2].width = 210;
            }



            if (mouseIsPressed) {
                difficultyMultiplier = 1.5;
                selection3 = true;
                selection1 = false;
                selection2 = false;
            }
        } else {

            if (soundPlayed3) {
                soundPlayed3 = false;
            }

            if (!selection3) {
                difficultyButtons[2].shapeColor = color('white')
                difficultyButtons[2].width = 200;
            } else {
                difficultyButtons[2].shapeColor = color(red_color)
            }


        }


        //--------------------------------------------------------------------- Back Difficulty

        if (difficultyButtons[3].mouseIsOver) {

            if (!soundPlayed4) {
                menuHover.play();
                soundPlayed4 = true;

            }

            difficultyButtons[3].shapeColor = color(230);
            difficultyButtons[3].width = 210;

            if (mouseIsPressed) {
                for (var i = 0; i < 3; i++) {
                    mainScreenButtons[i].visible = true;
                }

                difficultyScreen = false;
                difficultyButtons.removeSprites()
            }
        } else {

            if (soundPlayed4) {
                soundPlayed4 = false;
            }


            difficultyButtons[3].shapeColor = color('white')
            difficultyButtons[3].width = 200;

        }



    }




}

function difficultyScreenSetup() {




    console.log("test")
    var difficultyButtonY = 250
    for (var i = 0; i < 4; i++) {
        var button = createSprite(width / 2, difficultyButtonY, 200, 100);
        button.shapeColor = color(white_color);

        button.mouseActive = true;

        difficultyButtons.add(button);
        difficultyButtonY += 150

    }
    difficultyButtons[3].position.x = 120;




}



function begin() {

    if (beginGame) {


        currentSong = Math.floor((Math.random() * 2) + 0);
        console.log(currentSong)
        music[currentSong].play();
        music[currentSong].setVolume(0.1)


        player1Score = 15 * difficultyMultiplier;
        player2Score = 15 * difficultyMultiplier;

        player1.visible = true;
        player2.visible = true;

        asteroidSpeed1 = 5 * difficultyMultiplier;
        asteroidSpeed2 = 5 * difficultyMultiplier;

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
        player1.setCollider("rectangle", 0, 0, 125, 125);



        //player2
        player2.rotation = -45;
        player2.scale = 0.35;
        player2.position.x = 675;
        player2.position.y = playerPositionY;

        player2BoostBar = createSprite(width, height / 2, boostbar_length, boostbar_width)
        player2BoostBar.position.x = 840
        player2BoostBar.position.y = boostbar_positionY;
        player2BoostBar.shapeColor = color(white_color);
        player2.setCollider("rectangle", 0, 0, 125, 125);
        beginGame = false;
        earthSetup()
    }

    if (userVariables) {
        collisionDetection()

        playerMovement()
        boostBar()

        asteroidMovement()

        playerScore()

        earthMovemenet();

        player1.debug = mouseIsPressed;
        player2.debug = mouseIsPressed;





    }

}

function playerScore() {

    fill(white_color);
    text(int(player1Score) + " Lightyears to earth", 10, 40)
    text(int(player2Score) + " Lightyears to earth", width - 350, 40)

}

function playerMovement() {

    //player 1

    if (keyIsDown(65)) {
        player1.position.x -= 10;
    }

    if (keyIsDown(68)) {
        player1.position.x += 10;
    }

    if (keyIsDown(87) && !player1BoostBarUsing) {
        player1.position.y += 8;
        player1BoostBarUsageMeter -= 2

    }

    if (player1.position.y > 650) {
        player1.position.y -= 5;
    }

    //player 2

    if (keyIsDown(37)) {
        player2.position.x -= 10;
    }

    if (keyIsDown(39)) {
        player2.position.x += 10;
    }

    if (keyIsDown(38) && !player2BoostBarUsing) {
        player2.position.y += 8;
        player2BoostBarUsageMeter -= 2

    }

    if (player2.position.y > 650) {
        player2.position.y -= 5;
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
        player1.overlap(asteroids1, getCollision1);

    }


    if (asteroids2.overlap(player2)) {
        player2.overlap(asteroids2, getCollision2);

    }


    if (player1.overlap(earth1)) {
        console.log("Player 1 has won!")
        asteroidSpeed1 = 0
    }

    if (player2.overlap(earth2)) {
        console.log("Player 2 has won!")
        asteroidSpeed2 = 0
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



function earthSetup() {
    earth1 = createSprite(225, -1500);
    earth1.addImage(earth);
    earth1.scale = 0.5;
    earth1.setCollider("rectangle", 0, 0, 900, 75);


    earth2 = createSprite(675, -1500);
    earth2.addImage(earth);
    earth2.scale = 0.5;
    earth2.setCollider("rectangle", 0, 0, 900, 75);

}


function earthMovemenet() {


    if (player1Score <= 0) {
        player1Score = 0
        earth1.position.y += asteroidSpeed1
    }

    if (player2Score <= 0) {
        player2Score = 0
        earth2.position.y += asteroidSpeed2
    }

}







function blocks() {


    asteroidY = -850;
    var b = 6;
    asteroidX = 40;


    if (blocksExisting === 0) {
        for (var j = 0; j < 3; j++) {
            var check = 0;
            r = Math.floor((Math.random() * 4) + 0);
            numb = r;
            for (var i = 0; i < 4; i++) {
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
                asteroidX += 120;
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
            r = Math.floor((Math.random() * 4) + 0);
            numb = r;
            for (var i = 0; i < 4; i++) {
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
                asteroidX += 120;
            }
            asteroidX = 500;
            asteroidY += 350;


        }
    }
}

function asteroidMovement(c) {
    //asteroid 1

    for (var i = 0; i < asteroids1.length; i++) {
        asteroids1[i].position.y += asteroidSpeed1;
        if (asteroids1[i].position.y > 950) {

            asteroids1[i].remove(c);
            if (asteroids1.length === 8 && earth1.position.y < -500) {
                blocksExisting = 0
                asteroidSpeed1 += 0.2
                blocks()
                player1Score--
            }
            if (asteroids1.length === 0 && earth1.position.y < -500) {
                blocksExisting = 0
                asteroidSpeed1 += 0.2
                blocks()
            }


        }
    }



    for (var i = 0; i < asteroids2.length; i++) {
        asteroids2[i].position.y += asteroidSpeed2;
        if (asteroids2[i].position.y > 950) {

            asteroids2[i].remove(c);
            if (asteroids2.length === 8 && earth2.position.y < -500) {
                blocksExisting2 = 0;
                asteroidSpeed2 += 0.2
                blocks2()
                player2Score--
            }

            if (asteroids2.length === 0 && earth2.position.y < -500) {
                blocksExisting2 = 0;
                asteroidSpeed2 += 0.2
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


function getCollision1(player1, c) {
    if (c.visible) {
        createExplosion(player1)
        c.visible = false;
        asteroidSpeed1 = 5 * difficultyMultiplier;
        hearts1Count -= 1;
        hearts1.removeSprites();
        blocksExisting = 0;
        hearts();
    }

}

function getCollision2(player2, c) {
    if (c.visible) {
        c.remove();
        createExplosion(player2)
        asteroidSpeed2 = 5 * difficultyMultiplier;
        hearts2Count -= 1;
        hearts2.removeSprites();
        blocksExisting = 0;
        hearts();
    }

}

function createExplosion(player) {

    explosion = new Group();
    explosionAnimation.frameDelay = 30


    for (var i = 0; i < 10; i++) {
        var ex = createSprite(500, 20, 20, 20)
        ex.width = 20;

        ex.addAnimation("default", explosionAnimation)

        ex.position.x = player.position.x
        ex.position.y = player1.position.y


        explosion.add(ex);
        explosion[i].life = 40;
    }

    for (var j = 0; j < 10; j++) {

        explosion[j].velocity.x = random(-5, 5)
        explosion[j].velocity.y = random(-5, 5);
        explosion[j].rotation = random(-180, 180)
        explosion[j].friction = 0;


    }

}
