class Obstacle{
    constructor(x,y){
        var options={
            restitution:0.4,
            isStatic:false
        }
       
      
       this.body = Bodies.rectangle(x,y,200,200,options);
       World.add(world,this.body);
       this.h=200;
       this.w=200;
       this.image=loadImage("images/asteroid31.png")
      


    }
    display(){
        var pos = this.body.position;
        push();
        fill("red");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.h,this.w);
        pop();
       
        
       

    }

   

}

