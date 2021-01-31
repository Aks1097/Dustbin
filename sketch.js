
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperObject,groundObject
var world;
var dustbin1,dustbin2,dustbin3;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	dustbinObject=new dustbin(1200,650);

	//Create a Ground


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  Render.run(render);



	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");

  paperObject.display();
  groundObject.display();
  dustbinObject.display();



}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

  	}
}
