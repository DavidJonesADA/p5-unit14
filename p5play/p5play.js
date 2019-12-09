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


//BrakeBar
var BrakeBar_length = 75;
var BrakeBar_width = 10;
var BrakeBar_positionY = 725;

//player1
var player1

var asteroidSpeed1;


var player1BrakeBar;
var player1BrakeBarUsed = false;
var player1BrakeBarUsageMeter = 75;

var p1DistanceToEarth = 10;

var player1Firing = false;

var hearts1;
var hearts1Count;

var earth1

//player2
var player2;

var asteroidSpeed2;

var player2BrakeBar;
var player2BrakeBarUsed = false
var player2BrakeBarUsageMeter = 75;

var p2DistanceToEarth = 10;

var player2Firing = false;

var hearts2;
var hearts2Count;

var earth2;

var asteroids1;



var blocksExisting = 0
var blocksExisting2 = 0

var numb = 0;

var beginGame;

var gameFunctions;

var mainScreenButtons;


var difficultyButtons;

var selectedSprite;

var soundPlayed1 = false;
var soundPlayed2 = false;
var soundPlayed3 = false;
var soundPlayed4 = false;
var soundPlayed5 = false;

var menuHover;

var difficultyScreen = false;

var selection1 = false;
var selection2 = true;
var selection3 = false;
var selection4 = false;

var difficultyMultiplier = 1;
var endlessMode = 0;

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

var bullet1;
var bullet2;


var wait = 0;

var p1BulletTimeout;



var p2BulletTimeout;


var newVariable;

var player1Bullets
var player2Bullets


var endScreenMenu = 0;

var player1Time;
var player1TimeAnimation;

var player2Time
var player2TimeAnimation;

var endScreenButton;

var leftBorder;
var rightBorder;
var topBorder;
var bottomBorder;
var borderGroup;



var song;
var currentSong = 0;

var exponSpeed;
var exponCounter;


var currentHighscore = localStorage.getItem('highscore');
if (null === currentHighscore) {
    currentHighscore = '0';
}
console.log(currentHighscore)

function preload() {
    /* Load all of the images from the content delivery network */
    rocketShip = loadImage('https://rawcdn.githack.com/DavidJonesADA/p5-unit14/fa6fa24cf983b8357816c0257de6a617d7a1d4df/p5play/assets/rocketship.png');
    whiteSquare = loadImage('https://rawcdn.githack.com/DavidJonesADA/p5-unit14/fa6fa24cf983b8357816c0257de6a617d7a1d4df/p5play/assets/orange-square.png');
    comet = loadImage('https://rawcdn.githack.com/DavidJonesADA/p5-unit14/fa6fa24cf983b8357816c0257de6a617d7a1d4df/p5play/assets/comet.png');
    heart = loadImage('https://rawcdn.githack.com/DavidJonesADA/p5-unit14/fa6fa24cf983b8357816c0257de6a617d7a1d4df/p5play/assets/heart.png');
    earth = loadImage('https://rawcdn.githack.com/DavidJonesADA/p5-unit14/fa6fa24cf983b8357816c0257de6a617d7a1d4df/p5play/assets/earth.png');
    bulletEmoji = loadImage('https://rawcdn.githack.com/DavidJonesADA/p5-unit14/fa6fa24cf983b8357816c0257de6a617d7a1d4df/p5play/assets/bullet.png');

    fire1 = loadImage("https://rawcdn.githack.com/DavidJonesADA/p5-unit14/fa6fa24cf983b8357816c0257de6a617d7a1d4df/p5play/assets/explosion/fire1.png");
    fire2 = loadImage("https://rawcdn.githack.com/DavidJonesADA/p5-unit14/fa6fa24cf983b8357816c0257de6a617d7a1d4df/p5play/assets/explosion/fire2.png");

    asteroidExplosion1 = loadImage("https://rawcdn.githack.com/DavidJonesADA/p5-unit14/fa6fa24cf983b8357816c0257de6a617d7a1d4df/p5play/assets/explosion/asteroidExplosion1.png");
    asteroidExplosion2 = loadImage("https://rawcdn.githack.com/DavidJonesADA/p5-unit14/fa6fa24cf983b8357816c0257de6a617d7a1d4df/p5play/assets/explosion/asteroidExplosion2.png");


    rocketExplosionAnimation = loadAnimation(fire1, fire2); /* Create image animations */

    asteroidExplosionAnimation = loadAnimation(asteroidExplosion1, asteroidExplosion2);

    /* Load all of the sounds/music from the content delivery network */
    titleMusic = loadSound('https://rawcdn.githack.com/DavidJonesADA/p5-unit14/fa6fa24cf983b8357816c0257de6a617d7a1d4df/p5play/assets/music/TitleScreenMusic.mp3');
    menuMusic = loadSound('https://rawcdn.githack.com/DavidJonesADA/p5-unit14/fa6fa24cf983b8357816c0257de6a617d7a1d4df/p5play/assets/music/MenuMusic.wav');
    song1 = loadSound('https://rawcdn.githack.com/DavidJonesADA/p5-unit14/fa6fa24cf983b8357816c0257de6a617d7a1d4df/p5play/assets/music/PlayingMusic1.mp3');
    song2 = loadSound('https://rawcdn.githack.com/DavidJonesADA/p5-unit14/fa6fa24cf983b8357816c0257de6a617d7a1d4df/p5play/assets/music/PlayingMusic2.mp3');
    song3 = loadSound('https://rawcdn.githack.com/DavidJonesADA/p5-unit14/fa6fa24cf983b8357816c0257de6a617d7a1d4df/p5play/assets/music/PlayingMusic3.mp3');
    song4 = loadSound('https://rawcdn.githack.com/DavidJonesADA/p5-unit14/fa6fa24cf983b8357816c0257de6a617d7a1d4df/p5play/assets/music/PlayingMusic4.mp3');
    song5 = loadSound('https://rawcdn.githack.com/DavidJonesADA/p5-unit14/fa6fa24cf983b8357816c0257de6a617d7a1d4df/p5play/assets/music/PlayingMusic5.mp3');
    menuHover = loadSound("https://rawcdn.githack.com/DavidJonesADA/p5-unit14/fa6fa24cf983b8357816c0257de6a617d7a1d4df/p5play/assets/MenuHover.wav");
    click = loadSound("assets/music/zipclick.mp3");


    /* Creates player1 and player2 sprites */
    player1 = createSprite(width, height / 2);
    player1.addImage(rocketShip);
    player2 = createSprite(width, height / 2);
    player2.addImage(rocketShip);
    player1.visible = false;
    player2.visible = false;

}

