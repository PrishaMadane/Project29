const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5, BlockPink6, BlockPink7;
var BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4, BlockBlue5, BlockBlue7 ,BlockBlue8;
var engine, world;
var ground1;
var polygon1;
var sling;
var ground2;

function preload()
{
  boyimg= loadImage('polygon.png');
}
function setup() {

    createCanvas(800,400);
  
    engine = Engine.create();
    world = engine.world;
  
    ground1 = new Ground(170, 310, 200,25);
    ground3 = new Ground(490, 200, 200,25);

    //first level
    BlockBlue1 = new Box(200,280,30,35);
    BlockBlue2 = new Box(235,280,30,35);
    BlockBlue3 = new Box(270,280,30,35);  
    BlockBlue4 = new Box(305,280,30,35); 
    BlockBlue5 = new Box(220,235,30,35);  
    BlockBlue6 = new Box(255,235,30,35);  
    BlockBlue7 = new Box(290,235,30,35);
    BlockBlue8 = new Box(255,200,30,35);
  
    //second level
    BlockPink1 = new BoxPink(485,180,30,35);  
    BlockPink2 = new BoxPink(520,180,30,35); 
    BlockPink3 = new BoxPink(545,180,30,35);  
    BlockPink4 = new BoxPink(465,160,30,35);
    BlockPink5 = new BoxPink(500,160,30,35);
    BlockPink6 = new BoxPink(445,140,30,35); 
    BlockPink7 = new BoxPink(480,140,30,35);
  
    polygon1 = new Polygon(100,100,40);
    
    sling = new SlingShot(polygon1.body, { x: 60, y: 90 });

    ground2 = new Ground(0, 380, 800,35);

    Engine.run(engine);
}  

function draw() {
    background(56, 44, 44);

    ground1.display();
    ground2.display();
    ground3.display();
  
    BlockBlue1.display();
    BlockBlue2.display();
    BlockBlue3.display();
    BlockBlue4.display();
    BlockBlue5.display();
    BlockBlue6.display();
    BlockBlue7.display();
    BlockBlue8.display ();

    BlockPink1.display ();
    BlockPink2.display ();
    BlockPink3.display ();
    BlockPink4.display ();
    BlockPink5.display ();
    BlockPink6.display ();
    BlockPink7.display ();

    polygon1.display();
  
    sling.display();
  }
  
  function mouseDragged() {
    Matter.Body.setPosition(polygon1.body, {x:mouseX, y:mouseY });
  }
  
  function mouseReleased() {
    sling.fly();
  }