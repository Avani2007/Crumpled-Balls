
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var paperBall, ground, bin;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20)
	paperBall = new Garbage(100,100)
	bin = new Dustbin(500, 500, 20, 100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperBall.display();
  ground.display();
  bin.display();
  drawSprites();
 
}