function setup() {


    music = [song1, song2, song3, song4, song5]; /* Create an array of all the songs. */


    cursor('https://rawcdn.githack.com/DavidJonesADA/p5-unit14/fa6fa24cf983b8357816c0257de6a617d7a1d4df/p5play/assets/navigation.png'); /* Set the cursor to the image */

    beginGame = false; /* The game will not start to begin with. It will begin with the menu screen */
    gameFunctions = false;


    mouseSprite = createSprite(0, 0, 0, 0); /* Create a sprite that will be at the position of the player */
    mouseSprite.setCollider("circle", 0, 0, 125); /* Create a circular sprite around the mouse. */


    whiteSquare.resize(10, 1200); /* Makes the middle pipe along the entire center of the game. */

    createCanvas(900, 760); /* Playing area of the game */

    mainScreenButtons = new Group(); /* Make the menu screen groups. */
    difficultyButtons = new Group();
    titleScreenImages = new Group();

    borderGroup = new Group();

    endScreenButton = createSprite(width / 2, height / 2 + 190);
    buttonAttributes(endScreenButton, white_color);
    endScreenButton.mouseActive = true;


    leftBorder = createSprite(0, height / 2, 10, height); /* Create the border sprites */
    leftBorder.visible = false;
    rightBorder = createSprite(width, height / 2, 10, height);
    rightBorder.visible = false;
    topBorder = createSprite(width / 2, 0, width, 10);
    topBorder.visible = false;
    bottomBorder = createSprite(width / 2, height, width, 10);
    bottomBorder.visible = false;

    borderGroup.add(leftBorder);
    borderGroup.add(rightBorder);
    borderGroup.add(topBorder);
    borderGroup.add(bottomBorder);

    endScreenButton.visible = false;

    menuScreenSetup();


}


function draw() {

    background(28);


    Timeouts();


    allGameFunctions() /* Creates all the game functions. */



    drawSprites(); /* Draw all in game sprites */
    menuScreen(); /* Allows for the menu screen to be displayed */
    endScreen();


}

function menuScreenSetup() {

    for (var i = 0; i < 30; i++) {
        /* Creates 30 random asteroids on the title screen as a light-weight game to play. */
        var asteroidEmoji = createSprite(0, 0);
        asteroidEmoji.addImage(comet); /* Adds the image to the sprite */
        asteroidEmoji.scale = random(0.1, 0.3)
        asteroidEmoji.position.x = random(60, 840); /* Places the sprite in a random position on the screen. */
        asteroidEmoji.position.y = random(60, 700);
        asteroidEmoji.setSpeed(0.8, random(360)); /* Makes the asteroids on the main menu move in a random direction. */

        asteroidEmoji.collide(borderGroup); /* Make the asteroids in this group collide with the edges of the game. */


        titleScreenImages.add(asteroidEmoji);

    }

    createButtonArray(mainScreenButtons, 250, 3);
    toggleMenuButtons(false); /* Toggles the visiblity of the main menu buttons */

    startButton = createSprite(width / 2, 400, 200, 100);
    startButton.shapeColor = color(white_color);
    startButton.mouseActive = true; /* Creates the start button to go to the main menu. */

    titleMusic.loop(); /* Play the title screen music and loop it */
    titleMusic.setVolume(0.5); /* This will make the volume quieter. */



}

/*
 * The menu screen function contains all of the
 * information about what to display on the menu
 * screen. This includes the Play Game, the Difficulty
 * Menu and the How to Play menu. It also includes
 * my title screen where there is a minigame to play
 */

