var bullet,wall,thickness;
var speed,weight;
var deformation,damage;
var lbullet,lwall;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83)
  bullet=createSprite(50, 200, 10, 20);
  wall=createSprite(1200, 200, thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
  deformation=(0.5*weight*speed*speed)/22500;
  wall.shapeColor=color("white");
}

function draw() {
  background(0,0,0); 
 
  bullet.shapeColor=color("white")

  if(wall.x-bullet.x<(bullet.width + wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180){
     bullet.shapeColor=color("red");
    }
  
  if(deformation<180 && deformation>100){
    bullet.shapeColor=color("yellow");
    }
  if(deformation<100){
    bullet.shapeColor=color("green");
  
    }
  }
  
  

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color("red")
    }
  
    if(damage<10){
      wall.shapecolor=color(0,255,0);
    }
  }

  hasCollided(bullet,wall);

  drawSprites();
}

function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x
if(bulletRightEdge>=wallLeftEdge){
return true;
}
return false;
}


