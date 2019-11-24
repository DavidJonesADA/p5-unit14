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
var selection2 = true;
var selection3 = false;

var difficultyMultiplier = 1;

var howToPlayScreen = false;

var key1 = 'w';
var key2 = 'a';
var key3 = 's';
var key4 = 'd';

var backButton

var cycle = true;
var cycleN = 0

var titleScreenImages;

var startButton;

var titleScreenActive = true;

var clickedMouse = false;

var mouseTimer = 0;

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
    menuHover = loadSound("assets/MenuHover.wav");
    click = loadSound("assets/music/zipclick.mp3")


    player1 = createSprite(width, height / 2);
    player1.addImage(rocketShip);
    player2 = createSprite(width, height / 2);
    player2.addImage(rocketShip);
    player1.visible = false;
    player2.visible = false;



}

function setup() {


    music = [song1, song2, song3]


    cursor('assets/navigation.png');

    beginGame = false;
    userVariables = false;


    mouseSprite = createSprite(0, 0, 0, 0)
    mouseSprite.setCollider("circle", 0, 0, 125);


    orangeSquare.resize(10, 1200);

    createCanvas(900, 760);

    mainScreenButtons = new Group()
    difficultyButtons = new Group()

    titleScreenImages = new Group();

    menuScreenSetup()


}


function draw() {

    background(28)

    mouseTimeout()


    //draws all the sprites
    launchGame()
    gameFunctions()



    drawSprites();
    menuScreen();


}

function menuScreenSetup() {

    for (var i = 0; i < 30; i++) {
        var asteroidEmoji = createSprite(0, 0);
        asteroidEmoji.addImage(comet);
        asteroidEmoji.scale = random(0.1, 0.3)
        asteroidEmoji.position.x = random(60, 840);
        asteroidEmoji.position.y = random(60, 700);

        asteroidEmoji.collide(asteroidEmoji)
        titleScreenImages.add(asteroidEmoji);

    }

    var mainScreenButtonY = 250
    for (var i = 0; i < 3; i++) {
        var button = createSprite(width / 2, mainScreenButtonY, 200, 100);
        button.mouseActive = true;
        button.visible = false;
        mainScreenButtons.add(button);
        mainScreenButtonY += 150


    }

    startButton = createSprite(width / 2, 400, 200, 100);
    startButton.shapeColor = color(white_color);
    startButton.mouseActive = true;

    menuMusic.loop();
    menuMusic.setVolume(0.1)


}

