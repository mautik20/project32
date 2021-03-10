const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, rope;
var backgroundImg;
var score=0;

function preload(){
  polygon_img = loadImage("sprites/polygon.png");
  getbackgroundImage();  
}

function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;
  roof=new Roof(405.5,280,148,10);
  roof1=new Roof(600,495,1200,10);
    //base one
  block1=new Block(445.5,260,20,30);
  block2=new Block(465.5,260,20,30);
  block3=new Block(345.5,260,20,30);
  block4=new Block(365.5,260,20,30);
  block5=new Block(385.5,260,20,30);
  block6=new Block(405.5,260,20,30);
  block7=new Block(425.5,260,20,30);
  
  //base two
  block8=new Block(365.5,230,20,30);
  block9=new Block(385.5,230,20,30);
  block10=new Block(405.5,230,20,30);
  block11=new Block(425.5,230,20,30);
  block12=new Block(445.5,230,20,30);
  //base three
  block13=new Block(385.5,200,20,30);
  block14=new Block(405.5,200,20,30);
  block15=new Block(425.5,200,20,30);
  //base four
  block16=new Block(405.5,170,20,30);

  ball = new Ball(200, 200, 30, 30);
  rope = new Rope(ball.body, { x: 210, y: 200});
}
function draw() {
  if(backgroundImg)
  background(backgroundImg);
  textSize(35);
  fill("white");
  text("score:"+score,650,40);
  Engine.update(engine);
  roof.display();
  roof1.display();
    block1.display(); 
    block2.display(); 
    block3.display(); 
    block4.display(); 
    block5.display(); 
    block6.display(); 
    block7.display(); 
    block8.display(); 
    block9.display(); 
    block10.display(); 
    block11.display(); 
    block12.display(); 
    block13.display(); 
    block14.display(); 
    block15.display();   
    block16.display();
    ball.display();
    rope.display();
}

// var score=0


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


function mouseReleased(){
  rope.fly();
}

 
function keyPressed(){
  if(keyCode==32){
rope.attach(ball.body)
  }
}

async function getbackgroundImage()
{
var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON=await response.json();
//console.log(responseJSON);
var a=responseJSON.datetime;
//console.log(a);
var hour=a.slice(11,13);
//console.log(hour);
if(hour>=06&&hour<=14)
{bg="sprites/bg.png"
} 
else{
    bg="sprites/bg2.jpg"
}
backgroundImg=loadImage(bg);


}