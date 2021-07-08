var leaf,apple,garden,rabbit;
var leafImg,appleImg,gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
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
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX;
  drawSprites();
  spawnApples();
  spawnLeaves();
}
function spawnApples(){
  if (frameCount % 80 === 0){
     apple=createSprite(200,200,10,10);
     apple.addImage(appleImg);
     apple.scale=0.08;
     var randomX= Math.round(random(10,390));
     apple.x=randomX;
     apple.velocityY=1.6;
     
   }
   
 }
function spawnLeaves(){
  if (frameCount % 110 === 0){
     leaf=createSprite(200,200,10,10);
     leaf.addImage(leafImg);
     leaf.scale=0.08;
     var randomX= Math.round(random(10,390));
     leaf.x=randomX;
     leaf.velocityY=1.8;
     
   }
   
 }