
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(200,500);
	plane = new Plane(600,height,1200,20);
	rock = new Rock(200,500,50,50);
	rubber = new Rubber(900,450,70);
    Engine.run(engine);
  
}    


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  hammer.display();
  plane.display();
  rock.display();
  rubber.display();

  drawSprites();
 
}