function menuScreen() {

    if (titleScreenActive) {
        /* Active on the titlescreen */



        for (var i = 0; i < 3; i++) {
            /* Detects if the border group array is colliding with the emojis on the titlescreen */
            titleScreenImages.collide(borderGroup, titleScreenEmojiCollisions); /* If there is a collision create a callback to change the direction of the emojis. */
        }

        mouseSprite.position.x = mouseX; /* Make the sprite in place of the mouses position update depending on where the mouse is. */
        mouseSprite.position.y = mouseY;

        mouseSprite.displace(titleScreenImages); /* Make the mouse sprite move all of the asteroids on screen. */

        /*
         * The cycle section will make
         * the VOID text move up and down on the screen.
         */

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

        createText("VOID", width / 2 + 10, 210 + cycleN, 140, CENTER, black_color); /* Creates the shadow text for the VOID logo */

        createText("VOID", width / 2, 200 + cycleN, 140, CENTER, white_color); /* Creates the the in the foreground for the VOID logo */

        createText("Enter \n The Void", width / 2, 390, 32, CENTER, black_color) /* Creates the text for the button to go to the menu screen */


        if (startButton.mouseIsOver) {
            /* If the mouse is over the start button to go the menu */

            if (!soundPlayed1) {
                menuHover.play();
                soundPlayed1 = true;

            }


            buttonAttributes(startButton, 230, 210) /* Change the size of the start button to show it has been highlighted. */

            if (clickedMouse) {
                /* If the mouse is clicked then display the main menu. */
                click.play();
                titleMusic.stop();
                menuMusic.loop();
                menuMusic.setVolume(0.1);
                clickedMouse = false;
                toggleMenuButtons(true); /* Toggle the visiblity of the menu buttons. */
                titleScreenActive = false;
                titleScreenImages.removeSprites()
                startButton.visible = false;
            }



        } else {

            if (soundPlayed1) {
                soundPlayed1 = false;
            }

            buttonAttributes(startButton, white_color);


        }
    }


    if (mainScreenButtons[0].visible == true) {
        /* If the main screen buttons are visible then show the assosciated information */

        endScreenButton.visible = false;



        createText("Main Menu", width / 2, 100); /* Displays all the text on the main menu screen. */
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
                click.play();
                clickedMouse = false
                launchGame(); /* Start the game. */
                gameFunctions = true;
                menuMusic.stop();
                endScreenMenu = 0;
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
                click.play();
                clickedMouse = false;
                backButtonSetup();
                createButtonArray(difficultyButtons, 250, 4);
                difficultyButtons[3].position.x = 780;
                difficultyScreen = true; /* Toggle the difficulty menu screen */
                toggleMenuButtons(false);
            }
        } else {

            if (soundPlayed2) {
                soundPlayed2 = false;
            }


            buttonAttributes(mainScreenButtons[1], white_color);

        }


        //--------------------------------------------------------------------- How To Play

        if (mainScreenButtons[2].mouseIsOver) {


            if (!soundPlayed3) {
                menuHover.play();
                soundPlayed3 = true;

            }

            buttonAttributes(mainScreenButtons[2], 230, 210)


            if (clickedMouse) {
                click.play();
                clickedMouse = false;
                backButtonSetup();
                howToPlayScreen = true; /* Toggle the how to play screen. */
                toggleMenuButtons(false);
            }


        } else {

            if (soundPlayed3) {
                soundPlayed3 = false;
            }

            buttonAttributes(mainScreenButtons[2], white_color);

        }

        //---------------------------------------------------------------------

    }

    /*
     * The difficulty screen includes
     * all the difficulty options that
     * the player can choose from
     * including easy,normal and hard
     * difficulty as well as the
     * endless mode option.
     */

    if (difficultyScreen) {



        createText("Difficulty Menu", width / 2, 100, 32, CENTER, white_color);

        createText("Easy", width / 2, 260, 32, CENTER, black_color);
        createText("Normal", width / 2, 410, 32, CENTER, black_color);
        createText("Hard", width / 2, 560, 32, CENTER, black_color);


        createText("Current \nHighscore: " + (currentHighscore), 800, 600, 20);
        createText("Endless \n Mode", 805, 690, 32, CENTER, black_color);
        createText("Back To \nMain Menu", 120, 695, 32, CENTER, black_color);







        //--------------------------------------------------------------------- Easy Difficulty

        if (difficultyButtons[0].mouseIsOver) {

            if (!soundPlayed1) {
                menuHover.play();
                soundPlayed1 = true;

            }


            if (!selection1) {
                buttonAttributes(difficultyButtons[0], 230, 210);
            }


            if (clickedMouse) {
                click.play() /* Confirm selection */
                clickedMouse = false;
                difficultyMultiplier = 0.5; /* Set the difficulty multiplier. */
                selection1 = true; /* Update the selection to show this option is the selected difficulty */
                selection2 = false;
                selection3 = false;
                selection4 = false;
                endlessMode = false;
                buttonAttributes(difficultyButtons[0], 230, red_color);
            }
        } else {

            if (soundPlayed1) {
                soundPlayed1 = false;
            }

            if (!selection1) {
                buttonAttributes(difficultyButtons[0], white_color);
            } else {


                buttonAttributes(difficultyButtons[0], red_color); /* Change the difficulty color to red if it has been selected */
            }


        }

        //--------------------------------------------------------------------- Normal Difficulty


        if (difficultyButtons[1].mouseIsOver) {

            if (!soundPlayed2) {
                menuHover.play();
                soundPlayed2 = true;

            }


            if (!selection2) {
                buttonAttributes(difficultyButtons[1], 230, 210);
            }


            if (clickedMouse) {
                click.play();
                clickedMouse = false;
                difficultyMultiplier = 1;
                selection2 = true;
                selection3 = false;
                selection1 = false;
                selection4 = false;
                endlessMode = false;
                buttonAttributes(difficultyButtons[1], 230, red_color);
            }
        } else {

            if (soundPlayed2) {
                soundPlayed2 = false;
            }

            if (!selection2) {
                buttonAttributes(difficultyButtons[1], white_color);
            } else {

                buttonAttributes(difficultyButtons[1], red_color);
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
                selection4 = false;
                endlessMode = false;
                buttonAttributes(difficultyButtons[2], 230, red_color)
            }
        } else {

            if (soundPlayed3) {
                soundPlayed3 = false;
            }

            if (!selection3) {
                buttonAttributes(difficultyButtons[2], white_color);
            } else {
                buttonAttributes(difficultyButtons[2], red_color);
            }


        }

        //--------------------------------------------------------------------- Endless Difficulty

        if (difficultyButtons[3].mouseIsOver) {

            if (!soundPlayed4) {
                menuHover.play();
                soundPlayed4 = true;

            }

            if (!selection4) {
                buttonAttributes(difficultyButtons[3], 230, 210);
            }



            if (clickedMouse) {
                click.play();
                clickedMouse = false;
                difficultyMultiplier = 1;
                endlessMode = true; /* Set the games difficulty to endless. */
                selection4 = true;
                selection1 = false;
                selection2 = false;
                selection3 = false;
                buttonAttributes(difficultyButtons[3], 230, red_color)
            }
        } else {

            if (soundPlayed4) {
                soundPlayed4 = false;
            }

            if (!selection4) {
                buttonAttributes(difficultyButtons[3], white_color);
            } else {
                buttonAttributes(difficultyButtons[3], red_color);
            }


        }


        //--------------------------------------------------------------------- Back

        if (backButton.mouseIsOver) {

            if (!soundPlayed5) {
                menuHover.play();
                soundPlayed5 = true;

            }

            buttonAttributes(backButton, 230, 210);

            if (clickedMouse) {
                click.play();
                clickedMouse = false;
                toggleMenuButtons(true) /* Show the main menu screen */

                difficultyScreen = false;
                difficultyButtons.removeSprites();
                backButton.remove();
            }
        } else {

            if (soundPlayed5) {
                soundPlayed5 = false;
            }


            buttonAttributes(backButton, white_color);

        }



    }


    /*
     * Includes all the information for
     * the player on how to play the game
     * such as what buttons they need to press
     * as well as the different objects they must
     * avoid
     */

    if (howToPlayScreen) {

        if (backButton.mouseIsOver) {

            if (!soundPlayed1) {
                menuHover.play();
                soundPlayed1 = true;

            }

            buttonAttributes(backButton, 230, 210);

            if (clickedMouse) {
                /* If the back button is clicked */
                click.play(); /* Play the click sound */
                clickedMouse = false; /* Allow the mouse to be clicked again */
                toggleMenuButtons(true); /* Redraw the menu buttons. */
                backButton.remove(); /* Remove the back button */
                howToPlayScreen = false; /* Hide the how to play menu. */
            }
        } else {

            if (soundPlayed4) {
                soundPlayed4 = false;
            }


            buttonAttributes(backButton, white_color);

        }

        /*
         * Cycle betweem showing
         * player1s keys to use
         * and player2s keys that
         * they will use when playing
         * the game.
         */

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

        /*
         * Creates the vertexes leading to
         * the text on the how to play menu
         * this includes the corresponding
         * keys and their actions and how
         * they will respond to the movement
         * or actions in the game.
         */

        //--------------------------------------------------------------------- Vertexes
        noFill()
        strokeWeight(5);
        stroke(white_color);

        beginShape(); //--------------------------------------------------------------------- W
        vertex(width / 2, height / 2 - 50);
        vertex(280, 270);
        vertex(235, 270);
        endShape();

        beginShape(); //--------------------------------------------------------------------- A
        vertex(width / 2 - 50, height / 2);
        vertex(280, 530);
        vertex(215, 530);
        endShape();

        beginShape(); //--------------------------------------------------------------------- S
        vertex(width / 2 - 10, height / 2);
        vertex(520, 490);
        vertex(545, 490);
        endShape()

        beginShape(); //--------------------------------------------------------------------- D
        vertex(width / 2 + 50, height / 2);
        vertex(630, 320);
        vertex(660, 320);
        endShape();





        /*
         * Creates the squares used to
         * display the key outline squares
         */


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


        createText("Back To \nMain Menu", 120, 695, 32, CENTER, black_color);
        /*
         * Displays the text
         * for the different
         * keys.
         */
        text(key1, width / 2, height / 2 - 35);
        text(key2, width / 2 - 50, height / 2 + 15)
        text(key3, width / 2, height / 2 + 15);
        text(key4, width / 2 + 50, height / 2 + 15);


        /*
         * Instructions on how to play the game corresponding
         * to each key or object such as the letter W/Up key
         * or the what the asteroids do.
         */
        createText("These are asteroids, you want to \n avoid them to get to earth first! \n \n Your rocket will slow down \n if you collide with them.", 220, 50, 15, LEFT);

        createText("These are your health points, \n if your rocket hits an asteroid \n you will lose one health point! \n \n If you lose all your health \n points its game over!", 640, 50, 15, LEFT);
        createText("Get to earth first to win the game!", width / 2, 200, 32, CENTER);

        createText("Pressing W/Up Arrow will \n allow your rocket to shoot \n a bullet to destroy obstacles! \n You only get 10 bullets so watch out!", 125, 250, 15, CENTER);
        createText("Pressing A/Left Arrow will \n move your rocket to the left!", 115, 530, 15, CENTER);
        createText("Pressing S/Down Arrow will \n slow down your rocket, \n giving you more time to dodge\n an asteroid. \n \n Watch your meter at the bottom \n if it goes red you have to wait \n for it to be refilled!", 655, 485, 15, CENTER);
        createText("Pressing D/Right Arrow will \n move your rocket to the right!", 780, 325, 15, CENTER);



    }


}
/* Toggles the visibility of the buttons on the
 *  menu screen. This allows for the menu screen
 * buttons to be hidden if the player is on another
 * screen e.g the difficulty screen or in the game
 */
