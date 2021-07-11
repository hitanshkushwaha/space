const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground1;
var bike;
var obstacle=[]
var feul=[]
var gas=100;
var score=0
var flag=0
var lowfeul
var obsx,obsy;
var lowfeulImg;
function preload() {
  
  backgroundImg = loadImage("images/space.png")
lowfeulImg=loadImage("images/lowfuel.png")
  }




function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
  
 
 bike=new Bike(700,550,120,120)
 




speed=5;
y1=0;
y2=-displayHeight;

}




function draw() {
  Engine.update(engine);
  background("sky blue")

  image(backgroundImg,0,y1,displayWidth,displayHeight);
  image(backgroundImg,0,y2,displayWidth,displayHeight);
  y1+=speed;
  y2+=speed;

  console.log(y2)
 
  if(y1>displayHeight){
    y1=-displayHeight+50
  }
  if(y2>displayHeight){
    y2=-displayHeight+50  }


    bike.display();


//for obstacle

if(frameCount%60===0){
  obstacle.push(new Obstacle(random(50,displayWidth-100),-10))
 }

for (var j = 0; j < obstacle.length;j++ ){
  obstacle[j].display()
}


    

    //for feul

    if(frameCount%160===0){
      fuel.push(new Fuel(random(50,displayWidth-100),-10))
     }


     for (var b = 0; b < feul.length;b++ ){
      fuel[b].display()
    }


   textSize(20)
   fill("white")
   text(' feul =  '+gas,80,80)

   if(frameCount%5===0){
    gas=gas-10
  }
  
   if(gas==0){
     lowfeul=createSprite(140,150,5,5)
     lowfeul.scale=0.5
     lowfeul.addImage(lowfeulImg)
     
   }


   //for score


   textSize(20)
   fill("white")
   text(' score =  '+score,250,80)











drawSprites()
  //for moving the spaceship
   
 if(keyDown(LEFT_ARROW)){
   Matter.Body.translate(bike.body,{x:-5,y:0})
   
 }
   

if(keyDown(RIGHT_ARROW)){

Matter.Body.translate(bike.body,{x:5,y:0})


}

}








