function isTouching(sprite,sprite1) {
    if( Math.abs(sprite.y-sprite1.y)<sprite.height/2+sprite1.height/2  &&  Math.abs(sprite.x-sprite1.x)<sprite.width/2+sprite1.width/2){
   // sprite.shapeColor=rgb(random(0,255),220,255);
   // sprite1.shapeColor=rgb(255,210,random(30,290));
   sprite.shapeColor="Green";
   sprite1.shapeColor="Green";
    } 
   }
   function bounceOff(sprite,sprite1){
   
     if( Math.abs(sprite.y-sprite1.y)<sprite.height/2+sprite1.height/2    ) {
       sprite.velocityY=sprite.velocityY*-1;
       sprite1.velocityY=sprite1.velocityY*-1;
       
     }
     if(Math.abs(sprite.x-sprite1.x)<sprite.width/2+sprite1.width/2){
   sprite.velocityX=sprite.velocityX*-1;
   sprite1.velocityX=sprite1.velocityX*-1;
   
     }
   }
   function bounceOffEdges(sprite1, topEdge, bottomEdge,leftEdge, rightEdge ){
    bounceOff(sprite1,topEdge);
    bounceOff(sprite1,bottomEdge);
    bounceOff(sprite1,leftEdge);
    bounceOff(sprite1,rightEdge);
    
   }