function toggleMenuButtons(visibility) {
    for (var i = 0; i < 3; i++) {
        mainScreenButtons[i].visible = visibility;
    }
}

/* The buttonAttributes function can
 * change the existing buttons to
 * edit their width, shapeColor and change if they are active or not.
 *
 */
function buttonAttributes(buttonName, buttonColor, buttonWidth = 200) {
    /* Takes the button sprite such as a sprite from a group (button[0] for example), the color you want the button to be and its width. */
    buttonName.shapeColor = color(buttonColor); /* Changes the button color. */
    buttonName.width = buttonWidth; /* Changes the buttons width. */
}

/* The createSquare function will create a square which can be manipulated
 * depending on the arguments put in. This includes
 * the x and y position as well as the width of the
 * square.
 */
function createSquare(x, y, w) {
    /* Uses the x, y and width the create squares of different sizes and positions.*/
    square(x - w / 2, y - w / 2, w);
}

/* This text function takes in arguments and is used
 * to create text whilst not having to rewrite the
 * already existing p5.js text functions. It combines
 * them all together in one function. It includes the
 * string such as 'abcde123', the position, the size
 * of the text, the alignment, the text color and the
 * font.
 */

function createText(stringValue, x, y, wordSize = 32, alignment = CENTER, textColor = white_color, font = "Tomorrow") {
    /* Uses parameters from where text is generated to create the text */

    textAlign(alignment); /* Sets the alignment of the text e.g CENTER or LEFT */
    fill(textColor); /* Sets the texts fill colour. */
    textSize(wordSize); /* Sets the size of the text that is generated */
    textFont(font); /* Allows the font to be set */
    text(stringValue, x, y) /* Implements the string and the x and y position */

}

/* Creates the back button which can be used
 * on multiple menu screen pages to take the
 * user back to the main menu screen.
 */
function backButtonSetup() {
    backButton = createSprite(120, 700, 200, 100);
    backButton.shapeColor = color(white_color); /* Sets the color of the button to white. */
    backButton.mouseActive = true; /* Allows for the mouse to detect movement if it is over the shape or not. */
}

/* The createButtonsArray function will allow for array buttons to
 * be created. It takes in multiple attributes
 * allowing for the group to be defined, the
 * position, the amount of buttons, the colour of
 * the buttons and the Y axis increments.
 */
function createButtonArray(buttonGroup, buttonPositionY = 250, buttonCountEnd, button_color = white_color, buttonPositionYIncrement = 150, buttonWidth = 200, buttonHeight = 100) {
    for (var buttonCount = 0; buttonCount < buttonCountEnd; buttonCount++) {
        var button = createSprite(width / 2, buttonPositionY, buttonWidth, buttonHeight); /* Creates the sprite based on the parameters given. */

        button.shapeColor = color(button_color); /* Sets the default color of the button. */
        button.mouseActive = true; /* Allows for the mouse to detect movement if it is over the shape or not. */

        buttonGroup.add(button); /* Adds the button to the array that is used in the parameter. */
        buttonPositionY += buttonPositionYIncrement; /* Increments based on the amount set in the parameter. */
    }
}

/* The launchGame function is used as
 * another version of setup that can be
 * recalled multiple times once the game ends
 * it contains all the information about
 * what the variables in the game should
 * begin as. It is only called once during
 * the beginning of the game, it will also
 * start a random song as well as restart any
 * player information such as their health or
 * the amount of bullets that they have.
 */

