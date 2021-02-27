
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mangao5,mango6,mango7;
var world,boy;
var rope1;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	 mango1=new mango(1000,100,30);
	mango2=new mango(1100,50,30);
	 mango3=new mango(1215,220,30);
	 mango4=new mango(910,180,30);
	 mango5=new mango(1100,150,30);
	 mango6=new mango(1000,200,30);
	 mango7=new mango(1165,160,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	stoneObj=new Stone(240,420)

	rope1= new Rope(stoneObj.body,{x:240,y:420})

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
	textSize(20)
	text("Press space to get a second chance to play!",30,30)

   treeObj.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   mango7.display();
 stoneObj.display();
   groundObject.display();
   rope1.display();

	detectollision(stoneObj,mango1)
	detectollision(stoneObj,mango2)
	detectollision(stoneObj,mango3)
	detectollision(stoneObj,mango4)
	detectollision(stoneObj,mango5)
	detectollision(stoneObj,mango6)
	detectollision(stoneObj,mango7)

}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	rope1.fly()
}

function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.radius){
		Matter.Body.setStatic(lmango.body,false)
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:240,y:420})
		rope1= new Rope(stoneObj.body,{x:240,y:420})
	}
}
