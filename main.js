/* Global Variables */
let screen;

//background
let bg0,chat,mini1, street, foodie, foodie1;

//Screen0
let startButton;

//Screen 1
let charImg1, charImg2;
let choosebutton1, choosebutton2;
let playerCharacter,character_name;

//Screen2
let prefaceButton;
let prefaceShown =false;

//Screen3, screen 4
let choosebutton3, choosebutton4;

//Screen 5, define within the program

//Screen 6
let choosebutton5;

//screen 7
let continueButton1,continueButton2;
let rottenFoodImage={};
let player,walls, obstacles;
let mazeStarted=false;
let mazeGameover=false;
let mazeWon=false;
let mazeCollected=0;
let showEndZoneHint=false;

/* PRELOAD LOADS FILES */
function preload() {
    charImg1=loadImage("assets/max.jpg");
    charImg2=loadImage("assets/maya.jpg");
    bg0=loadImage("assets/cafe.jpg");
    chat=loadImage("assets/chat.jpg");
    mini1=loadImage("assets/mini1.jpg");
    street=loadImage("assets/street.jpg");
    foodie=loadImage("assets/foodie.jpg");
    foodie1=loadImage("assets/foodie_colour.jpg");
    rottenFoodImage={
        apple=loadImage("assets/apple.png"),
        avocado=loadImage("assets/avocado.png"),
        canfish=oadImage("assets/canfish.png"),
        fishcan=loadImage("assets/fishcan.png"),
        flour=loadImage("assets/flour.png"),
    }
}


function setup(){
    createCanvas(400,800);
    fitCanvasToWindow();
}

function fitCanvasToWindow(){
    const scaleFactor=min(windowWidth/400, windowHeight/800);
    const canvasE1=document.querySelector("canvas");
    canvasE1.style.width=(400*scaleFactor)+"px";
    canvasE1.style.height=(800*scaleFactor)+"px";    
}

function windowResized(){
    fitCanvasToWindow();
}

/*setup runs once*/
function draw(){
    console.log("Drawing screen:",screen);
    if (screen==0){
        startscreen();
    }else if (screen==1){
        screen1();
    }else if (screen==2){
        screen2();
    }else if(screen==3){
        chapter1()
    }else if(screen==4){
        dialogue1()
    }else if (screen==5){
        if(!miniGameStarted){
            introScreen();
        }else if (gameOver){
            drawEndScreen();
        }else{
            catchingGame();
        }
    }else if (screen==6){
        chapter2();
    }else if(screen==7){
        if(!mazeStarted){
            mazeGame();
        }else if(mazeGameOver){
            drawMazeEndScreen();
        }else{
            runMazeGame();
        }
    }
}
