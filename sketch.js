const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground1;
var bike;
var obstacle=[]
var fuel=[]
var gas=100;
var score=0
var flag=0
var flagb=0
var force=0
var lowfeul
var obsx,obsy;
var lowfeulImg;
var gameState="PLAY"

function preload() {
  
  backgroundImg = loadImage("images/space.png")
  lowfeulImg=loadImage("images/lowfuel.png")
  crashsound=loadSound("sound/DeathFlash.flac")
  crashImg=loadImage("images/crash.png")
}




function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
  
 
spaceship=new Spaceship(700,550,120,120)




speed=10;
y1=0;
y2=-displayHeight;



if(frameCount%0===150){
speed=speed+10
}



}




function draw() {
  Engine.update(engine);
  background("sky blue")

  image(backgroundImg,0,y1,displayWidth,displayHeight+10);
  image(backgroundImg,0,y2,displayWidth,displayHeight+10);
  
  console.log(y2)
 



   if (gameState=="PLAY"){



    if(y1>displayHeight){
      y1=-displayHeight+50
    }
    if(y2>displayHeight){
      y2=-displayHeight+50}
  
      y1+=speed;
      y2+=speed;
    
      spaceship.display();


if(frameCount%60===0){
  score=score+50
}
      

//for obstacle

if(frameCount%60===0){
  obstacle.push(new Obstacle(random(50,displayWidth-100),-10))
 }

if(score%100==0&&score>0){
  force=force+0.1



}

for (var j = 0; j < obstacle.length;j++ ){
Matter.Body.applyForce(obstacle[j].body,{x:obstacle[j].body.position.x,y:obstacle[j].body.position.y},{x:0,y:force})
  obstacle[j].display()
}




    //for feul

    if(frameCount%40===0){
      fuel.push(new Fuel(random(50,displayWidth-100),-10))
     }


     for (var b = 0; b < fuel.length;b++ ){
      fuel[b].display()
    }


   if(frameCount%60===0){
    gas=gas-10
  }
  
   if(gas==20){
     lowfeul=createSprite(140,150,5,5)
     lowfeul.scale=0.5
     lowfeul.addImage(lowfeulImg) 

   }
  // else{  }




if(gas===0){
  gameState="END"
}



     
 if(keyDown(LEFT_ARROW)){
  Matter.Body.translate(spaceship.body,{x:-10,y:0})
  
}
  

if(keyDown(RIGHT_ARROW)){

Matter.Body.translate(spaceship.body,{x:10,y:0})


}



   }



if(gameState=="END"){


textAlign(CENTER)
textSize(70)
fill('white')
text("GAME OVER",displayWidth/2,displayHeight/2)

imageMode(CENTER)
image(crashImg,spaceship.body.position.x,spaceship.body.position.y)



}



   textSize(20)
   fill("white")
   text(' feul =  '+gas,80,80)



   //for score


   textSize(20)
   fill("white")
   text(' score =  '+score,250,80)






drawSprites()
  
 

}