function launchGame() {

    currentSong = Math.floor((Math.random() * 4) + 0); /* Pick a random song from the array of existing songs */
    console.log(currentSong);
    music[currentSong].loop();
    music[currentSong].setVolume(0.1)


    p1DistanceToEarth = 15 * difficultyMultiplier; /* Sets the distance remaining to earth for both players */
    p2DistanceToEarth = 15 * difficultyMultiplier;

    player1.visible = true; /* Makes both players visible. */
    player2.visible = true;

    player1Bullets = 10; /* Players will start with 10 bullets. */
    player2Bullets = 10;

    player1Time = 0; /* player1Time/player2Time will record the amount of seconds the player has survived for/taken to get to earth */
    player2Time = 0;

    player1TimeAnimation = 0; /* Used to store the animation time which will increment to the players score on the end screen */
    player2TimeAnimation = 0;

    p1BulletTimeout = 0 /* The interval between when each player can shoot. */
    p2BulletTimeout = 0


    asteroidSpeed1 = 5 * difficultyMultiplier; /* The beginning speed of which the asteroids will start at. It is multiplied by the difficulty. */
    asteroidSpeed2 = 5 * difficultyMultiplier;

    asteroids1 = new Group(); /* Creates the groups that the asteroids will be stored to for each player to avoid and dodge. */
    asteroids2 = new Group();

    renderAsteroids(asteroids1, 40, -850); /* Calls the function to add the asteroids to each asteroid group. */
    renderAsteroids(asteroids2, 500, -850);

    hearts1Count = 3; /* The players will start with 3 lives. */
    hearts2Count = 3;

    hearts1 = new Group(); /* Creates the groups to store the amount of health each player will have at the beginning */
    hearts2 = new Group();

    renderHearts(hearts1Count, hearts1, 375); /* Calls the function to add the hearts to each group. */
    renderHearts(hearts2Count, hearts2, 485);

    borderShape = createSprite(450, 375); /* Create the middle pipe that will split the players down each side. They will not be able to cross into each others areas */
    borderShape.addImage(whiteSquare);
    borderShape.height = 900;

    //player1
    player1.position.x = 225; /* Sets the position of the player on the X axis so that they start in the middle of their area. */
    player1.position.y = playerPositionY; /* Sets the position of player on the Y axis so that they start at the correct height of the canvas */
    player1.rotation = -45 /* The emoji is at an angle. As such I must tilt the player to title the emoji */
    player1.scale = 0.35;
    player1.setCollider("rectangle", 0, 0, 135, 125);

    player1BrakeBar = createSprite(width, height / 2, BrakeBar_length, BrakeBar_width) /* Create the brake bar for the player. This will indicate the remaining brake they have left. */
    player1BrakeBar.position.x = 60;
    player1BrakeBar.position.y = BrakeBar_positionY;
    player1BrakeBar.shapeColor = color(white_color);




    //player2
    player2.rotation = -45;
    player2.scale = 0.35;
    player2.position.x = 675;
    player2.position.y = playerPositionY;
    player2.setCollider("rectangle", 0, 0, 135, 125);

    player2BrakeBar = createSprite(width, height / 2, BrakeBar_length, BrakeBar_width)
    player2BrakeBar.position.x = 840;
    player2BrakeBar.position.y = BrakeBar_positionY;
    player2BrakeBar.shapeColor = color(white_color);

    renderEarth() /* Create the earths that the players must in the end get to. */
    beginGame = false;

}

/* The gameFunctions function is used once the game starts, these
 * functions inside are called throughout the game.
 * This will be called in the draw function allowing
 * for my functions to consistently be called. This includes
 * the movement of my earth, the players movement and the collision
 * detection of the game.
 *
 */

function allGameFunctions() {
    if (gameFunctions) {
        /* Will only be active once the game starts */

        collisionDetection(); /*  */

        playerMovement();
        renderBrakeBar();

        asteroidMovement(asteroids1, asteroidSpeed1, earth1);
        asteroidMovement(asteroids2, asteroidSpeed2, earth2);

        playerHUD();
        noHearts();

        earthMovement();


    }
}


/* The playerHUD function will display the necessary information
 * to the player about information that is important to them,
 * this include the amount of Lightyears/seconds they have survived
 * for as well as the remaining amount of bullets they have left
 * to use for their game.
 */
function playerHUD() {



    if (!endlessMode) {
        /* If the players are not playing on endless mode */
        createText(int(p1DistanceToEarth) + " Lightyears to earth", 10, 40, 32, LEFT); /* Display text on the easy/normal/hard difficulty of the remaining lightyears to earth. */
        createText(int(p2DistanceToEarth) + " Lightyears to earth", width - 350, 40, 32, LEFT);
    } else {
        /* If the players are playing on endless mode */
        createText(int(player1Time) + "s", 10, 40, 32, LEFT); /* Display the time the players have survived for*/
        createText(int(player2Time) + "s", width - 350, 40, 32, LEFT);
    }


    createText(player1Bullets, 250, 725, 25); /* Display the amount of bullets each player has remaining on screen. */
    createText(player2Bullets, 650, 725, 25);

}


/* The player movement function will allow
 * both player1 and player2 to use the keys
 * on a computer keyboard to manipulate the
 * position of their player or use abilities
 * this includes braking and firing bullets.
 */


function playerMovement() {

    //player 1

    if (keyIsDown(65) && hearts1Count > 0) {
        /* If the A key is pressed move player1 to the left 10 pixels */
        player1.position.x -= 10;
    }

    if (keyIsDown(68) && hearts1Count > 0) {
        /* If the D key is pressed move player1 to the right 10 pixels */
        player1.position.x += 10;
    }

    if (keyIsDown(83) && !player1BrakeBarUsed && hearts1Count > 0) {
        /* If the S key is pressed move player1 down (give the player more time to manouver) */
        player1.position.y += 8;
        player1BrakeBarUsageMeter -= 2

    }

    if (player1.position.y > 650) {
        /* If the brake key has been let go automatically move the player back to their starting position */
        player1.position.y -= 5;
    }

    if (keyWentDown(87)) {
        /* If the W key is pressed, allow the player to fire a bullet */
        if (!player1Firing && player1Bullets > 0 && hearts1Count > 0) {
            /* Using hearts1Count > 0 to detect whether the player is still alive. If they are not alive do not give them access to do these commands */
            fireBullet(player1);
            player1Bullets -= 1;


        }

    }

    //player 2

    if (keyIsDown(37) && hearts2Count > 0) {
        /* If the Left arrow key is pressed move player2 to the left 10 pixels */
        player2.position.x -= 10;
    }

    if (keyIsDown(39) && hearts2Count > 0) {
        /* If the Right arrow key is pressed move player2 to the right 10 pixels */
        player2.position.x += 10;
    }

    if (keyIsDown(40) && !player2BrakeBarUsed && hearts2Count > 0) {
        /* If the Down arrow key is pressed move player2 down (give the player more time to manouver) */
        player2.position.y += 8;
        player2BrakeBarUsageMeter -= 2

    }

    if (player2.position.y > 650) {
        /* If the brake key has been let go automatically move the player back to their starting position */
        player2.position.y -= 5;
    }

    if (keyWentDown(38)) {
        /* If the Up arrow key is pressed, allow the player to fire a bullet */
        if (!player2Firing && player2Bullets > 0 && hearts2Count > 0) {
            /* Using hearts2Count > 0 to detect whether the player is still alive. If they are not alive do not give them access to do these commands */
            fireBullet(player2, bullet2)
            player2Bullets -= 1;
        }
    }




}

