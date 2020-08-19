var sprite, sprite1 ,sprite2;

function setup() {
  createCanvas(1000,1000);
  sprite=createSprite(400, 200, 50, 50);
  sprite1=createSprite(460, 300, 40, 60);
  sprite2=createSprite(160, 400, 30, 30);
}

function draw() {
 background(0,0,0);  
sprite.shapeColor="red";
sprite1.x=mouseX;
sprite1.y=mouseY;
isTouching(sprite,sprite1);
isTouching(sprite1,sprite2);


// if(sprite1.isTouching(sprite)){
// sprite.bounce;
// }
  drawSprites();
}
function isTouching(sprite,sprite1) {
 if( Math.abs(sprite.y-sprite1.y)<sprite.height/2+sprite1.height/2  &&  Math.abs(sprite.x-sprite1.x)<sprite.width/2+sprite1.width/2){
// sprite.shapeColor=rgb(random(0,255),220,255);
// sprite1.shapeColor=rgb(255,210,random(30,290));
sprite.shapeColor="Green";
sprite1.shapeColor="Green";
 }
 
}
