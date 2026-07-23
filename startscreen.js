//screen 0,start screen
function startscreen(){
    image(foodie,0,0,width, height);//foodie background
    fill(0);
    textAlign(CENTER);
    textSize(20);
    textFont("DMSerifDisplay");
    text("Click the start button below to start the game!", width/2, height/2 +70,width-60);

    //Create the start button:
    if (!startButton){
        startButton=createSprite(width/2, height/2 +130,130,48);
        startButton.shapeColor=color("#F4A259");
        startButton.text="Start";
        startButton.textSize= 22;
        startButton.textColor="black";
    }

    if (startButton.mouse.presses()){
        startButton.remove();
        startButton=null;
        screen=1;
    }
}

//screen 1,character screen
function screen1(){
    image(foodie1,0,0,width,height);// warm color background, with food on 
    fill(0);
    textAlign(CENTER);
    textSize(24);
    text("Choose Your Character",width/2,90);

    //Display character images
    const imgSize=140;
    const gap = 20;
    const pairWidth = imgSize *2 +gap;
    const startX =(width-pairWidth)/2;
    const imgY =220;

    const boyX=startX;
    const girlX=startX +imgSize +gap;

    image(charImg1, boyX, imgY, imgSize, imgSize); //boy
    image(charImg2, girlX, imgY, imgSize, imgSize); //Girl

    //Create buttons 
    if (!choosebutton1 && !choosebutton2){
        choosebutton1=createSprite(boyX +imgSize/2, imgY +imgSize+50,120,50);
        choosebutton1.shapeColor = color('#79BAEC');
        choosebutton1.text= "Max";
        choosebutton1.textSize = 22;
        choosebutton1.textColor="black";

        choosebutton2= createSprite(girlX +imgSize/2,imgY+ imgSize+50,120,50);
        choosebutton2.shapeColor= color('#AC94F4'); 
        choosebutton2.text="Maya";
        choosebutton2.textSize=22;
        choosebutton2.textColor="black";

    }
    if(choosebutton1&& choosebutton1.mouse.presses()){
        playerCharacter=charImg1;
        character_name="Max";
        gotoPreface();
    }else if(choosebutton2 && choosebutton2.mouse.presses()){
        playerCharacter= charImg2;
        character_name="Maya";
        gotoPreface();
    }
}

function gotoPreface(){
    choosebutton1.remove();
    choosebutton2.remove();
    choosebutton1=null;
    choosebutton2=null;
    screen=2;
}

function screen2(){
    background(255,245,230);
    fill(0);
    textAlign(CENTER);
    textFont("DM Serif Display");
    textSize(28);
    text("Preface", width / 2 , 60);    

    //Introduction
    textAlign(LEFT);
    textSize(15);
    text("Every year, the world throws away over 1 billion tonnes of food — while nearly 800 million people don't have enough to eat.\n"+
        "Most of that waste happens in wealthier, developed countries.\n"+
        "In this story, we are going to explore more about food waste and junk food through minigame and scenerios.",
    30,110,width-60);

    //Show Chosen character:
    const imgSize=140;
    image(playerCharacter, width / 2 - imgSize/2 , height / 2 + 20, imgSize, imgSize);

    //continue button:
    if (!prefaceButton&& !prefaceShown){
        prefaceButton= createSprite(width /2, height -80,160,50);
        prefaceButton.shapeColor=color("#759dc7");
        prefaceButton.text="Continue";
        prefaceButton.textSize= 20 ;
        prefaceButton.textColor ="black"
    }
     if (prefaceButton.mouse.presses()){
        prefaceButton.remove();
        prefaceButton=null;
        prefaceShown=true;
        screen=3;
     }
}
