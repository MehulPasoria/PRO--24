
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj,paperObject,groundObject;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 680);
	rectMode(CENTER);

	dustbinObj=new dustbin(1100,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	Engine.run(engine);
  
}


function draw() {
  background(0); 
  rectMode(CENTER);
  
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
    	
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}




