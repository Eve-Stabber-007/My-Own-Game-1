var road;
var hospital;
var man;
var vaccine;
var viurs;
var score = 0;

function preload(){
roadImg = loadImage("Road.png");
laneImg = loadImage("Picture1.jpg");
hospitalImg = loadImage("Hospital.png");
personImg = loadAnimation("Runner-1.png", "Runner-2.png")
virusImg = loadImage("Virus.png");
vaccineImg = loadImage("Flu.png");
}

function setup(){
createCanvas(windowWidth-20, windowHeight-20);

road = createSprite(width/2, height/2,width , height);
road.velocityY = 1;
road.addImage(roadImg);
road.scale = 0.3;

man = createSprite(width/2, height-150);
man.addAnimation("run",personImg);
man.scale = 0.1;

virus = createSprite(width/2, height-45);
virus.addImage(virusImg);
virus.scale = 0.1
}

function draw(){
background(255);

fill("Black");
textSize(20);
text("Score: "+score,width/2+450, height-700);

street();

if(road.y>height/2+100){
    road.y = height/2
}

if(keyDown("RIGHT_ARROW")){
    man.x = man.x+10;
    //virus.x = virus.x+10;
}

if(keyDown("LEFT_ARROW")){
    man.x = man.x-10;
    //virus.x = virus.x-10;
}

drawSprites();
}

function street(){
    if(frameCount%350 === 0){
        var r = Math.round(random(1,2))
    if(r === 1){
        road1 = createSprite(width/2-320,0);
        road1.addImage(laneImg);
        road1.scale = 0.15
        road1.velocityY = 1;
        road1.depth = road.depth+1;
        road1.depth = man.depth-1;
        hospital = createSprite(width/2-460, road1.y-20);
        hospital.addImage(hospitalImg);
        hospital.velocityY = 1;
        hospital.scale = 0.5;
        hospital.depth = man.depth-1;
        vaccine = createSprite(width/2-300, road1.y-10);
        vaccine.addImage(vaccineImg);  
        vaccine.velocityY = 1;
        vaccine.scale = 0.2;
        vaccine.depth = man.depth-1;
        }

    if(r === 2){
        road1 = createSprite(width/2+320,0);
        road1.addImage(laneImg);
        road1.scale = 0.15
        road1.velocityY = 1;
        road1.depth = road.depth+1;
        road1.depth = man.depth-1;
        hospital = createSprite(width/2+460, road1.y-20);
        hospital.addImage(hospitalImg);
        hospital.velocityY = 1;
        hospital.scale = 0.5;
        hospital.depth = man.depth-1;
        vaccine = createSprite(width/2+300, road1.y-10);
        vaccine.addImage(vaccineImg);
        vaccine.velocityY = 1;
        vaccine.scale = 0.2;
        vaccine.depth = man.depth-1;
    }
    }
}