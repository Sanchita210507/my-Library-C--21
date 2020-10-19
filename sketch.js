var edges;
var fixedRect, movingRect;
var ball1, ball2;
var edges
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,50,50);
  fixedRect.shapeColor ="green";
  fixedRect.debug=true;
  movingRect = createSprite(500,200,50,100);
  movingRect.shapeColor ="green";
  movingRect.debug=true;
  ball1 = createSprite(600, 200, 30, 30)
ball1.shapeColor = "blue";
ball1.debug = true;
ball1.velocityX = 2;
ball1.velocityY = 3;
ball2 = createSprite(750, 200, 30, 30)
ball2.shapeColor = "blue";
ball2.debug = true;
edges = createEdgeSprites();
}

function draw() {
  background(255,255,255); 
  ball1.bounceOff(edges);
  movingRect.x =mouseX;
  movingRect.y = mouseY;
  if(isTouching(fixedRect,movingRect)) {
    fixedRect.shapeColor ="red";
    movingRect.shapeColor = "red";
  }else{
    fixedRect.shapeColor ="green";
    movingRect.shapeColor = "green";
  }
bounceOff(ball1,ball2)
  drawSprites();
}
