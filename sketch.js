const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg,macSnow = 1000;
var snow = [];
var rand;

function preload() {
    backgroundImg = loadImage("snow1.jpg");
}

function setup(){
   var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    
    rand = Math.round(random(1,4));
    if(frameCount%5 === 0){
      snow.push(new Snow(random(0,800),30,30));
    }
    for(var S = 0; S<snow.length; S++){
      snow[S].display();
    }
    drawSprites()
}
