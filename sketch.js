
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);
  //monkey
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1

  //ground
  ground = createSprite(300, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x);
  //ground.visible = false;

  
}


function draw() {
background(305);

  //infinite scrolling ground
  if (ground.x < 300) {
    ground.x = 400

  }

  if (keyDown("space") && monkey.y >= 189) {
    monkey.velocityY = -12
  }

  monkey.velocityY = monkey.velocityY + 0.8;

  monkey.collide(ground);

  spawnFood();
  spawnObstacles();

  drawSprites();

  bananaGroup = new Group();
  obstacleGroup = new Group();
}

function spawnFood() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600, 120, 40, 10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
   bananaGroup.add(banana);
    banana.lifetime = 220;

  }
}

function spawnObstacles() {
  if (frameCount%220 === 0){
    var obstacle = createSprite(300,320,50,50);
    obstacle.addImage(obstacleImage);
    
    obstacle.scale = 0.13 ;
    obstacle.velocityX = -4; 
    obstacle.lifetime = 220;
    obstacleGroup.add(obstacle);
  }
}
  







