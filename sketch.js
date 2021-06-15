 var bg,land;
var boyFly,boyStand, boy;
var balloon,balloonimg;
var gameState='start';
var ground;
var play, playimg;
var cloud;

function setup() {
  var canvas = createCanvas(500, 720);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);

 
  bg=loadImage('farm1.jpg')
  boyFly=loadImage('boy flying.png');
  boyStand=loadImage('boy standing.png')
  balloonimg=loadImage('balloon.png')
  playimg=loadImage('play.jpg')
  cloudimg=loadImage('cloud.png')

 land=createSprite(250, 450)
  land.addImage(bg);
 land.scale=0.2

  boy=createSprite(250,550)
  boy.addImage(boyStand);
  boy.scale=0.2

  balloon=createSprite(190,300)
  balloon.addImage(balloonimg);
  balloon.scale=0.1

  play=createSprite(250,650)
  play.addImage(playimg);
  play.scale=0.7

 
 
   
}

function draw() {
  background('#c0dffe'); 
  if(gameState === 'start'&&mousePressedOver(play)){
play.destroy()
gameState='play'
  }
  if(gameState==='play'){
    land.velocityY=4;
    land.lifetime=130
    boy.addImage(boyFly)
    spawnClouds()
 boy.position.x=mouseX
 balloon.position.x=boy.position.x-55
 if(isTouching(boy,cloud)){
   gameState='end'
 }
   
  }
  if(gameState==='end'){

  }
 
  drawSprites();
}

function spawnClouds() {
  if (World.frameCount % 400 === 0) {
    cloud = createSprite(0,0,40,10);
    cloud.x = random(100,400);
    cloud.addImage(cloudimg)
    cloud.scale = 0.5;
    cloud.velocityY = 3;
    
    cloud.lifetime = 250;
    
  }
  
}

