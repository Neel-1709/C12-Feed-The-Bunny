var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var leaf; 
var orangeleaf;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeleafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
createApple();
createLeaf();
createorangeLeaf();
  drawSprites();
}
function createApple(){
  if (frameCount % 80 === 0) {
    apple = createSprite(random(50,350),10,40,10);
    apple.addImage(appleImg)
    apple.y = Math.round(random(10,60))
    apple.scale = 0.1;
   
    apple.velocityY = 4;
    
    }
  }

function createLeaf(){
  if (frameCount % 60 === 0) {
    leaf = createSprite(random(50,350),10,40,10);
    leaf.addImage(leafImg)
    leaf.y = Math.round(random(10,60))
    leaf.scale = 0.1;
    leaf.velocityY = 4;
  }
}
function createorangeLeaf(){
  if (frameCount % 100 === 0) {
    orangeleaf = createSprite(random(50,350),10,40,10);
    orangeleaf.addImage(orangeleafImg)
    orangeleaf.y = Math.round(random(10,60))
    orangeleaf.scale = 0.1;
    orangeleaf.velocityY = 4;
  }
}
