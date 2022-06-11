const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
let engine;
let world;
var pipe,pipecap,ball,ground

function setup(){
    createCanvas(600,600)
    engine = Engine.create();
  world = engine.world;
options={
    isStatic:true
}

  ball = Bodies.circle(300,300,20,options);
  World.add(world,ball)
  pipe = Bodies.rectangle(300,100,20,10,options);
  World.add(world,pipe)
  pipecap = Bodies.rectangle(300,300,20,10,options);
  World.add(world,pipecap)
  ground = Bodies.rectangle(300,300,20,20,options);
  World.add(world,ground)
}

function draw(){
    background(250)
    rect(ground.x,ground.y,20,20)
    rect(pipe.x,pipe.y,20,10)
    rect(pipecap.x,pipecap.y,10,10)
    ellipse(ball.x,ball.y,20,20)
    Engine.update(engine);
}
