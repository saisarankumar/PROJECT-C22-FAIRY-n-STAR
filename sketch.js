//create variables to store sprites
var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

//to shorter the names
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	//load the images
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	//create the canvas
	createCanvas(800, 750);
	//create a sprite for fairy
	fairy = createSprite(130, 520);
	//add animation for fairy
	fairy.addAnimation("fairyflying",fairyImg);
	//set scale for fairy
	fairy.scale =0.25;

	//create a sprite for star
	star = createSprite(650,30);
	//add image for star
	star.addImage(starImg);
	//set velocity for star
	star.velocityY = 0;
	//set scale for star
	star.scale = 0.2;

	//create engine
	engine = Engine.create();
	world = engine.world;

	//create starbody and add into the world
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	//run the engine
	Engine.run(engine);

	star.x = starBody.position.x;
	star.y = starBody.position.y;

}


function draw() {
  //create background
  background(bgImg);

  //if left is pressed
  if(keyDown("left")){
	//set velocity for fairy  
    fairy.x = fairy.x - 3;
  }

  //if right is pressed
  if(keyDown("right")){
	//set velocity for fairy  
    fairy.x = fairy.x + 3;
  }

  //if down is pressed
  if(keyDown("down")){
    //set velocity for star
    star.velocityY = 3;
  }

  //to stop the star in the fairy's hand
  if(star.y > 480 && star.y < 500 && fairy.x > 505 && fairy.x < 540){
	star.velocityY = 0;
	fairy.velocityX = 0;
  }

  //play the sound
  fairyVoice.play();
  //to check the positions
  console.log(fairy.x);
  console.log(star.y);

  //display the sprites
  drawSprites();

}
