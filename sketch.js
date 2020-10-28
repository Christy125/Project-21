var bullet, wall, thickness;
var speed, weight;

function setup() {
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);

  createCanvas(1600,400);
  
  bullet=createSprite(50, 200, 20, 10);
  bullet=color(255,255,255);
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);
  wall=color(80,80,80);
}

if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);
  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}