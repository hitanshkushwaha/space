class Obstacle{
    constructor(x,y){
        var options={
            restitution:0.4,
            isStatic:false
           
        }
       
      
       this.body = Bodies.rectangle(x,y,100,100,options);
       World.add(world,this.body);
       this.h=100;
       this.w=100;
       
       this.image=loadImage("images/asteroid31.png")
      


    }
    display(){
        var pos = this.body.position;
        push();
        fill("red");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.h,this.w);
        pop();
       
        
       



     var collision=Matter.SAT.collides(spaceship.body,this.body)
     if(collision.collided){
       flag=1

    


     
    }
if(flag===1){
    gameState="END"
    crashsound.play()

}



    }

   

}

