var wall,thickness;
var bullet,speed,weight




function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  speed=random(223,321);
  weight=random(30,52);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)  
  
  bullet=createSprite(500,200,50,50);
  bullet.shapeColor=color(0,255,0);
  

}

function draw() {
  
  
  
  drawSprites();
  
}
function hasCollided(Lbullet,Lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdges>=wallLeftEdge){
    return true
  }
  return false;
   
}