/* The fireBullet function creates a bullet
 * at the position of the player and will
 * allow for the player to destroy an asteroid
 * that is in its path.
 */

function fireBullet(player) {
    /* Takes in the player (player1/player2) as a parameter */



    if (player === player1) {
        bullet1 = createSprite(player.position.x, player.position.y - 30); /* Creates a bullet at the position of the player and -30 on the y axis to be on the head of the player*/

        bullet1.addImage(bulletEmoji);
        bullet1.setSpeed(10, 270); /* The speed of the bullet will make it go straight upwards to hit the asteroids */



        bullet1.life = 200; /* Will automatically remove the sprite if it doesn't hit an asteroid in time. */
        player1Firing = true; /* Since the bullet is firing do not allowed to fire again until it can be set back to false (Refer to Timeout function) */

    }

    if (player === player2) {
        bullet2 = createSprite(player.position.x, player.position.y - 30);

        bullet2.addImage(bulletEmoji);
        bullet2.setSpeed(10, 270);



        bullet2.life = 200;
        player2Firing = true;

    }
}


/* The collision detect function will check for
 * any collisions that occur between the players,
 * asteroids or the earth sprites. Once there is a
 * collision it will proceed to use the relative
 * callback or update the information about the player.
 *
 *
 */

function collisionDetection() {

    player1.collide(borderShape); /* Players will the middle pole in the game */
    player1.collide(borderGroup); /* Players will collide with the edges of the game */

    player2.collide(borderShape);
    player2.collide(borderGroup);

    if (asteroids1.overlap(player1)) {
        /* Check if the asteroid is overlapping the player. If there is a collision then activate the player collision callback. */
        player1.overlap(asteroids1, playerCollision);

    }


    if (asteroids2.overlap(player2)) {
        player2.overlap(asteroids2, playerCollision);

    }

    if (player1Firing) {
        /* Check for collision against the bullet and the asteroids once the bullet is actively firing. */
        if (bullet1.visible) {
            asteroids1.overlap(bullet1, bulletCollision);
        }

    }

    if (player2Firing) {
        if (bullet2.visible) {
            asteroids2.overlap(bullet2, bulletCollision);
        }
    }


    if (player1.overlap(earth1) == false && hearts1Count > 0) {
        if (frameCount % 60 == 0) {
            player1Time++; /* Whilst the player has not got to earth, increase the players time it is taking to get to earth/ how long they have survived for on endless mode */
        }

    } else {
        asteroidSpeed1 = 0; /* Sets asteroid speed to 0 once the player collides with the earth. */

    }

    if (player2.overlap(earth2) == false && hearts2Count > 0) {
        if (frameCount % 60 == 0) {
            player2Time++;
        }
    } else {
        asteroidSpeed2 = 0;
    }
}

/* Creates the Brakebar for each
 * player, will allow them to slow
 * down giving them more time to dodge
 * the asteroids displayed on their
 * side of the screen for a limited amount
 * of time
 */

function renderBrakeBar() {

    //player1
    player1BrakeBar.width = player1BrakeBarUsageMeter; /* Sets the width of the Brake bar relative to the usage meter*/

    if (player1BrakeBarUsageMeter < 75) {
        /* Gradually reset the length of the Brake bar meter until it gets back to full */
        player1BrakeBarUsageMeter += 0.2;
    }


    if (player1BrakeBarUsageMeter <= 0) {
        player1BrakeBarUsed = true;
        player1BrakeBar.shapeColor = color(red_color); /* If the boost bar has been fully used then set the color to red. */

    }

    if (player1BrakeBarUsageMeter >= 75) {
        player1BrakeBarUsed = false;
        player1BrakeBar.shapeColor = color(white_color); /* If the boost bar hasn't been fully used then set the color to white. */
    }

    //player2

    player2BrakeBar.width = player2BrakeBarUsageMeter


    if (player2BrakeBarUsageMeter < 75) {
        player2BrakeBarUsageMeter += 0.2;
    }


    if (player2BrakeBarUsageMeter <= 0) {
        player2BrakeBarUsed = true;
        player2BrakeBar.shapeColor = color(red_color);

    }
    if (player2BrakeBarUsageMeter >= 75) {
        player2BrakeBarUsed = false;
        player2BrakeBar.shapeColor = color(white_color);
    }
}


/* Creates the earth sprites for both
 * player 1 and player 2
 * initally once the game starts.
 */
function renderEarth() {

    earth1 = createSprite(225, -1500);
    earth1.addImage(earth);
    earth1.scale = 0.5;
    earth1.setCollider("rectangle", 0, 0, 900, 75);


    earth2 = createSprite(675, -1500);
    earth2.addImage(earth);
    earth2.scale = 0.5;
    earth2.setCollider("rectangle", 0, 0, 900, 75);

}

/* Allows for the earth to move once the players
 * score is equal to 0. It will begin to move the
 * earth down on the screen for that player.
 */

function earthMovement() {

    if (!endlessMode) {
        /* Will only move the earth if the game is not set to endless mode */
        if (p1DistanceToEarth <= 0) {
            p1DistanceToEarth = 0;
            earth1.position.y += asteroidSpeed1;
        }

        if (p2DistanceToEarth <= 0) {
            p2DistanceToEarth = 0;
            earth2.position.y += asteroidSpeed2; /* Moves the earth according to the speed that the asteroids are travelling at (Approach the earth faster) */
        }

    }

}

/* renderAsteroids will create the asteroids
 * in the specified group for the player
 * to dodge and render them in the canvas.
 */

function renderAsteroids(asteroidGroup, asteroidPositionX, asteroidPositionY) {
    /* Takes the asteroids group, the position x and the position y. This will create asteroids for both player 1 and player 2 to dodge */
    asteroidY = asteroidPositionY;
    asteroidX = asteroidPositionX;

    for (var asteroidRow = 0; asteroidRow < 3; asteroidRow++) {
        /* Makes three rows of asteroids */

        var randomCheck = 0;
        r = Math.floor((Math.random() * 4) + 0);

        for (var asteroidColumn = 0; asteroidColumn < 4; asteroidColumn++) {
            /* Makes four columns of asteroids */
            var c = createSprite(asteroidX, asteroidY + (random(-25, 25)));
            if (randomCheck == r) {
                c.remove();
            }
            randomCheck++
            c.addImage(comet);
            c.scale = 0.25;
            asteroidGroup.add(c);
            asteroidX += 120;
        }

        asteroidX = asteroidPositionX;
        asteroidY += 350;

    }

}

