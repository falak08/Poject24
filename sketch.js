var paper,rect1,rect2,rect3,groundSprite,paperBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
paper=createSprite(50,500,20,20,options);

rect1=createSprite(width/2, height-35,200,20);
rect1.shapeColor="red";

rect2=createSprite(300,620,20,100);
rect2.shapeColor="red";

rect3=createSprite(500,620,20,100);
rect3.shapeColor="red";

groundSprite=createSprite(width/2, height-20, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBody = Bodies.circle(width/2 , 200 , 5,options);
	
	World.add(world, paperBody);
	
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  var options={
	  isStatic:false,
	  restitution:0.3,
	  friction:0.5,
	  density:1.2

  }
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paperBody,paperBody.position,{x:85,y:-85});	
	}
}

