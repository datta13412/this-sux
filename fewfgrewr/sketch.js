const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var swod, rick, arrow, sq
var sow,wick,aww,sw
var engine, world;
var chain

function preload(){
sow=loadImage("swod.png")
wick=loadImage("wick.png")
aww=loadImage("aw.png")
  
}

function setup(){
createCanvas(500,500)
engine = Engine.create();
world = engine.world;

sq= new Square(50,250,50,50)

swod= new Sword(150,250,50,50)

chain= new SlingShot(sq.body,swod.body)
}





function draw(){
background("grey")
Engine.update(engine)
sq.display()
swod.display()

//chain.display()
}