function menuScreen() {



    if (titleScreenActive) {

        mouseSprite.position.x = mouseX;
        mouseSprite.position.y = mouseY;

        mouseSprite.displace(titleScreenImages)
        if (cycle) {
            cycleN += 0.1;
            if (cycleN >= 10) {
                cycle = false;
            }
        } else {
            cycleN -= 0.1
            if (cycleN <= 0) {
                cycle = true;
            }
        }

        createText("VOID", width / 2 + 10, 210 + cycleN, 140, CENTER, black_color);

        createText("VOID", width / 2, 200 + cycleN, 140, CENTER, white_color)

        createText("Enter \n The Void", width / 2, 390, 32, CENTER, black_color)


        if (startButton.mouseIsOver) {

            if (!soundPlayed1) {
                menuHover.play();
                soundPlayed1 = true;

            }


            buttonAttributes(startButton, 230, 210)

            if (clickedMouse) {
                click.play()
                clickedMouse = false
                toggleMenuButtons(true)
                titleScreenActive = false;
                titleScreenImages.removeSprites()
                startButton.visible = false;
            }



        } else {

            if (soundPlayed1) {
                soundPlayed1 = false;
            }

            buttonAttributes(startButton, white_color)


        }
    }


    if (mainScreenButtons[0].visible == true) {



        createText("Main Menu", width / 2, 100);
        createText("Play Game", width / 2, 260, 32, CENTER, black_color)
        createText("Change \n Difficulty", width / 2, 390, 32, CENTER, black_color);
        createText("How To \n Play", width / 2, 540, 32, CENTER, black_color);



        //--------------------------------------------------------------------- Play Game

        if (mainScreenButtons[0].mouseIsOver) {

            if (!soundPlayed1) {
                menuHover.play();
                soundPlayed1 = true;

            }

            buttonAttributes(mainScreenButtons[0], 230, 210)

            if (clickedMouse) {
                click.play()
                clickedMouse = false
                beginGame = true;
                userVariables = true;
                menuMusic.stop()
                toggleMenuButtons(false)
            }



        } else {

            if (soundPlayed1) {
                soundPlayed1 = false;
            }

            buttonAttributes(mainScreenButtons[0], white_color, 200)


        }

        //--------------------------------------------------------------------- Change Difficulty

        if (mainScreenButtons[1].mouseIsOver) {

            if (!soundPlayed2) {
                menuHover.play();
                soundPlayed2 = true;

            }

            buttonAttributes(mainScreenButtons[1], 230, 210)

            if (clickedMouse) {
                click.play()
                clickedMouse = false
                backButtonSetup()
                difficultyScreenSetup()
                difficultyScreen = true;
                toggleMenuButtons(false)
            }
        } else {

            if (soundPlayed2) {
                soundPlayed2 = false;
            }


            buttonAttributes(mainScreenButtons[1], white_color)

        }


        //--------------------------------------------------------------------- How To Play

        if (mainScreenButtons[2].mouseIsOver) {


            if (!soundPlayed3) {
                menuHover.play();
                soundPlayed3 = true

            }

            buttonAttributes(mainScreenButtons[2], 230, 210)


            if (clickedMouse) {
                click.play()
                clickedMouse = false
                backButtonSetup()
                howToPlayScreen = true;
                toggleMenuButtons(false)
            }


        } else {

            if (soundPlayed3) {
                soundPlayed3 = false;
            }

            buttonAttributes(mainScreenButtons[2], white_color)

        }

        //---------------------------------------------------------------------

    }

    if (difficultyScreen) {



        createText("Difficulty Menu", width / 2, 100, 32, CENTER, white_color);

        createText("Easy", width / 2, 260, 32, CENTER, black_color);
        createText("Normal", width / 2, 410, 32, CENTER, black_color);
        createText("Hard", width / 2, 560, 32, CENTER, black_color);
        createText("Back", 120, 710, 32, CENTER, black_color);







        //--------------------------------------------------------------------- Easy Difficulty

        if (difficultyButtons[0].mouseIsOver) {

            if (!soundPlayed1) {
                menuHover.play();
                soundPlayed1 = true;

            }


            if (!selection1) {
                buttonAttributes(difficultyButtons[0], 230, 210)
            }


            if (clickedMouse) {
                click.play()
                clickedMouse = false;
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
                buttonAttributes(difficultyButtons[0], white_color)
            } else {


                buttonAttributes(difficultyButtons[0], red_color)
            }


        }

        //--------------------------------------------------------------------- Normal Difficulty


        if (difficultyButtons[1].mouseIsOver) {

            if (!soundPlayed2) {
                menuHover.play();
                soundPlayed2 = true;

            }


            if (!selection2) {
                buttonAttributes(difficultyButtons[1], 230, 210)
            }


            if (clickedMouse) {
                click.play()
                clickedMouse = false
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
                buttonAttributes(difficultyButtons[1], white_color)
            } else {

                buttonAttributes(difficultyButtons[1], red_color)
            }


        }

        //--------------------------------------------------------------------- Hard Difficulty

        if (difficultyButtons[2].mouseIsOver) {

            if (!soundPlayed3) {
                menuHover.play();
                soundPlayed3 = true;

            }

            if (!selection3) {
                buttonAttributes(difficultyButtons[2], 230, 210)
            }



            if (clickedMouse) {
                click.play()
                clickedMouse = false
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
                buttonAttributes(difficultyButtons[2], white_color)
            } else {
                buttonAttributes(difficultyButtons[2], red_color)
            }


        }


        //--------------------------------------------------------------------- Back

        if (backButton.mouseIsOver) {

            if (!soundPlayed4) {
                menuHover.play();
                soundPlayed4 = true;

            }

            buttonAttributes(backButton, 230, 210)

            if (clickedMouse) {
                click.play()
                clickedMouse = false
                toggleMenuButtons(true)

                difficultyScreen = false;
                difficultyButtons.removeSprites();
                backButton.remove()
            }
        } else {

            if (soundPlayed4) {
                soundPlayed4 = false;
            }


            buttonAttributes(backButton, white_color)

        }



    }

    if (howToPlayScreen) {

        if (backButton.mouseIsOver) {

            if (!soundPlayed1) {
                menuHover.play();
                soundPlayed1 = true;

            }

            buttonAttributes(backButton, 230, 210)

            if (clickedMouse) {
                click.play()
                clickedMouse = false
                toggleMenuButtons(true)


                backButton.remove();
                howToPlayScreen = false;
            }
        } else {

            if (soundPlayed4) {
                soundPlayed4 = false;
            }


            buttonAttributes(backButton, white_color)

        }

        if (cycle) {
            key1 = 'W';
            key2 = 'A';
            key3 = 'S';
            key4 = 'D';
            cycleN += 1
            if (cycleN >= 150) {
                cycle = false;
            }
        } else {
            key1 = '∧';
            key2 = '<';
            key3 = '∨';
            key4 = '>';
            cycleN -= 1
            if (cycleN <= 0) {
                cycle = true;
            }
        }


        //--------------------------------------------------------------------- Vertexes
        noFill()
        strokeWeight(5);
        stroke(white_color);

        beginShape() //--------------------------------------------------------------------- 1
        vertex(width / 2, height / 2 - 50);
        vertex(280, 230);
        vertex(235, 230);
        endShape()

        beginShape() //--------------------------------------------------------------------- 2
        vertex(width / 2 - 50, height / 2);
        vertex(280, 530);
        vertex(215, 530);
        endShape()

        beginShape() //--------------------------------------------------------------------- 3
        vertex(width / 2 - 10, height / 2);
        vertex(520, 490);
        vertex(545, 490);
        endShape()

        beginShape() //--------------------------------------------------------------------- 4
        vertex(width / 2 + 50, height / 2);
        vertex(630, 320);
        vertex(660, 320);
        endShape()






        //--------------------------------------------------------------------- Shapes
        noStroke();

        fill(white_color);

        createSquare(width / 2, height / 2, 50);

        createSquare(width / 2 + 50, height / 2, 50);

        createSquare(width / 2 - 50, height / 2, 50);

        createSquare(width / 2, height / 2 - 50, 50);

        fill(red_color);
        rect(800, 600, 55, 7)

        //--------------------------------------------------------------------- Images

        image(comet, 100, 30, comet.width / 2, comet.height / 2);
        image(heart, 500, -1, heart.width / 1.6, heart.height / 1.6)


        //--------------------------------------------------------------------- Text
        textSize(32);
        textAlign(CENTER);


        fill(black_color);
        text("Back", 120, 710);
        text(key1, width / 2, height / 2 - 35)
        text(key2, width / 2 - 50, height / 2 + 15)
        text(key3, width / 2, height / 2 + 15)
        text(key4, width / 2 + 50, height / 2 + 15);



        createText("These are asteroids, you want to \n avoid them to get to earth first! \n \n Your rocket will slow down \n if you collide with them.", 220, 50, 15, LEFT)

        createText("These are your health points, \n if your rocket hits an asteroid \n you will lose one health point! \n \n If you lose all your health \n points its game over!", 640, 50, 15, LEFT);

        createText("Pressing W/Up Arrow will \n allow your rocket to shoot \n a bullet to destroy obstacles!", 125, 230, 15, CENTER);
        createText("Pressing A/Left Arrow will \n move your rocket to the left!", 115, 530, 15, CENTER);
        createText("Pressing S/Down Arrow will \n slow down your rocket, \n giving you more time to dodge\n an asteroid. \n \n Watch your meter at the bottom \n if it goes red you have to wait \n for it to be refilled!", 655, 485, 15, CENTER);
        createText("Pressing D/Right Arrow will \n move your rocket to the right!", 780, 325, 15, CENTER);



    }


}

