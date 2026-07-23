//cafe intro
function chapter1(){
    image(bg0,0,0,width,height);//school cafe 
    fill(0);
    textAlign(LEFT);
    textSize(17);
    textfont("Arial");
    text(character_name+"is buying lunch, notice many students are throwing away untouched food.\n"+
        "Many students choosing junk food(burgers, fries, milkshake) instead of healthier meals during lunch.\n"+
        character_name+"decides to find out why students are making these choices.",
    30,140,width-60);
    
    if(playerCharacter){
        image(playerCharacter, 30,height-380,110,160);
    }

    if(!choosebutton3){
        choosebutton3=createSprite(width/2, height-80, 150,50);
        choosebutton3.shapeColor=("#7D7098");
        choosebutton3.text="Continue";
        choosebutton3.textSize = 22;
        choosebutton3.textColor="black";
    }

    if (chooseButton3.mouse.presses()){
        chooseButton3.remove();
        chooseButton3=null;
        screen=4;
    }

}

//dialogue 1 cafe conversation
function dialogue1(){
    image(chat,0,0,wwidth,height);//chat background
    fill(0);
    textAlign(LEFT);
    textSize(16);
    textfont("Courier New");
    text("Student1: The vegetables doesn't take good, deep fried food is the best, especially with soda.",30,110,width-60);
    text("Student2: Vegetables are too blend, burgers have more flavour and more tasty",30,210,width-60);
    text("Cafeteria Worker: Kids always choose fries, chips, burgers so we made more of those to earn profit.\n"+
        "But still, so much food ends up in the trash especially healthier section like salad.",30,300,width-60);
    text("Teacher: We do see lots of students eating junk food, we try to educate them in class, but still...",30,430,width-60)


    if(playerCharacter){
        image(playerCharacter, 30, height-220,90 ,130);
    }

    if(!choosebutton4){
        choosebutton4=createSprite(width/2, height/2-80 ,150, 50);
        choosebutton4.shapeColor=("#7D7098");
        choosebutton4.text="Continue";
        choosebutton4.textSize = 22;
        choosebutton4.textColor="black";
    }

    if (prefaceButton4.mouse.presses()){
        chooseButton4.remove();
        chooseButton4=null;
        screen=5;//mini game1
    }

}