/* This function will control the movement of my asteroids
 * It will make the asteroids in both groups move down
 * the screen whilst the player is dodging them. If the
 * player loses all of their health then the asteroids for
 * that player will stop moving as they have lost all of their life.
 */

function asteroidMovement(asteroidGroup, asteroidGroupSpeed, playerEarth, c) {
    /* Takes in the asteroids group, the speed the asteroids are traveling at and the earth. The c is the comet in the group. */

    for (var i = 0; i < asteroidGroup.length; i++) {
        asteroidGroup[i].position.y += asteroidGroupSpeed;
        if (asteroidGroup[i].position.y > 950) {

            asteroidGroup[i].remove(c);
            if (asteroidGroup == asteroids1) {
                if (asteroidGroup.length === 8 && playerEarth.position.y < -500) {
                    blocksExisting = 0
                    asteroidGroupSpeed += 0.2
                    renderAsteroids(asteroids1, 40, -850);
                    p1DistanceToEarth--;
                }
            } else if (asteroidGroup == asteroids2) {
                if (asteroidGroup.length === 8 && playerEarth.position.y < -500) {
                    /* Increases the speed of the asteroids if the player successfully dodges the asteroids and the earth is not on approach */
                    blocksExisting2 = 0;
                    asteroidGroupSpeed += 0.2
                    renderAsteroids(asteroids2, 500, -850);
                    p2DistanceToEarth--;
                }
            }

        }
    }
}



/* Renders the hearts for both players to indicate
 * how much health each player has remaining before
 * they will sustation too much dame.
 */

function renderHearts(heartCounter, heartGroup, heartPosition) {
    /* Takes in which player heart counter, which group and the desired positiion. */
    for (var i = 0; i < heartCounter; i++) {
        /* Creates an array of hearts depending on the players heart counter. It will decrease if the player gets hit */
        var h = createSprite(((i + heartPosition + i * 20)));
        h.addImage(heart);
        h.scale = 0.09;
        h.position.y = 710;
        heartGroup.add(h);
    }
}

/* Tells the player they have
 * sustained too much damage if
 * they have lost all of their hearts
 */

function noHearts() {
    if (gameFunctions) {
        /* If the game is active allow for the hearts to be consistently checked */
        if (hearts1Count <= 0) {
            asteroidSpeed1 = 0;
            player1.visible = false;
            createText("Your Spaceship \n Sustained Too Heavy Damage!", 225, height / 2, 28, CENTER, red_color); /* if the player has lost all of their health, tell them that their spaceship has died. */
        }
        if (hearts2Count <= 0) {
            asteroidSpeed2 = 0
            player2.visible = false;
            createText("Your Spaceship \n Sustained Too Heavy Damage!", 675, height / 2, 28, CENTER, red_color);
        }
    }
}

/* The endScreen function is activated once both players have either
 * finished getting to the end goal of the game or both players have
 * lost all of their lives.
 */


function endScreen() {
    if (endScreenMenu == 0 && asteroidSpeed1 == 0 && asteroidSpeed2 == 0) {
        /* Will only update once both players have lost all of their lives. */

        /* Removing all of the game
         * variables in my game so that
         * any active element that exists
         * is automatically removed,
         * nothing from the active game
         * will be displayed on the end
         * screen. Only the end screen
         * itself
         */

        beginGame = false;
        gameFunctions = false;
        player1.visible = false
        player2.visible = false;
        earth1.remove();
        earth2.remove();
        player1BrakeBar.remove();
        player2BrakeBar.remove();
        borderShape.remove();
        asteroids1.removeSprites();
        asteroids2.removeSprites();
        hearts1.removeSprites();
        hearts2.removeSprites();
        music[currentSong].stop();
        menuMusic.loop();
        endScreenButton.visible = true;
        endScreenMenu = 1; /* Sets the endScreen menu option to 1, will now display end screen information */
        exponSpeed = 10;
        exponCounter = 0;




    }
    if (endScreenMenu == 1) {
        /* Active only once the end screen menu is set to 1 */

        if (player1Time != player1TimeAnimation) {
            if (hearts1Count > 0 || endlessMode) {
                if (frameCount % exponSpeed == 0) {
                    player1TimeAnimation++;

                }
            }

        }

        if (player2Time != player2TimeAnimation) {
            /* Creates an animation that will gradually build up to the final players time */
            if (hearts2Count > 0 || endlessMode) {
                /* Will only create the animation if the player has remaining hearts(Hasnt died) or is on endless difficulty */
                if (frameCount % exponSpeed == 0) {
                    /* Uses modulo to detect if the frameCount (60) is divisible by my counter with no remainder */
                    player2TimeAnimation++; /* Adds a value to the animation */

                }
            }


        }

        if (frameCount % 1.5 == 0) {
            /* If the frameCount (60) is divisble by 1.5 */
            exponCounter++; /* Add one to the counter */
            if (exponCounter >= 15) {
                /* Once the counter reaches 15 it will take one value away from the speed Counter making the animation speed increase*/
                if (exponSpeed > 1) {
                    exponSpeed -= 1; /* Increase the animation speed */
                }
                exponCounter = 0;
            }
        }

        if (!endlessMode) {
            /* If the endless mode toggle is not on then tell the players how long it took them to get to earth */
            if (hearts1Count > 0) {
                createText("Player 1 got to Earth in " + int(player1TimeAnimation) + "s", width / 2, height / 2 - 20);
            } else {
                createText("Player 1 was lost in action...", width / 2, height / 2 - 20);
            }

            if (hearts2Count > 0) {
                createText("Player 2 got to Earth in " + int(player2TimeAnimation) + "s", width / 2, height / 2 + 20);
            } else {
                createText("Player 2 was lost in action...", width / 2, height / 2 + 20);
            }


            if (hearts1Count > 0 && hearts2Count <= 0) {
                createText("Player 1 Wins!", width / 2, height / 2 - 120, 64, CENTER, '#ebc034');
            } else if (hearts1Count <= 0 && hearts2Count > 0) {
                createText("Player 2 Wins!", width / 2, height / 2 - 120, 64, CENTER, '#ebc034');
            } else if (hearts1Count <= 0 && hearts2Count <= 0) {
                createText("No one got to earth..", width / 2, height / 2 - 120, 64, CENTER, '#ebc034');
            } else {
                if (player1TimeAnimation == player1Time && player2TimeAnimation == player2Time) {
                    if (player1Time < player2Time) {
                        createText("Player 1 Wins!", width / 2, height / 2 - 120, 64, CENTER, '#ebc034');
                    } else if (player2Time < player1Time) {
                        createText("Player 2 Wins!", width / 2, height / 2 - 120, 64, CENTER, '#ebc034');
                    } else {
                        createText("It was a draw!", width / 2, height / 2 - 120, 64, CENTER, '#ebc034');
                    }
                }
            }


        } else if (endlessMode) {
            /* If the endless mode toggle is on tell the player how long they survived for */

            createText("Player 1 survived for " + int(player1TimeAnimation) + "s", width / 2, height / 2 - 20);
            createText("Player 2 survived for " + int(player2TimeAnimation) + "s", width / 2, height / 2 + 20);

            if (player1TimeAnimation == player1Time && player2TimeAnimation == player2Time) {
                if (player1Time > player2Time) {
                    createText("Player 1 Wins!", width / 2, height / 2 - 120, 64, CENTER, '#ebc034');
                    if (player1Time > currentHighscore) {
                        localStorage.setItem('highscore', player1Time);
                        currentHighscore = player1Time;
                    }
                } else if (player2Time > player1Time) {
                    createText("Player 2 Wins!", width / 2, height / 2 - 120, 64, CENTER, '#ebc034');
                    if (player2Time > currentHighscore) { // If the players time is greater than the existing highscore then save to the localstorage the new score.
                        localStorage.setItem('highscore', player2Time);
                        currentHighscore = player2Time;
                    }
                } else {
                    createText("It was a draw!", width / 2, height / 2 - 120, 64, CENTER, '#ebc034');
                }
            }
        }

        if (endScreenButton.mouseIsOver) {
            /* Creates a back button so the player can return to the menu screen */

            if (!soundPlayed1) {
                menuHover.play(); /* Plays the hover sound if the back button is hovered over */
                soundPlayed1 = true;

            }
            buttonAttributes(endScreenButton, 230, 210);

            if (clickedMouse) {
                click.play(); /* Plays the click sound if the back button is hovered over */
                menuScreen();
                toggleMenuButtons(true)
                endScreenButton.visible = false;
                endScreenMenu = 2; /* Turns the end screen menu off. */
            }

        } else {
            if (soundPlayed1) {
                soundPlayed1 = false;
            }
            buttonAttributes(endScreenButton, white_color);
        }
        createText("Play \nAgain", width / 2, height / 2 + 180, 32, CENTER, black_color)






    }

}

