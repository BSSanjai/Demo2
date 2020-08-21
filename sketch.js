var sprite, sprite1 ,sprite2, sprite3, sprite4, topEdge, bottomEdge, leftEdge, rightEdge;

function setup() {
  createCanvas(400,400);
  sprite=createSprite(380, 20, 20, 20);
  sprite1=createSprite(20, 380, 20, 20);
  sprite2=createSprite(160, 300, 30, 30);
  sprite3=createSprite(320, 40, 31, 40);
  sprite4=createSprite(260, 340, 39, 38);
  
  topEdge=createSprite(200, 0, 400, 5);
  bottomEdge=createSprite(200, 400, 400, 5);
  leftEdge=createSprite(0, 200, 5, 400);
  rightEdge=createSprite(400, 200, 5, 400);


  sprite.velocityX=-2;
  sprite.velocityY=2;
  sprite1.velocityX=2;
  sprite1.velocityY=-2;
  sprite2.velocityX=2;
  sprite2.velocityY=-2;
  sprite3.velocityX=2;
  sprite3.velocityY=-2;
  sprite4.velocityX=2;
  sprite4.velocityY=-2;
}

function draw() {
 background(0,0,0);  
sprite.shapeColor="red";
sprite1.shapeColor="yellow";
sprite2.shapeColor="green";
sprite3.shapeColor="blue";
sprite4.shapeColor="pink";



isTouching(sprite,sprite1);
isTouching(sprite2,sprite1);
isTouching(sprite3,sprite1);
isTouching(sprite4,sprite1);

bounceOffEdges(sprite1, topEdge, bottomEdge,leftEdge, rightEdge )
bounceOffEdges(sprite, topEdge, bottomEdge,leftEdge, rightEdge )
bounceOffEdges(sprite2, topEdge, bottomEdge,leftEdge, rightEdge )
bounceOffEdges(sprite3, topEdge, bottomEdge,leftEdge, rightEdge )
bounceOffEdges(sprite4, topEdge, bottomEdge,leftEdge, rightEdge )

bounceOff(sprite,sprite1)
// if(sprite1.isTouching(sprite)){
// sprite.bounce;
// }
  drawSprites();
}



