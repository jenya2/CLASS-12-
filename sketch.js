var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,leafImg,OrangeLeafImg,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  OrangeLeafImg = loadImage("orangeLeaf.png")
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

  createApplesAndLeaves()
 
rabbit.x = mouseX

  drawSprites();
}

 function createApplesAndLeaves() {
  var select_sprites = Math.round(random(1,2));
   if(frameCount%80 === 0) {
    if (select_sprites == 1) {
      createApple();
   }
    else {
    createLeaves();
    }
  }
  }

function createApple(){
    apple = createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg);
    apple.scale = 0.05;
    apple.velocityY = 1;

}

function createLeaves(){
  leaves = createSprite(random(50,350),40,10,10);
  if (Math.round(random(1,2))==1){
  leaves.addImage(leafImg);
  }
  else{
  leaves.addImage(OrangeLeafImg);
  }
  leaves.scale = 0.1;
  leaves.velocityY = 1;
}