var ball,img,paddle;
function preload() {

  ballimg=loadImage("ball.png")
  padimg=loadImage("paddle.png")
  
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(40,200,20,20)
  paddle=createSprite(350,200,20,100)
  paddle.addImage(padimg)
  ball.addImage(ballimg)
  ball.velocityX=9;
  ball.velocityY=random(-8,9);


}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites()
  ball.bounceOff(edges[0])
  ball.bounceOff(edges[2])
  ball.bounceOff(edges[3])
  ball.bounceOff(paddle)
  
  
  if(keyDown(UP_ARROW))
  {
  paddle.y=paddle.y-7
  }
  
  if(keyDown(DOWN_ARROW))
  {
  paddle.y=paddle.y+7
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