function titleScreenEmojiCollisions(asteroidEmoji) {
    /* Takes in the asteroid from the title screen asteroid group */
    asteroidEmoji.setSpeed(0.8, random(360)); /* Changes the direction of the asteroid so it bounces off a wall. */
}

/* The bulletCollision function is a callback when a bullet collides
 * with an asteroid, it will cause updates such as removing the
 * asteroid and creating an explosion
 */

function bulletCollision(bullet, asteroidSprite) {

    if (bullet.visible) {
        /* Will only update if the bullet is visible */
        bullet.visible = false; /* Sets the visiblity of the bullet to false once their has been a collision */
        asteroidSprite.visible = false; /* Sets the visiblity of the asteroid to false once their has been a collision */
        createExplosion(asteroidSprite, asteroidExplosionAnimation); /* Creates an explosion at the position of  */
    }

}

/* The playerCollision function is a callback when a player collides
 * it will update information for the player like their health and
 * create an explosion
 */

function playerCollision(player, asteroidSprite) {
    /* Takes in the player and the asteroid group as parameters */
    if (asteroidSprite.visible && asteroidSprite.position.y < 660) {
        /* Only will accept collisions if the position of the asteroid is bellow 660 to stop clipping */
        asteroidSprite.visible = false; /* Will make the asteroid invisble as it has collided with the player */
        createExplosion(player, rocketExplosionAnimation); /* Creates rocketship explosion */

        if (player == player1) {
            /* Will update information for player1 */
            asteroidSpeed1 = 5 * difficultyMultiplier;
            hearts1Count -= 1;
            hearts1.removeSprites();
            renderHearts(hearts1Count, hearts1, 375);
        } else if (player == player2) {
            /* Will update information for player2 */
            asteroidSpeed2 = 5 * difficultyMultiplier; /* Resets the speed of the asteroids  */
            hearts2Count -= 1; /* Removes one heart from the group */
            hearts2.removeSprites(); /* Removes the existing hearts allowing for them to be redrawn */
            renderHearts(hearts2Count, hearts2, 485);
        }



    }
}

/* This function will create an explosion for multiple instances
 * it will create an explosion for when an asteroid collides
 * with a player or when a bullet collides with an asteroid.
 */

function createExplosion(spritePosition, animation) {
    /* Takes in the parameters of the sprite and gets the type of animation */

    explosion = new Group(); /* Makes the explosion as a new group */
    animation.frameDelay = 30; /* Delays the update of the animation by half of the frame rate (60 fps) */

    for (var i = 0; i < 10; i++) {
        /* Creates a for loop to make multiple explosion sprites */
        var ex = createSprite(500, 20, 20, 20);
        ex.width = 20;

        ex.addAnimation("default", animation); /* Adds the animation type specified from the parameter */

        ex.position.x = spritePosition.position.x; /* Takes the sprites position */
        ex.position.y = spritePosition.position.y;

        ex.velocity.x = random(-5, 5); /* Makes the trajectory in a random direction. */
        ex.velocity.y = random(-5, 5);
        ex.rotation = random(-180, 180); /* Explosion sprite faces a random direction */


        explosion.add(ex); /* Adds the sprite to the group */
        explosion[i].life = 40; /* Explosion will only last for 40 frames */
    }

}


function mouseClicked() {
    clickedMouse = true; /* Will be updated to true if the player clicks their mouse */
}

/* My timeout function allows for me to manipulate when the mouse
 * is clicked to only allow a short window of time to click before
 * my variable is set back to false. This removes the potential
 * issue of the user double clicking by accident.
 *
 * I am also using my Timeout function to only allow the players to
 * fire every 60 frames or 1 second.
 */

function Timeouts() {
    if (clickedMouse) {
        mouseTimer++
        if (mouseTimer == 2) {
            /* Will detect if 2 frames have passed before allowing the mouse to be clicked again */
            clickedMouse = false;
            mouseTimer = 0
        }
    } else {
        mouseTimer = 0;
    }

    if (player1Firing) {
        p1BulletTimeout++
        if (p1BulletTimeout == 60) {
            player1Firing = false;
            p1BulletTimeout = 0;
        }
    }

    if (player2Firing) {
        p2BulletTimeout++
        if (p2BulletTimeout == 60) {
            /* Will detect if 60 frames have passed since the player has fired, allowing the player to shoot again */
            player2Firing = false;
            p2BulletTimeout = 0;
        }
    }

}