function toggleMenuButtons(visibility) {
    for (var i = 0; i < 3; i++) {
        mainScreenButtons[i].visible = visibility;
    }
}

function buttonAttributes(buttonName, buttonColor, buttonWidth = 200) {
    buttonName.shapeColor = color(buttonColor);
    buttonName.width = buttonWidth;
}


function createSquare(x, y, w) {
    square(x - w / 2, y - w / 2, w)
}

function createText(stringValue, x, y, wordSize = 32, alignment = CENTER, textColor = white_color, font = "Tomorrow") {
    textAlign(alignment);
    fill(textColor);
    textSize(wordSize);
    textFont(font);
    text(stringValue, x, y)

}

function backButtonSetup() {
    backButton = createSprite(120, 700, 200, 100);
    backButton.shapeColor = color(white_color);
    backButton.mouseActive = true;
}

function difficultyScreenSetup() {



    console.log("test")
    var difficultyButtonY = 250
    for (var i = 0; i < 3; i++) {
        var button = createSprite(width / 2, difficultyButtonY, 200, 100);
        button.shapeColor = color(white_color);

        button.mouseActive = true;

        difficultyButtons.add(button);
        difficultyButtonY += 150

    }




}



function launchGame() {

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
}

function gameFunctions() {
    if (userVariables) {

        collisionDetection()

        playerMovement()
        boostBar()

        asteroidMovement()

        playerScore()

        earthMovemenet();

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

    if (keyIsDown(83) && !player1BoostBarUsing) {
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

    if (keyIsDown(40) && !player2BoostBarUsing) {
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
        asteroidSpeed1 = 0
        beginGame = false;
        userVariables = false;
        player1.visible = false
        player2.visible = false;
        earth1.remove()
        earth2.remove()
        player1BoostBar.remove();
        player2BoostBar.remove();
        borderShape.remove();
        asteroids1.removeSprites();
        asteroids2.removeSprites();
        music[currentSong].stop();
        menuMusic.loop();
        for (var i = 0; i < 3; i++) {
            mainScreenButtons[i].visible = true;
        }


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
        c.visible = false;
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


function mouseClicked() {
    clickedMouse = true;
}

function mouseTimeout() {
    if (clickedMouse) {
        mouseTimer++
        if (mouseTimer == 5) {
            clickedMouse = false;
            mouseTimer = 0
        }
    } else {
        mouseTimer = 0;
    }
}
