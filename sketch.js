
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1000, 400);
	engine = Engine.create();
  world = engine.world;
  ground = new Ground(600, 380, 1200, 10);  
  paperball = new Paper(100, 200,);
  dustbin1 = new Dustbin(700, 320, 70, 70);
  dustbin2 = new Dustbin(770, 390, 70, 70);
  dustbin3 = new Dustbin(800, 460, 70, 70);

  
	Engine.run(engine);
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85, y:-85});
  }
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  paperball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}



