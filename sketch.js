var fixedRect, movingRect;
var object1 , object2, object3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  object3 = createSprite(400,100,60,30);
  object3.shapeColor = "green";
  object3.velocityY = +3;
  
}

function draw() {
  background(0,0,0);  
 bounceOff(fixedRect,movingRect)
 bounceOff(object3,movingRect)
  
  drawSprites();
}