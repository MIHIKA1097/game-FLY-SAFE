
var obstaclesGroup;

var gameOver;
var score=0;

var backgroungImg,birdImg,cloudImg;
var ground;
var bird ,background,cloud;

var gameState = "play";
function preload(){
birdImg = loadImage("sprites/bird.png");
backgroundImage = loadImage("sprites/background.jpg");
cloudImg =  loadImage("sprites/cloud.png")
}

function setup() {
  createCanvas(1000,800);
  
  backgr=createSprite(0,0,1000,600);
  backgr.addImage(backgroundImage);
  backgr.scale=3;
  backgr.x=backgr.width/2;
  backgr.velocityX=-1;
  
  bird =  createSprite(500,480,10,10);
  bird.addImage(birdImg);
  bird.scale = 0.1;

  ground = createSprite(500,500,1000,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;

  obstaclesGroup = new Group()
}

function draw() {
  background(255);
  if(gameState==="play"){
   // score = score+ Math.round(getFrameRate()/65);
    if(ground.x<100) {
      ground.x=ground.width/2;
    }
    if(backgr.x<100){
      backgr.x=backgr.width/2;
    }
  }

  if(keyDown("space")){
    bird.velocityY = -10
score = score+ 1
  }

  bird.velocityY = bird.velocityY +0.8
  bird.collide(ground);
  if(obstaclesGroup.isTouching(bird)){
    gameState = "end"
      }

      spawnObstacles();
  drawSprites();

  if(gameState === "end"){
    backgr.velocityX = 0;
    obstaclesGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(0);
      bird.velocityY = 0;
      stroke("black");
      textSize(50);
      fill("black");
      text("Game Over",480,200);
  }
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
}
  
function spawnObstacles() {
  if(frameCount % 120 === 0) {
    var obstacle = createSprite(800,550,10,40);
    obstacle.velocityX = -3;
    obstacle.y = random(100,450)
    obstacle.addImage(cloudImg);
    
    obstacle.debug = false;
    obstacle.setCollider("rectangle",0,0,10,10)
    //assign scale and lifetime to the obstacle     
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    bird.depth = obstacle.depth+1;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
 
  

  
 
 
     



