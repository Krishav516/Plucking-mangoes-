
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 const Constraint = Matter.Constraint

var stone;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var boy, boyImg;
var ground, tree;
var thread;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1500, 600);

	engine = Engine.create();
	world = engine.world;

	boy = createSprite(270,530);
	boy.addImage(boyImg);
	boy.scale = 0.1;

	stone = new Stone(240, 500, 20);

	ground = new Ground(800,600,5000,2);

	tree = new Tree(1000,340,10);

	thread = new Thread(stone.body,{x:220, y:480})

	mango1 = new Mangoes(950,120,10,10)
	mango2 = new Mangoes(1000,240,10,10);
	mango3 = new Mangoes(950,200,10,10);
	mango4 = new Mangoes(1200,280,10,10);
	mango5 = new Mangoes(900,120,10,10);
	mango6 = new Mangoes(870,280,10,10);
	mango7 = new Mangoes(1100,180,10,10);
	mango8 = new Mangoes(850,200,10,10);

	Engine.run(engine);
  
}


function draw() {
 background(205);

 detectCollision(stone, mango1);
 detectCollision(stone, mango2);
 detectCollision(stone, mango3);
 detectCollision(stone, mango4);
 detectCollision(stone, mango5);
 detectCollision(stone, mango6);
 detectCollision(stone, mango7);
 detectCollision(stone, mango8);

  thread.display();

  boy.display();

  tree.display();

  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  stone.display();

  ground.display();

  rectMode(CENTER);
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	thread.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x: 240, y: 500})
		thread.attach(stone.body);
		}
}

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.radius+lstone.radius)
	{
		Matter.Body.setStatic(lmango.body, false);
	}
}